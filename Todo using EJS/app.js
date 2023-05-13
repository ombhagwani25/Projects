
const express = require("express")
const bodyParser = require("body-parser")
const app = express();



//  using ejs 
app.set('view engine' ,'ejs');
app.get("/", (req, res) => {
    
    const today = new Date();
    var currDay = today.getDay();
    var dayString = "";
    if (currDay == 6 || currDay == 0) {
        dayString = "weekend"
    } else {
        dayString = "weekday"
    }
    //   res.sendFile(__dirname + "/index.html")
    // using res.render() , that supports ejs
    res.render('list' , {'kindOfDay' : dayString})

})

app.listen(3000);
