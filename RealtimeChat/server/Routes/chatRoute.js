
const express = require('express')
const { createChat, findUserChats, findChats } = require('../Controllers/chatController')

const router = express.Router()


router.post("/", createChat)
router.get("/:userId", findUserChats )
router.get("/find/:userId1/:userId2", findChats)


module.exports = router;