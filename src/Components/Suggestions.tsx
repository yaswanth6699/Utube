import { useUtubeStore } from "@/store/useSidebarStore";
import React from "react";

const Suggestions = ({ searchText }: any) => {
  const searchSuggestions = useUtubeStore(
    (state: any) => state.cacheAutoSuggest
  );
  if (!searchSuggestions.get(searchText)?.length) return;
  return (
    <div className="bg-white shadow-lg p-4 mt-1 rounded-md absolute top-14 w-[38%]">
      {searchSuggestions.get(searchText)?.map((item: any) => (
        <p className="my-1">{item}</p>
      ))}
    </div>
  );
};

export default Suggestions;
