import Header from "@/Components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
