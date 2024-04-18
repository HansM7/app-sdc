"use client";
import Index from ".";

export default function Home() {
  return (

    <div className='relative'>

    <div className="relative bg-zinc-800  ">

      <header className="w-full bg-red-300 fixed bottom-0 xl:top-0 h-fit mb-16 xl:mt-16 xl:mb-0">
        header
      </header>

      <Index />
      <Index />
    </div>
  );
}
