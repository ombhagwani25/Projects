const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.log("Connection failed!");
    console.log(error);
  });
