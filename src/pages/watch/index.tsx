import dynamic from "next/dynamic";

const WatchVideoContainer = dynamic(
  () => import("@/Components/WatchVideoContainer"),
  {
    ssr: false,
  }
);

export default function Watch() {
  return <WatchVideoContainer />;
}
