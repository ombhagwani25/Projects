//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const swal = require("sweetalert2");


// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/test")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// TODO: Model.findByIdAndRemove()


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemSchema);




app.get("/", async function (req, res) {
  const itemArray = []
  const data = await Item.find().then((temp) => {
    // temp.map(i => {
    //   itemArray.push(i.name);
    //   // console.log(i.name);
    // })
    
    const today= new Date().toLocaleString('en-us' , {dateStyle : "full"})
    const todayDate = today.substring(0,today.length-6);
    res.render("list", { listTitle: todayDate, newListItems: temp });
  })



  
});

// route for deletion
app.post("/delete", async (req, res) => {
  const checkedItem = req.body.cBox;
  try {
    await Item.findByIdAndRemove({ _id: new mongoose.Types.ObjectId(checkedItem) })

  } catch (error) {
    console.log(error);
  }

  res.redirect("/");
});


app.post("/" , (req ,res)=> {
  const currItem = req.body.newItem;
  // creating a new mongo document to store this item
  const itemDoc = new Item({name : currItem});
  itemDoc.save();
  res.redirect("/");
})

// dynamic routing - Creating multiple lists

app.get(":urlVar" , (req,res)=> {
  const urlVar = req.params.urlVar;
  console.log(urlVar);

})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
