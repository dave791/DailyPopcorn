'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        allowNull: false,
      },
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        allowNull: false,
        isEmail: true,
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        allowNull: false,
      }
    },
    fullname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        allowNull: false,
        isAlpha: true,
      }
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // Each user may have many posts
    models.User.hasMany(models.Post, {as: 'UserPost', foreignKey: 'PostID'});

    // Each user may have many comments
    models.User.hasMany(
      models.Comment, {as: 'UserComment', foreignKey: 'CommentID'}
    );
  };

  return User;
};
