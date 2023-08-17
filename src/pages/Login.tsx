import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { Box , Text, FormControl, Input, FormLabel  , Button     } from  '@chakra-ui/react';


const Login = () => {
//   const [err, setErr] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/")
//     } catch (err) {
//       setErr(true);
//     }
//   };
  return (
    <Box
      bg="#E3F0FF"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >      <Box
      bg="white"
      p="20px 60px"
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      gap="10px"
      alignItems="center"
      className="formContainer"
    >
    <Text
      color="#5d5b8d"
      fontWeight="bold"
      fontSize="24px"
      className="logo"
    >
GrayNote-Chat    </Text>       <Text
      color="#5d5b8d"
      fontSize="12px"
      className="title"
    >
      Log In
    </Text>
    <FormControl
  display="flex"
  flexDirection="column"
  gap="15px"
//   onSubmit={handleSubmit}
>

<Input
  padding="15px"
  border="none"
  width="250px"
  borderBottom="1px solid #a7bcff"
  placeholder="email"
  _placeholder={{ color: 'rgb(175, 175, 175)' }}
  required
  type="email"
/>
<Input
  padding="15px"
  border="none"
  width="250px"
  borderBottom="1px solid #a7bcff"
  placeholder="password"
  _placeholder={{ color: 'rgb(175, 175, 175)' }}
  required
  type="password"
/>
<Button
  bgColor="#7b96ec"
  color="white"
  padding="10px"
  fontWeight="bold"
  border="none"
  cursor="pointer"
//   disabled={loading}
>
  Log In
</Button>
         
          {/* {err && <span>Something went wrong</span>} */}
          </FormControl>
        <p>You don't have an account?
             {/* <Link to="/register">Register</Link> */}
             </p>
      </Box>
    </Box>
  );
};

export default Login;