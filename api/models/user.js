'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

const PASSWORD_LENGTH = 8;

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
        isAlpha: true,
      },
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true,
      },
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        notEmpty: true,
        isLongEnough: (value) => {
          if (value.length < PASSWORD_LENGTH) {
            throw new Error('Password length too short');
          }
        },
      },
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: "user",
    freezeTableName: true,
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
    if (user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};
