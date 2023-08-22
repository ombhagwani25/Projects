
const chatModel = require("../Models/chatModel");


const createChat = async (req,res)=> {
    const  {user1Id, user2Id} = req.body;

    try {
        const chat = await chatModel.findOne({
            members : {$all: [user1Id, user2Id]}
        })

        if(chat) return res.status(200).json(chat);

        const newChat = new chatModel({
            members : [user1Id, user2Id]
        })

        const response = await newChat.save();
        res.status(200).json(response);


    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}


const findUserChats = async (req, res)=> {
    const userId = req.params.userId;

    try {
        const chats = await chatModel.find({
            members: {$in : [userId]}
        })

        res.status(200).json(chats)

    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}


const findChats = async (req, res)=> {
   const {user1Id , user2Id} = req.params.userId

    try {
        const chats = await chatModel.find({
            members : {$all: [user1Id, user2Id]}
        })

        res.status(200).json(chat)

    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = {createChat , findUserChats, findChats}