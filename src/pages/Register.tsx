// import React, { useState } from "react";
// import Add from "../assets/images/add.png";

// import { Box , Text, FormControl, Input,FormLabel ,Image , Button     } from '@chakra-ui/react';
// import logo from "../assets/images/greyLogo.png";

// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [err, setErr] = useState (false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//       //Create user
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       //Create a unique image name
//       const date = new Date().getTime();
//       const storageRef = ref(storage, `${displayName + date}`);

//       await uploadBytesResumable(storageRef, file).then(() => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           try {
//             //Update profile
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             //create user on firestore
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             //create empty user chats on firestore
//             await setDoc(doc(db, "userChats", res.user.uid), {});
//             navigate("/");
//           } catch (err) {
//             console.log(err);
//             setErr(true);
//             setLoading(false);
//           }
//         });
//       });
//     } catch (err) {
//       setErr(true);
//       setLoading(false);
//     }
//   };

//   return (
// <Box
//   bg="#E3F0FF"
//   h="100vh"
//   display="flex"
//   alignItems="center"
//   justifyContent="center"
// >      <Box
//   bg="white"
//   p="20px 60px"
//   borderRadius="10px"
//   display="flex"
//   flexDirection="column"
//   gap="10px"
//   alignItems="center"
//   className="formContainer"
// >
//     <Image src={logo} alt="" w="100px" />

//    <Text
//   color="#5d5b8d"
//   fontSize="12px"
//   className="title"
// >
//   Register
// </Text>
// <FormControl
//   display="flex"
//   flexDirection="column"
//   gap="15px"
// >
// <Input
//   padding="15px"
//   border="none"
//   width="250px"
//   borderBottom="1px solid #a7bcff"
//   placeholder="display name"
//   _placeholder={{ color: 'rgb(175, 175, 175)' }}
//   required
//   type="text"
// />
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

// <Input
//     style={{ display: 'none' }}
//     type="file"
//     id="file"
//     required
//   />
//           {/* <label htmlFor="file">
//             <img src={Add} alt="" />
//             <span>Add an avatar</span>
//           </label> */}

//           <FormLabel
//   htmlFor="file"
//   display="flex"
//   alignItems="center"
//   gap="10px"
//   color="#8da4f1"
//   fontSize="12px"
//   cursor="pointer"
// >
//   <Input
//     style={{ display: 'none' }}
//     type="file"
//     id="file"
//     required
//   />
// <Image src={Add} alt="" w="32px" />
//   Add an avatar
// </FormLabel>
// <Button
//   bgColor="#7b96ec"
//   color="white"
//   padding="10px"
//   fontWeight="bold"
//   border="none"
//   cursor="pointer"
// //   disabled={loading}
// >
//   Sign up
// </Button>
//           {/* {loading && "Uploading and compressing the image please wait..."}
//           {err && <span>Something went wrong</span>} */}
//         </FormControl>
//         <Text color="#5d5b8d" fontSize="12px" marginTop="10px">
//   You do have an account?{' '}
//   {/* <Link to="/register" color="blue.500">
//     Login
//   </Link> */}
// </Text>
//       </Box>
//     </Box>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Box, Text, FormControl, Input, FormLabel, Image, Button } from "@chakra-ui/react";
import logo from "../assets/images/greyLogo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Add from "../assets/images/add.png";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    displayName: Yup.string().required("Display name is required"),
    email: Yup.string().email("Invalid email address").required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setLoading(true);

    const { displayName, email, password, file } = values;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            setLoading(false);

            navigate("/");

          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }

    setSubmitting(false);
  };

  return (
    <Box bg="#E3F0FF" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p="20px 60px" borderRadius="10px" display="flex" flexDirection="column" gap="10px" alignItems="center" className="formContainer">
        <Image src={logo} alt="" w="100px" />
        <Text color="#5d5b8d" fontSize="12px" className="title">
          Register
        </Text>

        <Formik initialValues={{ displayName: "", email: "", password: "", file: null }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <FormControl display="flex" flexDirection="column" gap="15px">
                <Field
                  as={Input}
                  padding="15px"
                  border="none"
                  width="250px"
                  borderBottom="1px solid #a7bcff"
                  placeholder="display name"
                  _placeholder={{ color: "rgb(175, 175, 175)" }}
                  name="displayName"
                />
                <ErrorMessage style={{color: "red"}} name="displayName" component="div" />

                <Field
                  as={Input}
                  padding="15px"
                  border="none"
                  width="250px"
                  borderBottom="1px solid #a7bcff"
                  placeholder="email"
                  _placeholder={{ color: "rgb(175, 175, 175)" }}
                  name="email"
                />
                <ErrorMessage style={{color: "red"}} name="email" component="div" />

                <Field
                  as={Input}
                  padding="10px"
                  border="none"
                  width="250px"
                  borderBottom="1px solid #a7bcff"
                  placeholder="password"
                  _placeholder={{ color: "rgb(175, 175, 175)" }}
                  name="password"
                  type="password"
                />
                <ErrorMessage style={{color: "red"}} name="password" component="div" />
                <label htmlFor="file" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#8da4f1", fontSize: "12px", cursor: "pointer" }}>
  <input
    style={{ display: "none" }}
    type="file"
    id="file"
    name="file"
    onChange={(event) => {
      const selectedFile = event.currentTarget.files[0];
      setFieldValue("file", selectedFile);
    }}
  />
  <Image src={Add} alt="" w="32px" />
  Add an avatar
</label>
                {/* <label htmlFor="file"> */}
                {/* <FormLabel display="flex" alignItems="center" gap="10px" color="#8da4f1" fontSize="12px" cursor="pointer">
  <input
    style={{ display: "none" }}
    type="file"
    id="file"
    name="file"
    // onChange={(event) => {
    //   const selectedFile = event.currentTarget.files[0];
    //   setFieldValue("file", selectedFile);
    // }}
  />
  <Image src={Add} alt="" w="32px" />
  Add an avatar
</FormLabel> */}
                {/* </label> */}

                <Button bgColor="#7b96ec" color="white" padding="10px" fontWeight="bold" border="none" cursor="pointer" type="submit" disabled={isSubmitting}>
                  Sign up
                </Button>

                {loading && <span>Uploading and compressing the image, please wait...</span>}
                {err && <span>Something went wrong</span>}
              </FormControl>
            </Form>
          )}
        </Formik>

        <Text color="#5d5b8d" fontSize="12px" marginTop="10px">
          You already have an account? <Link to="/login">Login</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
