const express = require("express");
const router = express.Router();

router.get("/", (req, res, next)=>{
//    res.send("This is a simple response");
res.render("index");
});

module.exports = router;

