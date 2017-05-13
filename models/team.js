module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("team", {
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        team_strength: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    });
    return Team;
}


