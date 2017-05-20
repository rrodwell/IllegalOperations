var db = require("../models");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
var salt = require("../salt.js");
var tokenSecret = require("../tokensecret.js");

authRouter.get("/register", function(req, res) {
  res.render("register", {
    status: "Create a username and passwrd."
  });
});

authRouter.post("/register", function(req, res) {
  bcrypt.genSalt(10, function(err, data) {
    if (err) {
      console.log("there is an error");
      res.render("register", {
        status: "Unable to create username with password provided."
      });
    } else {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        db.user.create({
          email: req.body.email,
          userId: req.body.userId,
          password: hash,
          league_name: req.body.league_name,
          team_name: req.body.team_name
        }).then(function(user) {
          console.log("redirect not working");
          res.redirect("/auth/login");
        }).catch(function(err) {
          console.log("error: " + err);
          res.render("register", {
            status: "Unable to create usernmae with password provided",
            error: err
          });
        })
      });
    }
  });
});

authRouter.get("/login", function(req, res, next) {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render("login", {
      status: "Enter your username and password."
    });
  }
});

authRouter.post("/login", function(req, res,  next) {
  db.user.findOne({
    email: req.body.email
  }).then(function(user) {
    if (!user) {
      console.log("No user found.");
      res.render("login", {
        status: "Invalid username or password."
      });
    } else {
      var jwtAuthToken = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
          userId: user.userId
        }
      }, tokenSecret);

      res.cookie("jwtAuthToken", jwtAuthToken, {
        secure: process.env.NODE_ENV === "production",
        signed: true
      });

      res.redirect("/");
    }
  }).catch(next);
});





module.exports = authRouter;