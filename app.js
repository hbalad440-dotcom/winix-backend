const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Winix API Working 🚀");
});

module.exports = app;