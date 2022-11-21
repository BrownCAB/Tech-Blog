// import models
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

// Create our User model
class Comment extends Model {}

Comment.init (
    {
        id:{
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }, 
        },
        user_id:{
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
        // Add the reference to the post id 
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id",
            },
        },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
    }
);

// Export Comment
module.exports = Comment;
