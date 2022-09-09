const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let dbConnection = "Waiting for database response...";

router.get("/", (req, res) => {
  res.send(dbConnection);
});

mongoose.connect("mongodb://mongodb:27017/test");

mongoose.connection.on("error", (error) => {
  console.log("Database connection error:", error);
  dbConnection = "Error connecting to database";
});

mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
  dbConnection = "Connected to Database";
});
module.exports = router;
