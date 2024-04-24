import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatItem = ({ name, comment }: any) => {
  return (
    <div className="flex gap-2 items-center ">
      <FaUserCircle size={28} />
      <p className="font-semibold">{name}</p>
      <p>{comment}</p>
    </div>
  );
};

export default ChatItem;
