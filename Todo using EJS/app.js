
const express = require("express")
const bodyParser = require("body-parser")
const app = express();



//  using ejs 
app.set('view engine' ,'ejs');
app.get("/", (req, res) => {
    
    const today = new Date();

    // another cool method of getting days using JS
    var options =  {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US",options);
    console.log(day);

  
    res.render('list' , {'kindOfDay' : day,

})

})

app.listen(3000);
