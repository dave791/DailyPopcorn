const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');

const { Comment } = db;

router.post('/:user_id/:post_id',
  passport.isAuthenticated(),
  (request, response) => {
  const _content = request.body.content;
  const { user_id } = request.params;
  const { post_id } = request.params;
  Comment.create({
    content: _content, UserID: user_id, PostID: post_id
  }).then(comment => {
    response.status(201).json(post);
  }).catch(error => {
    response.status(400).json(error);
  });
});

router.get('/:post_id',
  (request, response) => {
    const { post_id } = request.params;
    Comment.findAll({
      where: {PostID: post_id}
    }).then(comments => {
      if (!comments) {
        return response.json({})
      }
      response.json(comments);
    })
});
