import React, { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

interface ChatContextProps {
    data: {
        chatId: string;
        user: Record<string, unknown>;
    };
    dispatch: React.Dispatch<ChatAction>;
}

type ChatAction = { type: "CHANGE_USER"; payload: any };

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatContextProvider: React.FC = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
        chatId: null, // Use null instead of "null"
        user: {},
    };

    const chatReducer = (state: typeof INITIAL_STATE, action: ChatAction) => {
        const currentUserId = currentUser?.uid ?? '';
        const payloadUserId = action.payload?.uid ?? '';

        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: currentUserId > payloadUserId
                        ? currentUserId + payloadUserId
                        : payloadUserId + currentUserId,
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext, ChatContextProvider };
