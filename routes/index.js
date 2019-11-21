const express = require('express');
const routes = express.Router();
const db = require('../models/index');
const passport = require('../config/passport');

routes.get('/', (req, res) => {
  db.Tasks.findAll().then(results => {
    res.render('home.ejs', { todo: results });
  });
});

routes.post('/new_task', (req, res) => {
  db.Tasks.create({ taskItem: req.body.todoInputField }).then(
    results => {
      res.redirect('/');
    },
  );
});

routes.delete('/delete/:index', (req, res) => {
  db.Tasks.destroy({ where: { id: req.params.index } }).then(
    results => {
      res.json(results);
    },
  );
});

routes.get('/test', (req, res) => {
  res.render('test.ejs');
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
