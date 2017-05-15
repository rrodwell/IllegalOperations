var db = require("../models");
var express = require("express");
var app = express.Router();

// Create all our routes and set up logic within those routes where required.
app.get("/", function (req, res) {
    db.player.findAll({
        where: {
            Position: ["QB"]
        },
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
    db.player.findAll({
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
        .then(function (dbQBs, dbAllPlayers) {
            var hbsObject = {
                QBs: dbQBs,
                players:dbAllPlayers
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
});



//get api data for all data
app.get("/api/all/", function (req, res) {
    db.player.findAll({
        order: [
            ["FantasyPoints", "DESC"]
        ]

    })
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});
// Get route for returning for WR
app.get("/api/posts/category/wideReceiver", function (req, res) {
    db.player.findAll({
        where: {
            Position: ["WR"]
        },
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});

// get api for runningBack
app.get("/api/posts/category/runningBack", function (req, res) {
    db.player.findAll({
        where: {
            Position: ["RB"]
        },
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});
//get api data of all quarterbacks
app.get("/api/posts/category/quarterBack", function (req, res) {
    db.player.findAll({
        where: {
            Position: ["QB"]
        },
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});
// get api data of all tightEnds
app.get("/api/posts/category/tightEnd", function (req, res) {
    db.player.findAll({
        where: {
            Position: ["TE"]
        },
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});
// Get all data of all kickers
app.get("/api/posts/category/kicker", function (req, res) {
    db.player.findAll({
        where: {
            Position: ["K"]
        },
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});
app.get("/api/team/all", function (req, res) {
    db.team.findAll({})
        .then(function (dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});


// Export routes for server.js to use.
module.exports = app;

