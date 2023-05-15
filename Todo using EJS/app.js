
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//  using ejs 
app.set('view engine' ,'ejs');

app.use(bodyParser.urlencoded({extended : true}))

var itemName = "";

app.get("/", (req, res) => {
    
    const today = new Date();
    
    // another cool method of getting days using JS
    var options =  {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("en-US",options);  
    res.render('list' , {kindOfDay : day  , newListItem : itemName})

})

app.post("/" , (req,res)=> {
     itemName = req.body.itemName;
    // res.render("list", {newListItem : itemName})
    res.redirect("/");


})


app.listen(3000);
