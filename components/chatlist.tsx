import { RiChatNewFill } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import SearchBox from "./searchbox";
import ChatCard from "./chatcard";
import { useAppState } from "./messageprovider";
export default function ChatList() {
    const {
        state: { chats, selectedChatId },
        dispatch,
    } = useAppState();
    const selectChat = (id: string) => {
        dispatch({ type: "select_chat", chat_id: id });
    };
    return (
        <div className="basis-0 grow-[5] flex flex-col bg-white overflow-hidden">
            <header className="flex m-5 items-center">
                <h1 className="font-bold text-2xl">Chats</h1>
                <RiChatNewFill className="size-6 m-2 cursor-pointer ml-auto"></RiChatNewFill>
                <IoMdMore className="size-6 m-2 cursor-pointer"></IoMdMore>
            </header>
            <SearchBox></SearchBox>
            <div
                className="w-full flex overflow-y-auto [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-thumb]:bg-gray-300 "
            >
                <div className="w-full flex flex-col -mt-1">
                    {chats.map((chat) => (
                        <ChatCard
                            chat={chat}
                            key={chat.id}
                            selectChat={selectChat}
                            selectedChatId={selectedChatId}
                        ></ChatCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
