
var db = require("../models");
var express = require("express");
var app =express.Router();
    //get api data for all data 
    app.get("/api/all/", function(req, res) {
        db.Player.findAll({

                order: ["Fantasy Points", "ASC"]
            })
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
       app.get("/api/team/all", function(req, res) {
        db.Team.findAll({
            })
            .then(function(dbAllPlayers) {
                res.json(dbAllPlayers);
            });
    });




// Export routes for server.js to use.
module.exports = app;

