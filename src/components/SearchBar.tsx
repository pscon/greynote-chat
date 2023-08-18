import React, { useContext, useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Box, Flex, Input, Text, Image } from "@chakra-ui/react";
import { AuthContext } from "../contexts/AuthContext";

interface User {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;

}

const SearchBar: React.FC = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState<User | null>(null);
    const [err, setErr] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data() as User);
            });
        } catch (err) {
            setErr(true);
        }
    };

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            handleSearch();
        }
    };

    const handleSelect = async () => {
        const combinedId =
            currentUser.uid > user!.uid
                ? currentUser.uid + user!.uid
                : user!.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [`${combinedId}.userInfo`]: {
                        uid: user!.uid,
                        displayName: user!.displayName,
                        photoURL: user!.photoURL,

                    },
                    [`${combinedId}.date`]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user!.uid), {
                    [`${combinedId}.userInfo`]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [`${combinedId}.date`]: serverTimestamp(),
                });
            }
        } catch (err) { }

        setUser(null);
        setUsername("");
    };

    return (
        <Box className="search" borderBottom="1px solid gray">
            <Flex className="searchForm" padding="10px">
                <Input
                    type="text"
                    placeholder="Find a user"
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    bg="transparent"
                    border="none"
                    color="white"
                    outline="none"
                    _placeholder={{ color: 'lightgray' }}
                />
            </Flex>
            {err && <Text color="red.500">User not found!</Text>}
            {user && (
                <Flex
                    onClick={handleSelect} padding="10px"
                    alignItems="center"
                    gap="10px"
                    color="white"
                    cursor="pointer"
                    _hover={{ bg: '#2f2d52' }}
                >
                    <Image
                        src={user.photoURL}
                        alt=""
                        w="50px"
                        h="50px"
                        borderRadius="50%"
                        objectFit="cover"
                    />
                    <Box className="userChatInfo">
                        <Text fontSize="18px" fontWeight="500">
                            {user.displayName}
                        </Text>
                        <Text fontSize="9px" color="lightgray">
                            {user.email}
                        </Text>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};

export default SearchBar;
