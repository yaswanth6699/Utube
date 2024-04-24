import { useUtubeStore } from "@/store/useSidebarStore";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";

export const useDobounceSuggestions = (searchText: string) => {
  const [toggleCache, cacheAutoSuggest] = useUtubeStore((state: any) => [
    state.toggleCache,
    state.cacheAutoSuggest,
  ]);
  const fetchSuggestions = async () => {
    try {
      const { data } = await axios.get(YOUTUBE_SEARCH_SUGGESTIONS + searchText);
      toggleCache(searchText, data?.[1]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!searchText || cacheAutoSuggest.has(searchText)) {
      return;
    }
    // dobounce
    const timer = setTimeout(() => {
      fetchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return;
};
