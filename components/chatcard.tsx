import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { chatType } from "./messageprovider";
export default function ChatCard({
    chat,
    selectChat,
    selectedChatId,
}: {
    chat: chatType;
    selectChat: (id: string) => void;
    selectedChatId: string | null;
}) {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const handleMenuButton = () => {
        setShowMenuButton((prevState) => !prevState);
    };
    const handleChatSelect = () => {
        selectChat(chat.id);
    };
    return (
        <div
            className={`flex items-center hover:bg-slate-100 cursor-pointer w-full max-w-full ${
                chat.id === selectedChatId ? "bg-slate-100" : ""
            }`}
            onMouseEnter={handleMenuButton}
            onMouseLeave={handleMenuButton}
            onClick={handleChatSelect}
        >
            <CgProfile className="size-14 shrink-0 rounded-full m-2 text-gray-300 bg-white"></CgProfile>
            <div className="grow flex flex-col justify-center h-full border-t ml-1 mr-3 overflow-hidden">
                <div className="flex items-center">
                    <div className="grow text-lg font-medium">{chat.name}</div>
                    <div className="text-gray-500 text-xs">
                        {chat.lastMessageTime}
                    </div>
                </div>
                <div className="flex items-center text-gray-500 overflow-hidden w-full">
                    <div className="mr-3 grow text-sm w-full overflow-hidden whitespace-nowrap text-ellipsis ">
                        {chat.lastMessage}
                    </div>
                    {showMenuButton && (
                        <IoIosArrowDown className="size-5"></IoIosArrowDown>
                    )}
                </div>
            </div>
        </div>
    );
}
