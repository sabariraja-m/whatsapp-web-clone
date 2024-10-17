import { createContext, useContext, useReducer } from "react";
import initialChats from "./mockdata";
export interface messageType {
    id: string;
    type: string;
    text: string;
    time: string;
    direction: string;
    status: string;
}

export interface chatType {
    id: string;
    name: string;
    phone: string;
    profileImage: string;
    lastMessage: string;
    lastMessageTime: string;
    isOnline: boolean;
    messages: messageType[];
    isSelected?: boolean;
}

interface ActionType {
    type: "add_message" | "select_chat";
    chat_id: string;
    newMessage?: messageType;
}

interface stateType {
    chats: chatType[];
    selectedChatId: string | null;
}

const initialState = {
    chats: initialChats,
    selectedChatId: null,
};
const AppContext = createContext<{
    state: stateType;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: initialState,
    dispatch: () => null,
});
export default function MessageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(chatsReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export function useChats() {
    const { state } = useContext(AppContext);
    return state.chats;
}
export function useChatsDispatch() {
    const { dispatch } = useContext(AppContext);
    return dispatch;
}
export function useSelectedChat() {
    const { state } = useContext(AppContext);
    return state.chats.find((chat) => chat.id === state.selectedChatId);
}
export function useAppState() {
    return useContext(AppContext);
}
function chatsReducer(state: stateType, action: ActionType) {
    switch (action.type) {
        case "add_message": {
            const newChats = state.chats.map((chat: chatType) => {
                if (chat.id === action.chat_id && action.newMessage) {
                    return {
                        ...chat,
                        lastMessage: action.newMessage.text,
                        lastMessageTime: action.newMessage.time,
                        messages: [action.newMessage, ...chat.messages],
                    };
                }
                return { ...chat };
            });
            return { ...state, chats: newChats };
        }
        case "select_chat": {
            return { ...state, selectedChatId: action.chat_id };
        }
    }
}
