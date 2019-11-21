const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index.js');
const db = require('./models/index.js');
const passport = require('./config/passport');
const session = require('express-session');
const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync().then(() => {
  app.listen('3000', err => {
    if (err) {
      console.log(err);
    }
    console.log('Listening on port 3000.');
  });
});
