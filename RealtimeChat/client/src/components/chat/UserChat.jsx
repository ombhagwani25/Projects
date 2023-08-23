import React from 'react'
import { useFetchRecipient } from '../../hooks/useFetchRecipient'
import { Stack } from 'react-bootstrap'
import avatar from "../../assets/avatar.svg"
export default function UserChat({chat, user}) {

    const {recipientUser} = useFetchRecipient(chat, user)
    
  return (
    <Stack direction='horizontal' gap={3} className='user-card align-items-center p-2 justify-content-between'>
        <div className="d-flex">
            <div className="me-2">
                <img src={avatar} height="35px" alt="Avatar" />
            </div>
            <div className="text-content">
            <div className="name">{recipientUser?.name}</div>
            <div className="text">Texts</div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="date">23/08/2023</div>
          <div className="this-user-notifications">2</div>
          <span className="user-online"></span>
        </div>
    </Stack>
  )
}
