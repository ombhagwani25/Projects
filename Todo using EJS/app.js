
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//  using ejs 
app.set('view engine' ,'ejs');

app.use(bodyParser.urlencoded({extended : true}))


app.get("/", (req, res) => {
    
    const today = new Date();
    
    // another cool method of getting days using JS
    var options =  {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("en-US",options);  
    res.render('list' , {'kindOfDay' : day,
    
})

})

app.post("/" , (req,res)=> {
    var itemName = req.body.itemName;
    console.log(itemName);
    res.send("Donee")
})


app.listen(3000);
