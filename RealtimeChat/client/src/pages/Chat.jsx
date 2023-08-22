import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

export default function Chat() {

  const {userChats, isUserChatsLoading, userChatsError} = useContext(ChatContext)

  console.log("user chats : " ,userChats);
  return (
    <>
    <h1 className="display-1">Chat</h1>
    </>
  )
}
