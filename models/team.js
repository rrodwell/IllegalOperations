var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Team = sequelize.define("team", {
    team_name: Sequelize.STRING,
    team_strength: Sequelize.DECIMAL(10,2)
});

Team.sync();

module.exports = Team;