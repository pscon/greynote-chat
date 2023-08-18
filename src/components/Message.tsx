import React, { useContext, useEffect, useRef } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";

interface MessageProps {
    message: {
        senderId: string;
        text: string;
        img?: string;
    };
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef<HTMLDivElement | null>(null);
    console.log(message, "mess")
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <Flex
            ref={ref}
            className={`message ${message.senderId === currentUser.uid && "owner"}`}
            marginBottom="20px"
        >
            <Flex
                className="messageInfo"
                flexDirection="column"
                color="gray"
                fontWeight="300"
            >
                <Image
                    src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                    width="40px"
                    height="40px"
                    borderRadius="50%"
                    objectFit="cover"
                />
                <Text fontSize="10px">just now</Text>
            </Flex>
            <Flex
                className="messageContent"
                maxW="80%"
                flexDirection="column"
                gap="10px"
            >
                <Text
                    bgColor="white"
                    marginLeft="10px"
                    padding="10px 20px"
                    borderRadius={
                        message.senderId === currentUser?.uid
                            ? "0px 10px 10px 10px"
                            : "10px 0px 10px 10px"
                    }
                    maxW="max-content"
                >
                    {message.text}
                </Text>
                {message.img && <Image src={message.img} alt="" width="50%" />}
            </Flex>
        </Flex>
    );
};

export default Message;
