var db = require("../models");
var path = require("path");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var app = express.Router();
var salt = require("../salt.js");
var tokenSecret = require("../tokensecret.js");
var jwtExp = require("express-jwt");


// app.post("/register", function(req, res) {

//   console.log(req.body.email, req.body.password, req.body.id, req.body.hash);
  
//   bcrypt.hash(req.body.password, salt,function(err, hash) {
//     db.user.create({
//       email: req.body.email,
//       userId: req.body.userId,
//       password: hash
//     }).then(function(user) {

//       console.log("successfully created user");

//       res.redirect("/");

//     }).catch(function(err) {

//       console.log("cannot create user");
//       res.render("/", {
//         "status": "Please fill in the form correctly."
//       });
//     });
//   });
// });


// app.post("/", function(req, res) {
//   console.log(req.body.email, req.body.password);
//   db.user.findOne({
//     email: req.body.email
//   }).then(function(user) {
//     if (!user) {
//       res.render("index", {
//         "status": "Invalid username or password"
//       });
//     } else {
//       bcrypt.compare(req.body.password, user.password, function(err, valid) {
//         if (err || !valid) {
//           res.render("index", {
//             "status": "Invalid username or password"
//           });
//         } else {

//           var userToken = jwt.sign({
//             exp: Math.floor(Date.now() / 1000) + (60 * 60),
//             user: user.email
//           }, tokenSecret);

//           //
//           res.cookie("userToken", userToken, {
//             secure: true,
//             signed: true
//           });

//           db.player.findAll({

//           }).then(function(player) {
//             var hbsObject = {
//               user: user,
//               player: player
//             };
//             res.redirect("/players");
//           });

//         }
//       });
//     }
//   });
// });



module.exports = app;