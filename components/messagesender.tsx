import { FaRegSmile, FaPlus } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import { useChatsDispatch } from "./messageprovider";

export default function MessagesSender({ chatId }: { chatId: string }) {
    const dispatch = useChatsDispatch();
    const [showSendButton, setShowMenuButton] = useState(false);
    const [message, setMessage] = useState("");
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Enter") {
                handleSendButton();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        ref.current?.focus();
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });
    const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
        if (event.target.value.trim().length) {
            setShowMenuButton(true);
        } else {
            setShowMenuButton(false);
        }
    };
    const handleSendButton = () => {
        const hour = new Date().getHours();
        const minute = new Date().getMinutes().toString().padStart(2, "0");
        const messageObj = {
            id: Math.random().toString(36).slice(2),
            time: hour + ":" + minute + (hour > 11 ? " PM" : "AM"),
            type: "text",
            text: message,
            direction: "sent",
            status: "sent",
        };
        dispatch({
            type: "add_message",
            chat_id: chatId,
            newMessage: messageObj,
        });
        setMessage("");
    };
    return (
        <div className="w-full bg-slate-100 px-3 py-2.5 flex items-center">
            <FaRegSmile className="size-6 mx-3 cursor-pointer"></FaRegSmile>
            <FaPlus className="size-6 mx-3 cursor-pointer"></FaPlus>
            <input
                ref={ref}
                className="mx-2 px-4 py-3 rounded-lg grow border-none outline-none text-sm"
                placeholder="Type a message"
                value={message}
                onChange={handleMessage}
            ></input>
            {showSendButton ? (
                <IoMdSend
                    className="size-6 mx-3 cursor-pointer"
                    onClick={handleSendButton}
                ></IoMdSend>
            ) : (
                <AiFillAudio className="size-6 mx-3 cursor-pointer"></AiFillAudio>
            )}
        </div>
    );
}
