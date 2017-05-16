var db = require("../models");
var express = require("express");
var app = express.Router();
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

app.get("/", function(req, res) {
    db.player.findAll({
            order: [
                ["FantasyPoints", "DESC"]
            ]

        })
        .then(function(data) {
            var hbsObject = {
                player: data
            };
            res.render("index", hbsObject);
        });
});

// Get route for positions
app.get("/api/posts/Position/:Position", function(req, res) {
    db.player.findAll({
            where: {
                Position: [req.params.Position]
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
    db.team.findAll({})
        .then(function(dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});
app.get("/api/user/", function(req, res) {
    db.team.findAll({})
        .then(function(dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});



// Export routes for server.js to use.
module.exports = app;