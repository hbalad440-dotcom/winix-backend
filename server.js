const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/winix")
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running");
    });
  });