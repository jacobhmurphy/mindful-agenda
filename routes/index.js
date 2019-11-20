const express = require('express')
const app = express()
const routes = express.Router()

routes.get("/", (req, res) => {
    res.render("home.ejs");
  });

routes.get("/signup", (req, res) => {
  res.render("signup.ejs");
})

routes.post("/signup", (req, res) => {
  console.log("hitting the post route on signup page")
})

module.exports = routes;