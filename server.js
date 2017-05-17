var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    jwt = require("jsonwebtoken"),
    jwtExp = require("express-jwt"),
    tokenSecret = require("./config/tokensecret.js"),
    cookieParser = require("cookie-parser");


var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser(tokenSecret));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/html-routes.js")(app);
var playersRoutes = require("./controllers/players-api-routes.js");
var usersRoutes = require("./controllers/users-controller.js");


app.use("/api", playersRoutes);

app.use("/user", usersRoutes);

app.use("/secure", function(req, res, next) {

  console.log("hitting server.js");

  if (!req.header("Authorization")) {
    res.render("/login");
    console.log("not authorized");
  } else {
    jwt.verify(req.header("Authorization"), tokenSecret, function(err, decoded) {
      if (err) {
        console.log("err", err);
        console.log("not authorized")
        res.render("/login");
      } else {
        res.json({"status": "authorized"});
        console.log(decoded.data);
        next();
      }
    });
  }
});

app.use("/secure", playersRoutes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Node app is running on port " + PORT);
    });
});