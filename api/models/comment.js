'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

  Comment.init({
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 500],
        notEmpty: true,
        allowNull: false,
      },
    },
  }, {
    sequelize,
    modelName: 'comment'
  });

  Comment.associate = (models) => {
    // Each comment belongs to one user
    models.Comment.belongsTo(models.User, {as: 'Owner', foreignKey: 'UserID'});

    // Each comment belongs to one post
    models.Comment.belongsTo(models.Post, {as: 'Parent', foreignKey: 'PostID'});

    // Each comment may have a parent comment
    models.Comment.belongsTo(
      models.Comment, {
        as: 'ParentComment', foreignKey: {name: 'CommentID', allowNull: true}
      }
    );
  }

  return Comment;
};
