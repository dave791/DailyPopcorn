'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullName() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        allowNull: false,
        isAlpha: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        allowNull: false,
        isAlpha: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        allowNull: false,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        allowNull: false,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        notEmpty: true,
        allowNull: false,
        isLongEnough: (value) => {
          if (value.length < 8) {
            throw new Error('Password length too short');
          }
        },
      },
    },
    passwordHash: {
      type: DataTypes.STRING
    },
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

    // Users can like many movies
    models.User.belongsToMany(models.Movie, {
      as: 'LikedMovie', foreignKey: 'MovieID', through: 'UserMovie'
    });
  };

  User.beforeSave((user, options) => {
    if (password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};
