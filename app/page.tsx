"use client";
import Navbar from "@/components/navabar";
import ChatList from "@/components/chatlist";
import ChatWindow from "@/components/chatwindowwrapper";
import MessageProvider from "@/components/messageprovider";
export default function App() {
    return (
        <div className="h-screen w-screen bg-gray-200">
            <div className="h-32 bg-green-600"></div>
            <div className="fixed left-0 top-0 h-screen w-screen bg-transparent flex">
                <div className="flex mx-[4%] my-[1%] bg-white grow overflow-hidden">
                    <MessageProvider>
                        <Navbar></Navbar>
                        <ChatList></ChatList>
                        <ChatWindow></ChatWindow>
                    </MessageProvider>
                </div>
            </div>
        </div>
    );
}
