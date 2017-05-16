var db = require("../models");
var express = require("express");
var app =express.Router();

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

    db.User.findOne({ // needs correction
        where: {
            email: req.body.email.trim()
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