module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("player", {
        player_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            //yyyy
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            //WR
            type: DataTypes.STRING,
            allowNull: false,
        },
        pro_bowl: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        age: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wr: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        games_played: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        games_started: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        receptions: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        longest_reception: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        longest_reception_attempt: {
            //int 2 digits (can be neg)
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pick_number: {
            //int 3 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        yards_sacked: {
            //int 3 digits
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fantasy_points: {
            //dec 10 dig 3 places
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    });
    return Player;
}