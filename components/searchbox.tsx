import { MdSearch } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

export default function SearchBox(props) {
    return (
        <div className="bg-gray-100 m-2 p-2 flex items-center rounded-lg">
            <MdSearch className="size-5 cursor-pointer mx-2"></MdSearch>
            {/* <FaArrowLeft></FaArrowLeft> */}
            <input
                className="grow border-none outline-none bg-transparent ml-4"
                placeholder={props.message}
            ></input>
        </div>
    );
}
