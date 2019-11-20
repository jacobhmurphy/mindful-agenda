const express = require('express')
const routes = express.Router()

app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  module.exports = routes;