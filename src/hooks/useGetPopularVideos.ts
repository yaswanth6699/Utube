import { useUtubeStore } from "@/store/useSidebarStore";
import { YOUTUBE_POPULAR_API } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";

export const useGetPopularVideos = () => {
  const popularMovies = useUtubeStore((state: any) => state.videos);
  const togglePopularMovies = useUtubeStore(
    (state: any) => state.togglePopularMovies
  );

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(YOUTUBE_POPULAR_API);
      togglePopularMovies(data?.items);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!popularMovies.length) {
      fetchVideos();
    }
  }, []);
  return;
};
