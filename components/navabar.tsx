import {
    IoChatbubbleEllipsesOutline,
    IoSettingsOutline,
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsFillChatSquareTextFill } from "react-icons/bs";

import { HiStatusOnline } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IconType } from "react-icons";

export default function Navbar() {
    return (
        <div className="flex flex-col items-center gap-4 p-3 bg-gray-100">
            <NabarIcon
                menuName="Chats"
                icon={BsFillChatSquareTextFill}
                isActive={true}
            ></NabarIcon>
            <NabarIcon menuName="Status" icon={HiStatusOnline}></NabarIcon>
            <NabarIcon
                menuName="Channels"
                icon={IoChatbubbleEllipsesOutline}
            ></NabarIcon>
            <NabarIcon
                menuName="Communities"
                icon={HiOutlineUserGroup}
            ></NabarIcon>
            <div className="mt-auto flex flex-col gap-4">
                <NabarIcon
                    menuName="Settings"
                    icon={IoSettingsOutline}
                ></NabarIcon>
                <NabarIcon menuName="Profile" icon={CgProfile}></NabarIcon>
            </div>
        </div>
    );
}
interface propType {
    icon: IconType;
    menuName: string;
    isActive?: boolean;
}
function NabarIcon({ icon: Icon, isActive = false }: propType) {
    return (
        <div
            className={`relative ${
                isActive ? "rounded-full bg-gray-300 p-1" : ""
            }`}
        >
            <Icon className="size-5 m-2 cursor-pointer"></Icon>
        </div>
    );
}
