var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    path = require("path");

// var port = process.env.PORT || 3030;


var app = express();
app.set('port', (process.env.PORT || 8080));

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/jieun_test_controller.js");

app.use("/", routes);

// app.listen(port);
db.sequelize.sync().then(function () {
    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'));
    });
});

