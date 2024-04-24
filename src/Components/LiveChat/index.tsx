import React, { useEffect } from "react";
import ChatItem from "./ChatItem";
import { useUtubeStore } from "@/store/useSidebarStore";
import { generateRandomComment, generateRandomName } from "@/utils/constants";

const LiveChat = () => {
  const [liveChat, toggleLiveChat] = useUtubeStore((state: any) => [
    state.liveChat,
    state.toggleLiveChat,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleLiveChat({
        name: generateRandomName(),
        comment: generateRandomComment(),
      });
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="p-4 h-4/5 w-2/5 border-2 border-red-600 mx-2 flex flex-col-reverse gap-2 overflow-hidden overflow-y-auto">
      {liveChat?.map((item: any) => (
        <ChatItem name={item.name} comment={item.comment} />
      ))}
    </div>
  );
};

export default LiveChat;
