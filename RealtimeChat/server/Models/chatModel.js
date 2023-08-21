
const mongoose = require("mongoose")

const chatSchema =new  mongoose.Schema({
    members : Array , 

},
{
    timestamps : true
})

const chatModel = mongoose.Model("Chat" , chatSchema)

module.exports = chatModel;