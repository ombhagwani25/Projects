import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

export default function PotentialChats() {
    const {PotentialChats ,createChat} = useContext(ChatContext)
    const {user} = useContext(AuthContext)
  return (
   <>
   <div className="all-users">
    {PotentialChats && PotentialChats.map((usr,index)=> {
        return(
            
        <div className="single-user" key={index} onClick={()=>{createChat(user._id, u._id)}}>
        {usr.name}
        <span className="user-online"></span>
    </div>

        )

    })}
   </div>
   </>
  )
}
