const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');

// Note: similar to `const Post = db.Post;`
const { Post } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

router.get('/', (request,response) => {
  Post.findAll({})
    .then(posts => response.json(posts));
});

router.post('/',
  passport.isAuthenticated(),
  (request, response) => {
    let { content } = request.body;
    Post.create({ content })
      .then(post => {
        response.status(201).json(post);
      })
      .catch(err => {
        response.status(400).json(err);
      });
  }
);

router.get('/:id', (request, response) => {
  const { id } = request.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return response.sendStatus(404);
      }
      response.json(post);
    });
});

router.put('/:id',
  passport.isAuthenticated(),
  (request, response) => {
    const { id } = request.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return response.sendStatus(404);
        }
        post.content = request.body.content;
        post.save()
          .then(post => {
            response.json(post);
          })
          .catch(err => {
            response.status(400).json(err);
          });
      });
  }
);

router.delete('/:id',
  passport.isAuthenticated(),
  (request, response) => {
    const { id } = request.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return response.sendStatus(404);
        }
        post.destroy();
        response.sendStatus(204);
      });
  }
);

module.exports = router;
