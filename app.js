const express = require("express");
const app = express();
const routes = require("./routes/index.js");

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(routes)

app.listen("3000", err => {
  if (err) throw err;
  console.log("Listening on port 3000.");
});
