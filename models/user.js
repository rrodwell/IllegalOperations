module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [1,50]
            }
        },
        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpy: true,
                len: [1,255]
            }
        },

        userID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [1,20]
            }
        },

        passwordHash: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.VIRTUAL,
            set: function(val) { // need to look into salt hashing for this part
                this.setDataValue('password', val);
                this.setDataValue('password_hash', this.salt + val);
            },
            validate: { // need more pw restrictions
                isLongEnough: function(val) { // just an example; isLongEnough may have been deprecated
                    if (val.length < 7 ) {
                        throw new Error("Please choose a longer password");
                    }
                }
            }
        },

        passwordConfirmation: { // make sure is the same as password
            type: DataTypes.VIRTUAL
        }
    });
    return User;
}