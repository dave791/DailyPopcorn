const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;


function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

/*
  The following code runs at login time.
  The usernameField and passwordField options refer to the HTTP requests
  body parameter names.
*/
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
  (username, password, done) => {
    User.findOne({ where: { username } })
      .then((user) => {
        if(!user) {
          console.log('\n\nFailed Login: user does not exist\n\n');
          return done(null, false, { message: 'Failed Login' });
        }

        if(passwordsMatch(password, user.passwordHash) === false) {
          console.log('\n\nFailed Login: passwords did not match\n\n');
          return done(null, false, { message: 'Failed Login' });
        }

        console.log('\n\nSuccessful Login\n\n');
        return done(null, user, { message: 'Successfully Logged In!' });
      })
      .catch(err => { return done(err) });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      if (!user) {
        done(null, false);
        return;
      }

      done(null, user);
      return;
    })
    .catch(err => done(err, null));
});

// passport.redirectIfLoggedIn = (route) =>
//   (req, res, next) => (req.user ? res.redirect(route) : next());

// passport.redirectIfNotLoggedIn = (route) =>
//   (req, res, next) => (req.user ? next() : res.redirect(route));


module.exports = passport;
