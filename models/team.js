module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("team", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },

        strength: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    });
    return Team;
}