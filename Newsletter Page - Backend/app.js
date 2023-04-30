const express = require("express")
const request = require("request");
const app = express();


const bodyParser = require("body-parser");

app.get("/", (req,res)=> {
    res.send("Server is working fine ...")

})

app.listen(3000);

