module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
                len: [6,255]
            },
            unique: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [6,20]
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 255]
            }
        },
        league_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 255]
            }
        }
    });
    return User;
}