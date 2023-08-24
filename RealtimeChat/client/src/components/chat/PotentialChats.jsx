import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'

export default function PotentialChats() {
    const {PotentialChats} = useContext(ChatContext)
  return (
   <>
   <div className="all-users">
    {PotentialChats && PotentialChats.map((usr,index)=> {
        return(
            
        <div className="single-user" key={index}>
        {usr.name}
        <span className="user-online"></span>
    </div>
    
        )

    })}
   </div>
   </>
  )
}
