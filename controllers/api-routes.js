var db = require("../models");
var express = require("express");
var apiRouter = express.Router();

//***All responses from api routes should be returned in JSON.

//get api data for all data 
apiRouter.get("/players/all", function(req, res) {
    db.player.findAll({
            order: [
                ["FantasyPoints", "DESC"]
            ]
        })
        .then(function(dbAllPlayers) {
            res.json(dbAllPlayers);
        });
});

// Get route for positions
apiRouter.get("/players/:position", function(req, res) {
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


// Export routes for server.js to use.
module.exports = apiRouter;