import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";

const Chats = () => {
    const [chats, setChats] = useState({}); // Initialize chats as an empty object

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                const data = doc.data();
                if (data && typeof data === "object") {
                    setChats(data);
                }
            });

            return () => {
                unsub();
            };
        };

        if (currentUser?.uid) {
            getChats();
        }
    }, [currentUser?.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };

    return (
        <Box className="chats">
            {Object.keys(chats).length > 0 &&
                Object.entries(chats)
                    .sort((a, b) => (b[1]?.date || 0) - (a[1]?.date || 0))
                    .map((chat) => (
                        <Flex
                            className="userChat"
                            key={chat[0]}
                            onClick={() => handleSelect(chat[1]?.userInfo)}
                            alignItems="center"
                            gap="10px"
                            color="white"
                            cursor="pointer"
                            _hover={{ bg: "#2f2d52" }}
                            padding="10px"
                        >
                            <Image
                                src={chat[1]?.userInfo?.photoURL}
                                alt=""
                                w="50px"
                                h="50px"
                                borderRadius="50%"
                                objectFit="cover"
                            />
                            <Box className="userChatInfo">
                                <Text fontSize="18px" fontWeight="500">
                                    {chat[1]?.userInfo?.displayName || ""}
                                </Text>
                                <Text fontSize="14px" color="lightgray">
                                    {chat[1]?.lastMessage?.text || ""}
                                </Text>
                            </Box>
                        </Flex>
                    ))}
        </Box>
    );
};

export default Chats;
