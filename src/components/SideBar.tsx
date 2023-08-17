import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Chats from './Chats';

const SideBar = () => {
  return (
<Box
  flex="1"
  bg="#3e3c61"
  position="relative"
>     <Navbar />
      <SearchBar/>
       <Chats/>
    </Box>
  );
};

export default SideBar;