import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
import { Container, Stack } from 'react-bootstrap';
import UserChat from '../components/chat/UserChat';

export default function Chat() {
  const { user } = useContext(AuthContext);
  const { userChats = [], isUserChatsLoading, userChatsError } = useContext(ChatContext);

  return (
    <Container>
      <Stack direction='horizontal' gap={4} className='align-items-start'>
        <Stack className='messages-box flex-grow-0 pe-3' gap={3}>
          {isUserChatsLoading && <p>Loading Chats...</p>}

          {userChats.map((chat, index) => (
            <div key={index}>
              <UserChat chat={chat} user={user} />
            </div>
          ))}
        </Stack>
        <Stack>ChatBox</Stack>
      </Stack>
    </Container>
  );
}
