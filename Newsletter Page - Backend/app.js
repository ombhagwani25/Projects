const express = require("express")
const request = require("request");
const app = express();

app.use(express.static("public"));

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended : true}));


app.post("/", (req,res)=> {
    let firstname  = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    console.log("first name : " , firstname , "  last name :  " ,lastname , "  email : " , email);
})

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/signup.html");


})

app.listen(3000);

