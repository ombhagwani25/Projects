const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const bcrypt = require("bcrypt");




require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);




const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.get("/", (req, res) => {
  res.send("Home page.");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log('URI:', uri);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.log("Connection failed!");
    console.log(error);
  });
