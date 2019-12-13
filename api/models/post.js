'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 500],
        notEmpty: true,
      },
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'post',
    freezeTableName: true,
  });

  Post.associate = (models) => {
    // Each post belongs to one user
    models.Post.belongsTo(models.User, {as: 'Owner', foreignKey: 'UserID'});

    // Each post may have many comments
    models.Post.hasMany(models.Comment, {as: 'Child', foreignKey: 'CommentID'});

    // Multiple posts can refer to the same movie
    models.Post.belongsToMany(models.Movie, {
      foreignKey: 'MovieID', through: 'MoviePost'
    });
  };

  return Post;
};
