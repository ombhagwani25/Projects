//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/test")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemSchema);




app.get("/", async function (req, res) {
  const itemArray = []
  const data = await Item.find().then((temp) => {
    temp.map(i => {
      itemArray.push(i.name);
      console.log(i.name);
    })
    res.render("list", { listTitle: "day", newListItems: itemArray });
  })



  
});

// route for deletion

app.post("/delete" , (req,res)=> {
  console.log(req.body);
  res.redirect("/");
})

app.post("/" , (req ,res)=> {
  const currItem = req.body.newItem;
  // creating a new mongo document to store this item
  const itemDoc = new Item({name : currItem});
  itemDoc.save();
  res.redirect("/");
})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
