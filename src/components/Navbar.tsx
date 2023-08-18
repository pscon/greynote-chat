import React, { useContext } from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Flex
      className="navbar"
      alignItems="center"
      bg="#2f2d52"
      height="50px"
      padding="10px"
      justifyContent="space-between"
      color="#ddddf7"
    >
      <Flex
        className="logo"
        fontWeight="bold"
        display={{ base: 'block', md: 'none', lg: 'block' }}
      >
        GreyNote-Chat
      </Flex>
      <Flex gap="10px" alignItems="center">
        {currentUser && currentUser.photoURL && (
          <Image
            src={currentUser.photoURL}
            alt=""
            bgColor="#ddddf7"
            height="24px"
            width="24px"
            borderRadius="50%"
            objectFit="cover"
          />
        )}
        <Text>{currentUser && currentUser.displayName}</Text>
        <Button
          bgColor="#5d5b8d"
          color="#ddddf7"
          fontSize="10px"
          border="none"
          _hover={{ bgColor: '#ddddf7', color: '#5d5b8d' }}
          cursor="pointer"
          display={{ base: 'none', md: 'block' }}
          position={{ base: 'initial', md: 'absolute' }}
          bottom={{ base: 'initial', md: '10px' }}
          onClick={() => signOut(auth)}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
