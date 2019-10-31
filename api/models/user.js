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
    //TODO (ElvisRodriguez) add associations to Post and Comment models
  };

  return User;
};
