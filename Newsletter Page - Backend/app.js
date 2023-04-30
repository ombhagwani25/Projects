const express = require("express")
const app = express();


const bodyParser = require("body-parser");

app.get("/", (req,res)=> {
    res.send("Server is working fine ...")

})

app.listen(3000);

