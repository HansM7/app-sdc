/** @format */
"use client";
import Index from ".";
import HeaderComponent from "./components/header";
import LiComponent from "./components/header/li";
import { homeRef } from "./lib/utils";

export default function Home() {
  return (
    <div className="relative bg-zinc-800  ">
      <header className="w-full bg-red-300 fixed bottom-0 xl:top-0 h-fit mb-16 xl:mt-16 xl:mb-0">
        header
      </header>

      <Index />
      <Index />
    </div>
  );
}
