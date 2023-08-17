import React from 'react'
import { Box, Flex, Image, Input, Button } from '@chakra-ui/react'
import Img from "../assets/images/img.png";
import Attach from "../assets/images/attach.png";

const InputCon = () => {
  return (
<Box className="input" height="50px" bgColor="white" padding="10px" display="flex" alignItems="center" justifyContent="space-between">
  <Input
    type="text"
    placeholder="Type something..."
    // onChange={(e) => setText(e.target.value)}
    // value={text}
    width="100%"
    border="none"
    outline="none"
    color="#2f2d52"
    fontSize="18px"
    _placeholder={{ color: 'lightgray' }}
  />
  <Flex className="send" alignItems="center" gap="10px">
    <Image 
    src={Attach}
     alt="" height="24px" cursor="pointer" />
    <Input
      type="file"
      display="none"
      id="file"
    //   onChange={(e) => setImg(e.target.files[0])}
    />
    <label htmlFor="file">
      <Image 

      src={Img}
       alt="" cursor="pointer" />
    </label>
    <Button
    //   onClick={handleSend}
      border="none"
      padding="10px"
      color="white"
      bgColor="#8da4f1"
      cursor="pointer"
      fontSize="12px"
        fontWeight="bold"
        borderRadius="5px"
        w="100px"
    >
      Send
    </Button>
  </Flex>
</Box>
  )
}

export default InputCon