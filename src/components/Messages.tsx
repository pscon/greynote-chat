
// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { db } from "../firebase";
// import Message from "./Message";
// import { Box } from "@chakra-ui/react";
// import { ChatContext } from "../contexts/ChatContext";

// interface MessageData {
//   // Define your message properties here
// }

// const Messages: React.FC = () => {
//   const [messages, setMessages] = useState<MessageData[]>([]);
//   const { data } = useContext(ChatContext);

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
//       doc.exists() && setMessages(doc.data().messages);
//     });

//     return () => {
//       unSub();
//     };
//   }, [data.chatId]);

//   console.log(messages);

//   return (
//     <Box bgColor="#F4B95F" padding="10px" height="calc(100% - 100px)" overflowY="scroll">
//       {messages.map((m, index) => (
//         <Message key={index} message={m} />
//       ))}
//     </Box>
//   );
// };

// export default Messages;
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
