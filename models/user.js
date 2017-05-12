var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
    user_name: Sequelize.STRING,
    user_email: Sequelize.STRING,
    user_ID: Sequelize.STRING,
    user_password: Sequelize.STRING
});

User.sync();

module.exports = User;