module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("player", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        YearClear: {
            //yyyy
            type: DataTypes.STRING,
            allowNull: false
        },
        Position: {
            //WR
            type: DataTypes.STRING,
            allowNull: false
        },
        ProBowl: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Age: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        WR: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        GamesPlayed: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        GamesStarted: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Receptions: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        LongestReception: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        LongestRushingAttempt: {
            //int 2 digits (can be neg)
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PickNumber: {
            //int 3 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        YdsSkd: {
            //int 3 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FantasyPoints: {
            //dec 10 dig 3 places
            type: DataTypes.DECIMAL(10, 3),
            allowNull: false
        }
    });
    return Player;
};