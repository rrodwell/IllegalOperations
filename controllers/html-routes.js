var path = require("path");
var db = require("../models");
var jwtExp = require("express-jwt");
var tokenSecret = require("../tokensecret.js");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.use("/main", jwtExp({
    secret: tokenSecret,
    getToken: function fromCookie(req) {
      if (req.signedCookies) {
        return req.signedCookies.jwtAuthToken;
      }
      return null;
    }
  }));


};