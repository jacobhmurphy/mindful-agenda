const express = require('express');
const routes = express.Router();
const passport = require('../config/passport');

routes.get('/', (req, res) => {
  res.render('home.ejs');
});

routes.get('/login', (req, res) => {
  res.render('login.ejs');
});

routes.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/',
  }),
);

routes.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

routes.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true,
  }),
);

module.exports = routes;
