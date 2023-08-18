import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
import { ChatContext } from "../contexts/ChatContext";
import { Box } from "@chakra-ui/react";


const Messages: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages);
        } else {
          setMessages([]);
        }
      });

      return () => {
        unSub();
      };
    }
  }, [data.chatId]);

  return (
    <Box bgColor="#F4B95F" padding="10px" height="calc(100% - 100px)" overflowY="scroll">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </Box>
  );
};

export default Messages;
