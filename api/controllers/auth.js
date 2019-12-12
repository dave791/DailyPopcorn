const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');


router.post('/signup', (request, response) => {
  console.log("POST body: ", request.body);
  User.create({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    username: request.body.username,
    password: request.body.password,
  })
    .then((user) => {
      console.log(user);
      request.login(user, () => response.status(201).json(user));
    })
    .catch((err) => {
      console.log(err);
      response.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login',
  passport.authenticate('local'),
  (request, response) => {
    // If this function gets called, authentication was successful.
    // `request.user` contains the authenticated user.
    console.log(request.user);
    response.json(request.user);
  });

router.post('/logout', (request, response) => {
  request.logout();
  response.status(200).json({ message: 'Logout successful' });
})

module.exports = router;
