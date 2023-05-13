
const express = require("express")
const bodyParser = require("body-parser")
const app = express();



//  using ejs 
app.set('view engine' ,'ejs');
app.get("/", (req, res) => {
    
    const today = new Date();
    var currDay = today.getDay();
    // var dayString = "";
    const daysOfWeek =  ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday" ,"Saturday" ];

    //   res.sendFile(__dirname + "/index.html")
    // using res.render() , that supports ejs
    res.render('list' , {'kindOfDay' : daysOfWeek[currDay]})

})

app.listen(3000);
