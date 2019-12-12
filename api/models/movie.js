'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {}

  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isNumeric: true,
        len: 4,
      },
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      defaultValue: 'Unrated',
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
      defaultValue: 'TBH',
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    writers: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    actors: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    shortPlot: {
      type: DataTypes.STRING,
    },
    longPlot: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    awards: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
    },
    ratings: {
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue('ratings'));
      },
      set: function(value) {
        return this.setDataValue('ratings', JSON.stringify(value));
      },
    },
    boxOfficeRevenue: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    productionCompany: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    imdbID: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'movie',
    freezeTableName: true,
  });

  Movie.associate = (models) => {
    // Movies can be liked by many users
    models.Movie.belongsToMany(models.User, {
      as: 'LikedMovie', foreignKey: 'UserID', through: 'UserMovie'
    });

    // Movies can appear in multiple posts
    models.Movie.belongsToMany(models.Post, {
      foreignKey: 'PostID', through: 'MoviePost'
    });
  };

  return Movie;
};
