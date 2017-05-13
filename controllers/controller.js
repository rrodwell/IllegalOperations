
var db = require("../models");

module.exports = function(app) {
    //get api data for all data 
    app.get("/api/all/", function(req, res) {
        db.Player.findAll({})
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    // Get route for returning for WR
    app.get("/api/posts/category/wideReceiver", function(req, res) {
        db.Player.findAll({
                where: {
                    Position: WR
                },
                order: ["Fantasy Points", "ASC"]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });

    // get api for tunningBack
    app.get("/api/posts/category/runningBack", function(req, res) {
        db.Player.findAll({
                where: {
                    Position: RB
                },
                order: ["Fantasy Points", "ASC"]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    //get api data of all quarterbacks
    app.get("/api/posts/category/quarterBack", function(req, res) {
        db.Player.findAll({
                where: {
                    Position: QB
                },
                order: ["Fantasy Points", "ASC"]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    // get api data of all tightEnds
    app.get("/api/posts/category/tightEnd", function(req, res) {
        db.Player.findAll({
                where: {
                    Position: TE
                },
                order: ["Fantasy Points", "ASC"]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });
    // Get all data of all kickers
    app.get("/api/posts/category/kicker", function(req, res) {
        db.Player.findAll({
                where: {
                Position: K
                },
                order: ["Fantasy Points", "ASC"]
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });


};

var express = require("express");

var router = express.Router();
var db = require("../models");


// Create all our routes and set up logic within those routes where required.



// Export routes for server.js to use.
module.exports = router;

