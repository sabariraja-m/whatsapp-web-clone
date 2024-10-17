import { useSelectedChat } from "./messageprovider";
import Welcome from "./welcome";
import ChatWindow from "./chatwindw";

export default function ChatWindowWrapper() {
    const chat = useSelectedChat();
    return (
        <div className="basis-0 grow-[11] h-full overflow-hidden">
            {chat ? (
                <ChatWindow key={chat.id} chat={chat}></ChatWindow>
            ) : (
                <Welcome></Welcome>
            )}
        </div>
    );
}
