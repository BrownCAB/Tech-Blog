// import models
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

// Create our User model
class User extends Model {

// Set up method to run on instance data tyoe {per user} to check password 
checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this,password);
    }
}

User.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.passowrd = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
              async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    }
);

// Export User
module.exports = User;
