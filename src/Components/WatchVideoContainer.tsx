import { useUtubeStore } from "@/store/useSidebarStore";
import { useRouter } from "next/router";
import React from "react";
import { PiUserSwitch } from "react-icons/pi";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { likeConverter, viewConverter } from "@/utils/helper";
import { formatDistance } from "date-fns";
import { useGetVideoById } from "@/hooks/useGetVideoById";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchVideoContainer = () => {
  const { query } = useRouter();
  useGetVideoById(query?.v);
  const currentVideo = useUtubeStore((state: any) => state.currentVideo);

  if (!Object.keys(currentVideo).length) return;

  const { statistics, snippet } = currentVideo;
  const { title, channelTitle, publishedAt, description } = snippet;
  const { likeCount, viewCount } = statistics;
  const uploadTime = formatDistance(new Date(publishedAt), new Date());
  return (
    <div className="my-2 p-5 h-screen overflow-y-auto flex">
      <div className="w-3/5">
        <iframe
          className="w-full h-2/3"
          src={`https://www.youtube.com/embed/${query.v}?si=7pkVJpUw2mo6hphs`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-xl pt-2 font-bold">{title}</p>
          <div className="flex gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <PiUserSwitch size={38} />
              <p className="font-semibold">{channelTitle}</p>
              <button className="p-2 px-3 bg-red-600 rounded-2xl text-white text-sm">
                Subscribe
              </button>
            </div>

            <div className="flex">
              <button className="p-2 rounded-l-full border border-1 flex items-center gap-2">
                <p className="font-semibold">{likeConverter(likeCount)}</p>{" "}
                <AiTwotoneLike size={20} />
              </button>
              <button className="p-2 rounded-r-full border border-1 flex items-center gap-2">
                <AiTwotoneDislike size={20} />
              </button>
            </div>
          </div>
          <div className="w-full p-2 bg-gray-200 rounded-lg">
            <p className="font-semibold">
              {viewConverter(viewCount)} views, {uploadTime}
            </p>
            <p>{description}</p>
          </div>
          <Comments />
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchVideoContainer;
