import { useGetPopularVideos } from "@/hooks/useGetPopularVideos";
import { useUtubeStore } from "@/store/useSidebarStore";
import React from "react";
import VideoCard from "./VideoCard";
import clsx from "clsx";

const VideoContainer = () => {
  useGetPopularVideos();
  const videos = useUtubeStore((state: any) => state.videos);
  const isSidebarVisible = useUtubeStore((state: any) => state.sidebar);
  const gridCol = isSidebarVisible ? "grid-cols-4" : "grid-cols-5";
  return (
    <div
      className={clsx("grid gap-6 p-2 m-auto h-screen overflow-auto", gridCol)}
    >
      {videos?.map((video: any) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
