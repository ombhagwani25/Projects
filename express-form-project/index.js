const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));

app.set('views', path.join(__dirname, 'public', 'views'));

app.get("/", (req,res)=> {
    res.render('index');

})


app.post("/signup" , (req,res)=> {
    const name = req.body.username;
    const email = req.body.email;
    const password= req.body.password;       

    const response = {
        username: name,
        email: email,
        password: password
    };

    res.send(response);
    
    
})

app.post("/signin" ,(req,res)=> {
    res.send("signin page backend");
})

app.listen(3001);

