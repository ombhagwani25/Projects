
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//  using ejs 
app.set('view engine' ,'ejs');

app.use(bodyParser.urlencoded({extended : true}))

app.use(express.static("public"));

let items = ["Buy Food" , "Cook Food", "Eat Food"];
let workItems = []; 

app.get("/", (req, res) => {
    
    const today = new Date();
    
    // another cool method of getting days using JS
    var options =  {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("en-US",options);  
    res.render('list' , {listTitle : day  , newListItem : items})
console.log("error commit !! no changes");

})

app.post("/" , (req,res)=> {
     var item = req.body.itemName;
     items.push(item);
    res.redirect("/");
})

// targeting the work element
app.get("/work" , (req,res)=> {
    res.render("list" , {listTitle : "Work" , newListItem : workItems})
})

app.post("/work" , (req,res)=> {
    let currItem = req.body.newItem;
    workItems.push(currItem);
    res.redirect("/work");
})


app.listen(3000);
