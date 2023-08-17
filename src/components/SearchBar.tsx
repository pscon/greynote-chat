import React from 'react'
import { Box, Input, Flex , Text, Image } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <Box className="search" borderBottom="1px solid gray">
    <Flex className="searchForm" padding="10px">
      <Input
        type="text"
        placeholder="Find a user"
        // onKeyDown={handleKey}
        // onChange={(e) => setUsername(e.target.value)}
        // value={username}
        bg="transparent"
        border="none"
        color="white"
        outline="none"
        _placeholder={{ color: 'lightgray' }}
      />
    </Flex>
    {/* {err && <Text color="red.500">User not found!</Text>}
    {user && ( */}
      <Flex
        className="userChat"
        padding="10px"
        alignItems="center"
        gap="10px"
        color="white"
        cursor="pointer"
        _hover={{ bg: '#2f2d52' }}
      >
        <Image 
        src="data:image/jpeg;base64,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"
        // {user.photoURL} 
        alt="" w="50px" h="50px" borderRadius="50%" objectFit="cover" />
        <Box className="userChatInfo">
          <Text fontSize="18px" fontWeight="500">
            {/* {user.displayName} */} ekunola paul
          </Text>
          <Text fontSize="14px" color="lightgray">
            {/* {user.someOtherInfo}  */}manager
          </Text>
        </Box>
      </Flex>
    {/* )} */}
  </Box>
    )
}

export default SearchBar