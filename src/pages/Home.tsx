import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'

const Home = () => {
    return (
        <Flex
            bg="#a7bcff"
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >    <Flex
            border="1px solid white"
            borderRadius="10px"
            width="65%"
            height="80%"
            display="flex"
            overflow="hidden"
            className="container"
            flexDirection={{ base: 'column', tablet: 'row' }}
        >
                <SideBar />
                <Chat />

            </Flex>
        </Flex>
    )
}

export default Home