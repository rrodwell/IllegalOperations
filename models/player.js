var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Player = sequelize.define("player", {
    //define column metadata here
});

Player.sync();

module.exports = Player;