const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');

const { Movie } = db;

router.get('/', (request, response) => {
  Movie.findAll({})
    .then(movies => response.json(movies));
});

router.post('/', (request, response) => {
  const package = request.body;
  Movie.create({ package })
    .then(movie => response.status(201).json(movie))
    .catch(err => response.status(400).json(err));
});

router.get('/:title', (request, response) => {
  Movie.findAll({
    where: {
      title: request.params.title
    }
  }).then(movies => response.json(movies));
});

router.get('/:genre', (request, response) => {
  Movie.findAll({
    where: {
      genre: request.params.genre
    }
  }).then(movies => response.json(movies));
});

module.exports = router;
