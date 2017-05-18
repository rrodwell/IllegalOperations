var db = require("../models");
var path = require("path");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var app = express.Router();
var salt = require("../salt.js");
var tokenSecret = require("../tokensecret.js");
var jwtExp = require("express-jwt");

app.post("/register", function(req, res) {
  console.log(req.body.email, req.body.password, req.body.id, req.body.hash);
  bcrypt.hash(req.body.password, salt,function(err, hash) {
    db.user.create({
      email: req.body.email,
      userId: req.body.userId,
      password: hash
    }).then(function(user) {
      console.log("successfully created user");

      res.redirect("/");

    }).catch(function(err) {
      console.log("cannot create user");
      res.status(500).send(err);
      console.log("error: " + err);
    });
  });
});


app.post("/login", function(req, res) {
  console.log(req.body.email, req.body.password);
  db.user.findOne({
    email: req.body.email
  }).then(function(user) {
    if (!user) {
      console.log("no user found");
      //login page should show error saying "please create an account"
    } else {
      bcrypt.compare(req.body.password, user.password, function(err, valid) {
        if (err || !valid) {
          console.log("invalid username or password");
          res.end();
        } else {

          var userToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: user.id
          }, tokenSecret);

          //
          res.cookie("userToken", userToken, {
            secure: true,
            signed: true
          });

          res.redirect("/main/profile");

        }
      });
    }
  });
});



module.exports = app;