import React from 'react'
import Message from './Message'
import { Box } from '@chakra-ui/react'

const Messages = () => {
  return (
<Box bgColor="#F4B95F" padding="10px" height="calc(100% - 100px)" overflowY="scroll">
    {/* {messages.map((m) => ( */}
      <Message  />
      <Message  />
      <Message  />
      <Message  />
      <Message  />
      <Message  />
      <Message  />
      <Message  />
      <Message  />
      <Message  />
    {/* ))} */}
  </Box>  )
}

export default Messages