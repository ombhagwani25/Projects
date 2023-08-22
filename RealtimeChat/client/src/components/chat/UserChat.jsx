import React from 'react'
import { useFetchRecipient } from '../../hooks/useFetchRecipient'
import { Stack } from 'react-bootstrap'

export default function UserChat({chat, user}) {

    const {recipientUser} = useFetchRecipient(chat, user)
    
  return (
    <Stack direction='horizontal' gap={3} className='user-card align-items-center p-2 justify-content-between'>
        <div className="d-flex">
            <div className="me-2">
                Avatar
            </div>
            <div className="name">{recipientUser?.name}</div>
            <div className="text">Texts</div>
        </div>
    </Stack>
  )
}
