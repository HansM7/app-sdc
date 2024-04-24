"use client";
import Index from ".";
import NewHeader from "./components/new-header";
import ServicesTop from "./components/sections/services-top";

export default function Home() {
  return (
    <div className="relative flex flex-col px-12 pb-24 bg-zinc-800 min-h-screen ">
      {/* <div className="relative bg-zinc-800  ">
        <header className="w-full bg-red-300 fixed bottom-0 xl:top-0 h-fit mb-16 xl:mt-16 xl:mb-0">
          header
        </header>
      </div> */}

      <NewHeader></NewHeader>

      <Index />

      <ServicesTop></ServicesTop>
    </div>
  );
}
