import { Inter } from "next/font/google";
import Sidebar from "@/Components/Sidebar";
import VideoContainer from "@/Components/VideoContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex gap-2 border">
      <Sidebar />
      <VideoContainer />
    </div>
  );
}
