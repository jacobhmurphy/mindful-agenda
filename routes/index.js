const express = require('express');
const routes = express.Router();
const db = require('../models/index');
const passport = require('../config/passport');

routes.get('/', (req, res) => {
  res.render('splash.ejs');
});

routes.get('/tasks', (req, res) => {
  db.Tasks.findAll({ where: { userID: req.user.id } }).then(
    results => {
      res.render('home.ejs', { todo: results, user: req.user });
    },
  );
});

routes.post('/new_task', (req, res) => {
  db.Tasks.create({
    taskItem: req.body.todoInputField,
    userID: req.user.id,
  }).then(results => {
    res.redirect('/tasks');
  });
});

routes.delete('/delete/:index', (req, res) => {
  db.Tasks.destroy({ where: { id: req.params.index } }).then(
    results => {
      res.json(results);
    },
  );
});

routes.get('/login', (req, res) => {
  res.render('login.ejs');
});

routes.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/tasks',
  }),
);

routes.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

routes.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/tasks',
    failureRedirect: '/signup',
  }),
);

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// meditation links

routes.get('/audio-meditation', (req, res) => {
  res.render('audio-meditation.ejs');
});

routes.get('/video-meditation', (req, res) => {
  res.render('video-meditation.ejs');
});

routes.get('/mantra-meditation', (req, res) => {
  res.render('mantra-meditation.ejs');
});

module.exports = routes;
