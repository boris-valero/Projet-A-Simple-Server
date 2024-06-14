const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/", (req, res, next) => {
  //    res.send("This is a simple response");
  axios
    .get("https://www.affirmations.dev/")
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("index");
});

module.exports = router;