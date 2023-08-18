// import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";
// import { Box , Text, FormControl, Input, FormLabel  , Button     } from  '@chakra-ui/react';


// const Login = () => {
// //   const [err, setErr] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const email = e.target[0].value;
// //     const password = e.target[1].value;

// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       navigate("/")
// //     } catch (err) {
// //       setErr(true);
// //     }
// //   };
//   return (
//     <Box
//       bg="#E3F0FF"
//       h="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >      <Box
//       bg="white"
//       p="20px 60px"
//       borderRadius="10px"
//       display="flex"
//       flexDirection="column"
//       gap="10px"
//       alignItems="center"
//       className="formContainer"
//     >
//     <Text
//       color="#5d5b8d"
//       fontWeight="bold"
//       fontSize="24px"
//       className="logo"
//     >
// GrayNote-Chat    </Text>       <Text
//       color="#5d5b8d"
//       fontSize="12px"
//       className="title"
//     >
//       Log In
//     </Text>
//     <FormControl
//   display="flex"
//   flexDirection="column"
//   gap="15px"
// //   onSubmit={handleSubmit}
// >

// <Input
//   padding="15px"
//   border="none"
//   width="250px"
//   borderBottom="1px solid #a7bcff"
//   placeholder="email"
//   _placeholder={{ color: 'rgb(175, 175, 175)' }}
//   required
//   type="email"
// />
// <Input
//   padding="15px"
//   border="none"
//   width="250px"
//   borderBottom="1px solid #a7bcff"
//   placeholder="password"
//   _placeholder={{ color: 'rgb(175, 175, 175)' }}
//   required
//   type="password"
// />
// <Button
//   bgColor="#7b96ec"
//   color="white"
//   padding="10px"
//   fontWeight="bold"
//   border="none"
//   cursor="pointer"
// //   disabled={loading}
// >
//   Log In
// </Button>
         
//           {/* {err && <span>Something went wrong</span>} */}
//           </FormControl>
//         <p>You don't have an account?
//              {/* <Link to="/register">Register</Link> */}
//              </p>
//       </Box>
//     </Box>
//   );
// };

// export default Login;

import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
      navigate("/");
    } catch (err) {
        setLoading(false);
        setErr(true);
      console.error(err);
    }
  };

  return (
    <Box
      bg="#E3F0FF"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
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
          fontWeight="bolder"
          fontSize="24px"
          className="logo"
        >
          GrayNote-Chat
        </Text>
        <Text
          color="#5d5b8d"
          fontSize="16px"
        >
          Log In
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormControl
              display="flex"
              flexDirection="column"
              gap="15px"
            >
              <Field
                as={Input}
                padding="15px"
                border="none"
                width="250px"
                borderBottom="1px solid #a7bcff"
                placeholder="email"
                _placeholder={{ color: 'rgb(175, 175, 175)' }}
                type="email"
                name="email"
              />
              <ErrorMessage style={{color: 'red'}}  name="email" component="div" />

              <Field
                as={Input}
                padding="15px"
                border="none"
                width="250px"
                borderBottom="1px solid #a7bcff"
                placeholder="password"
                _placeholder={{ color: 'rgb(175, 175, 175)' }}
                type="password"
                name="password"
              />
              <ErrorMessage style={{color: 'red'}} name="password" component="div" />

              <Button
                bgColor="#7b96ec"
                color="white"
                padding="10px"
                fontWeight="bold"
                border="none"
                cursor="pointer"
                type="submit"
              >
                {
                    loading ? 'Loading...' : 'Log In'
                }
              </Button>
         {err && <span style={{color: "red"}}>Something went wrong</span>}
            </FormControl>
          </Form>
        </Formik>
         <p>You don't have an account?
              <Link to="/register">Register</Link>
              </p>
      </Box>
    </Box>
  );
};

export default Login;
