const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res, next) => {
  axios
    .get("https://www.affirmations.dev/")
    .then((response) => {
      // response.data est un objet, pas un tableau
      let post = response.data;

      res.render("posts", {
        post: post, // passer l'objet directement à la vue
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
