import { chatType, messageType } from "./messageprovider";

export default function MessagesList({ chat }: { chat: chatType }) {
    return (
        <div className="bg-[url('../images/whatsapp_bg.png')] grow w-full bg-yellow-50 overflow-hidden">
            <div
                className="px-14 py-5 h-full flex flex-col-reverse overflow-y-scroll [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
                <div className="flex flex-col-reverse gap-2">
                    {chat.messages.map((message: messageType) => (
                        <MessageCard
                            message={message}
                            key={message.id}
                        ></MessageCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MessageCard({ message }: { message: messageType }) {
    return (
        <div
            className={`px-2 py-1 shadow-md max-w-[65%] rounded-lg relative ${
                message.direction === "sent"
                    ? "bg-[#d9fdd3] self-end"
                    : "bg-white self-start"
            }`}
        >
            <div>
                {message.text}
                <span className="invisible text-[11px] mr-2">
                    {message.time}
                </span>
            </div>
            <div className="float-right -mt-3.5 text-[11px] text-gray-500">
                {message.time}
            </div>
        </div>
    );
}
