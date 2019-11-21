const express = require('express');
const routes = express.Router();
const db = require('../models/index');
const passport = require('../config/passport');

routes.get('/', (req, res) => {
  res.render('home.ejs');
});

routes.post('/new_task', (req, res) => {
  db.Tasks.create({ taskItem: req.body.todoInputField });
});

routes.get('/login', (req, res) => {
  res.render('login.ejs');
});

routes.post('/login', (req, res) => {
  console.log('Hitting the post route for /login');
});

routes.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

routes.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
  }),
);

module.exports = routes;
