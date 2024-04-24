import { LIVECHAT_OFFSET } from "@/utils/constants";
import { create } from "zustand";

export const useUtubeStore = create((set) => ({
  sidebar: true,
  videos: [],
  currentVideo: {},
  cacheAutoSuggest: new Map(),
  liveChat: [],
  toggleSidebar: () => {
    set((state: any) => ({ sidebar: !state.sidebar }));
  },
  togglePopularMovies: (movies: any) => {
    set(() => ({ videos: movies }));
  },
  toggleCurrentVideo: (movie: any) => {
    set(() => ({ currentVideo: movie }));
  },
  toggleCache: (searchText: string, cacheMovie: any) => {
    set((state: any) => ({
      cacheAutoSuggest: state.cacheAutoSuggest.set(searchText, cacheMovie),
    }));
  },
  toggleLiveChat: (comment: any) => {
    set((state: any) => {
      const updatedLiveChat = [comment, ...state.liveChat];
      if (state.liveChat.length >= LIVECHAT_OFFSET) {
        updatedLiveChat.splice(LIVECHAT_OFFSET, 1);
      }
      return {
        liveChat: updatedLiveChat,
      };
    });
  },
}));
