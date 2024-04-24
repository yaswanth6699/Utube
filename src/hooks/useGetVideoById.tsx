import { useUtubeStore } from "@/store/useSidebarStore";
import { getYoutubeVideoById } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";

export const useGetVideoById = (id: string | any) => {
  const toggleCurrentVideo = useUtubeStore(
    (state: any) => state.toggleCurrentVideo
  );
  const videos = useUtubeStore((state: any) => state.videos);
  const fetchVideo = async () => {
    try {
      if (!!videos.length) {
        return toggleCurrentVideo(
          videos.filter((item: any) => item.id === id)[0]
        );
      }
      const { data } = await axios.get(getYoutubeVideoById(id));
      toggleCurrentVideo(data?.items?.[0]);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, []);
};
