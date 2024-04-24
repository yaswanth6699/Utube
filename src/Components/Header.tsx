import { YOUTUBE_ICON } from "@/utils/constants";
import { BsSearch } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useUtubeStore } from "@/store/useSidebarStore";
import Link from "next/link";
import { useState } from "react";
import Suggestions from "./Suggestions";
import { useDobounceSuggestions } from "@/hooks/useDobunceSuggestions";
const Header = () => {
  const [searchText, toggleSearchText] = useState<string>("");
  const [showSuggestions, toggleShowSuggestions] = useState(false);
  useDobounceSuggestions(searchText);
  const toggleSidebar = useUtubeStore((state: any) => state.toggleSidebar);

  const handleClick = () => {
    return toggleSidebar();
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="col-span-1 flex items-center gap-2">
        <IoMenu size={28} onClick={handleClick} className="cursor-pointer" />
        <Link href="/">
          <img
            className="h-10 object-cover"
            src={YOUTUBE_ICON}
            alt="youtube Icon"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="col-span-10 flex justify-center items-center">
          <input
            className="w-full border border-gray-500 p-1  rounded-l-full px-4 outline-none"
            type="text"
            onChange={(e) => toggleSearchText(e.target.value)}
            onFocus={() => toggleShowSuggestions(true)}
            onBlur={() => toggleShowSuggestions(false)}
          />
          <button className="border border-gray-500 rounded-r-full p-2">
            <BsSearch />
          </button>
        </div>
        {showSuggestions && <Suggestions searchText={searchText} />}
      </div>
      <div className="col-span-1 flex justify-end">
        <FaUserCircle size={28} />
      </div>
    </div>
  );
};

export default Header;
