var db = require("../models");
var express = require("express");
var userRouter = express.Router();


userRouter.get("/", function(req, res, next) {
  db.player.findAll({
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
    .then(function(player) {
        var hbsObject = {
          player: player
        };
        res.render("players", hbsObject);
    }).catch(next);
});


userRouter.get("/sign-out", function(req, res) {
  res.clearCookie("jwtAuthToken");
  res.redirect("/auth/login");
});

module.exports = userRouter;
