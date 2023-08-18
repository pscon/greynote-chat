import React, { useContext } from "react";
import { Box, Flex, Text, Image } from '@chakra-ui/react';

import Cam from "../assets/images/cam.png";
import Add from "../assets/images/add.png";
import More from "../assets/images/more.png";
import Messages from "./Messages";
import InputCon from "./InputCon";
import { ChatContext } from "../contexts/ChatContext";

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <Box flex="2">
            <Flex
                height="50px"
                bg="#5d5b8d"
                alignItems="center"
                justifyContent="space-between"
                padding="10px"
                color="lightgray"
            >
                <Text>{data.user?.displayName}</Text>
                <Flex gap="10px">
                    <Image src={Cam} alt="" height="24px" cursor="pointer" />
                    <Image src={Add} alt="" height="24px" cursor="pointer" />
                    <Image src={More} alt="" height="24px" cursor="pointer" />
                </Flex>
            </Flex>
            <Messages />
            <InputCon />
        </Box>
    );
};

export default Chat;