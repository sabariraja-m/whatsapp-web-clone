import { CgProfile } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import MessagesList from "./messageslist";
import MessageSender from "./messagesender";
import { chatType } from "./messageprovider";
export default function ChatWindow({ chat }: { chat: chatType }) {
    return (
        <div className="h-full relative flex flex-col">
            <div className="bg-slate-100 flex items-center">
                <div className="flex items-center cursor-pointer grow">
                    <CgProfile className="size-9 m-3"></CgProfile>
                    <div className="flex flex-col justify-center">
                        <div>{chat.name}</div>
                        <div className="text-xs text-slate-500">
                            {chat.isOnline
                                ? "online"
                                : `last seen at ${chat.lastMessageTime}`}
                        </div>
                    </div>
                </div>
                <MdSearch className="size-6 m-3 cursor-pointer"></MdSearch>
                <IoMdMore className="size-6 m-3 ml-4 cursor-pointer"></IoMdMore>
            </div>
            {chat && <MessagesList key={chat.id} chat={chat}></MessagesList>}
            <MessageSender key={chat.id} chatId={chat.id}></MessageSender>
        </div>
    );
}
