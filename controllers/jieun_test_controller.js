var db = require("../models");
var express = require("express");
var app =express.Router();
    //get api data for all data 
    app.get("/api/all/", function(req, res) {
        db.player.findAll({
            order: [
                ["FantasyPoints", "DESC"]
            ]

            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    // Get route for returning for WR
    app.get("/api/posts/category/wideReceiver", function(req, res) {
        db.player.findAll({
                where: {
                    Position: ["WR"]
                },
            order: [
                ["FantasyPoints", "DESC"]
            ]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });

    // get api for tunningBack
    app.get("/api/posts/category/runningBack", function(req, res) {
        db.player.findAll({
                where: {
                    Position: ["RB"]
                },
            order: [
                ["FantasyPoints", "DESC"]
            ]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    //get api data of all quarterbacks
    app.get("/api/posts/category/quarterBack", function(req, res) {
        db.player.findAll({
                where: {
                    Position: ["QB"]
                },
            order: [
                ["FantasyPoints", "DESC"]
            ]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    // get api data of all tightEnds
    app.get("/api/posts/category/tightEnd", function(req, res) {
        db.player.findAll({
                where: {
                    Position: ["TE"]
                },
            order: [
                ["FantasyPoints", "DESC"]
            ]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    // Get all data of all kickers
    app.get("/api/posts/category/kicker", function(req, res) {
        db.player.findAll({
                where: {
                    Position: ["K"]
                },
            order: [
                ["FantasyPoints", "DESC"]
            ]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
       app.get("/api/team/all", function(req, res) {
        db.team.findAll({
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });

// USER ROUTING DRAFT===============================

app.post("/user/signup", function(req, res) {

    db.User.create({
        name: req.body.name,
        email: req.body.email,
        userID: req.body.userID,
        passwordHash: req.body.passwordHash
    }).then(function(dbUser) {
        res.redirect("")
    });

});

app.post("/user/login", function(req, res) {

    db.User.findOrCreate({
        where: {
            email: req.body.email.trim()
        },
        defaults: {
            email: req.email.trim(),
            passwordHash: req.body.passwordHash.trim()
        }
    }).then(function(result) {
        console.log(result);
        //should be an array where result[0]=instance of author
        //and result [1]=boolean stating if already created or not
        if (created) {
            console.log("Login successful.");
        }

        console.log("No user with that email. Please create an account.")

        res.redirect("/drafting/or/profile/page");
    });
});


//log in page (email, pw)
    //validations:
        //-valid email (@)
        //-valid pw










// =================================================


// Export routes for server.js to use.
module.exports = app;