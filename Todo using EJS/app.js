
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//  using ejs 
app.set('view engine' ,'ejs');

app.use(bodyParser.urlencoded({extended : true}))

app.use(express.static("public"));

var items = ["Buy Food" , "Cook Food", "Eat Food"];

app.get("/", (req, res) => {
    
    const today = new Date();
    
    // another cool method of getting days using JS
    var options =  {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("en-US",options);  
    res.render('list' , {kindOfDay : day  , newListItem : items})
console.log("error commit !! no changes");

})

app.post("/" , (req,res)=> {
     var item = req.body.itemName;
     items.push(item);
    res.redirect("/");
})


app.listen(3000);
