const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const routes = require("./routes/index.js");
const db = require("./models/index.js")

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(routes)

db.sequelize.sync().then(() => {
  app.listen("3000", err => {
    if (err) throw err;
    console.log("Listening on port 3000.");
  });
})