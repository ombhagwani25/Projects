const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'public', 'views'));

app.get("/", (req,res)=> {
    res.render('index');

})


app.post("/signup" , (req,res)=> {
    res.send("singup page backend")
})

app.post("/signin" ,(req,res)=> {
    res.send("signin page backend");
})

app.listen(3000);

