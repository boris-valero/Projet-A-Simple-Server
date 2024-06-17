const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/", (req, res, next) => {
  axios
    .get("http://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      let postsArray = [];
      response.data.map((posts) => {
        postsArray.push(posts);
      });

      res.render("posts", {
        posts: postsArray,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
