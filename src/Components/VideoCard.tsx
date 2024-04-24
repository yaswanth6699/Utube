import { viewConverter } from "@/utils/helper";
import Link from "next/link";
import React, { useEffect } from "react";

const VideoCard = ({ video }: any) => {
  if (!video) return null;
  const { snippet, statistics, id } = video;
  const { viewCount } = statistics;
  const { thumbnails, title } = snippet;

  return (
    <Link href={`/watch?v=${id}`} className="p-3 shadow-lg w-72 rounded-md">
      <img
        className="w-full rounded-md object-cover"
        src={thumbnails?.medium?.url}
      />
      <p>{title}</p>
      <p>{viewConverter(viewCount)} views</p>
    </Link>
  );
};

export default VideoCard;
