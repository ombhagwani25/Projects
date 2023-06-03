//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Welcome to your TodoList!"
});

const item2 = new Item({
  name: "Hit the + icon to add a new item"
});

const item3 = new Item({
  name: "<-- Touch this to delete an item"
});

const defaultArr = [item1, item2, item3];

// Uncomment the following line if you want to insert default items every time the server starts
// Item.insertMany(defaultArr);

app.get("/", function(req, res) {
  Item.find({}, function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.render("list", { listTitle: "Today", newListItems: items });
    }
  });
});

app.post("/", function(req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Work") {
    // Save the item to the database
    item.save();
    res.redirect("/work");
  } else {
    // Save the item to the database
    item.save();
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  Item.find({}, function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.render("list", { listTitle: "Work List", newListItems: items });
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
