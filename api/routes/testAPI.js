var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("API working");
});

module.exports = router;
