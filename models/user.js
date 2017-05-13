module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        user_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        } 
    });
    return User;
}