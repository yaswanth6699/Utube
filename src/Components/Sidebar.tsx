import { useUtubeStore } from "@/store/useSidebarStore";
import { SIDEBAR_CONENT } from "@/utils/constants";
import React from "react";

const Sidebar = () => {
  const isSidebarVisible = useUtubeStore((state: any) => state.sidebar);

  // Early Return
  if (!isSidebarVisible) return null;

  return (
    <div className="w-52 shadow-lg h-screen overflow-y-auto py-3">
      {SIDEBAR_CONENT.map((sidebar) => (
        <div className="py-3 border-b-2">
          <p className="text-xl pl-3 pb-1 text-center">{sidebar.title}</p>
          <ul className="text-center flex flex-col gap-1">
            {sidebar.items.map((item) => (
              <li className="text-semibold">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
