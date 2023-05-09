const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//  using ejs 
app.set('view engine' , 'ejs');

app.get("/", (req,res)=> {
    res.send("Hello");
})

app.listen(3000);
