const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const index = require ("./routes/index");

app.use("/", index);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});