const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.use({"user engine" : "ejs"})
