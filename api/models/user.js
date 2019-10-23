'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    fullname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
        isAlpha: true,
      }
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  return User;
};
