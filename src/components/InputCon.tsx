
import React, { useContext, useEffect, useState } from "react";
import Img from "../assets/images/img.png";
import Attach from "../assets/images/attach.png";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    setDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Box, Flex, Image, Input, Button } from "@chakra-ui/react";
import { getDoc } from "firebase/firestore/lite";

const InputCon: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [img, setImg] = useState<File | null>(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);



    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                "state_changed",
                () => { },
                (error) => {
                    // TODO: Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await setDoc(doc(db, "chats", data.chatId), {
                                messages: arrayUnion({
                                    id: uuid(),
                                    text,
                                    senderId: currentUser.uid,
                                    date: Timestamp.now(),
                                    img: downloadURL,
                                }),
                            });
                        }
                    );
                }
            );
        } else {
            await setDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await setDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await setDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };

    return (
        <Box
            className="input"
            height="50px"
            bgColor="white"
            padding="10px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Input
                type="text"
                placeholder="Type something..."
                onChange={(e) => setText(e.target.value)}
                value={text}
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
                    alt=""
                    height="24px"
                    cursor="pointer"
                />
                <Input
                    type="file"
                    display="none"
                    id="file"
                    onChange={(e) => setImg(e.target.files?.[0] || null)}
                />
                <label htmlFor="file">
                    <Image
                        src={Img}
                        alt=""
                        cursor="pointer"
                    />
                </label>
                <Button
                    onClick={handleSend}
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
    );
};

export default InputCon;
