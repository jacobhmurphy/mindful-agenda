var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models/index');

passport.use(
  new LocalStrategy({ usernameField: 'email' }, function(
    email,
    password,
    done,
  ) {
    db.Users.findOne({ where: { email: email } }).then(function(
      dbUser,
    ) {
      if (!dbUser) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!dbUser.verifyPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, dbUser);
    });
  }),
);

passport.use(
  'local-signup',
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    function(req, email, password, done) {
      db.Users.findOne({ where: { email: email } }).then(function(
        dbUser,
      ) {
        if (dbUser) {
          return done(null, false, {
            message: 'Email already in use',
          });
        } else {
          db.Users.create({
            email: email,
            password: password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mantra: req.body.mantra,
            audioOrVideo: req.body.audioOrVideo,
          }).then(function(newUser) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    },
  ),
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
