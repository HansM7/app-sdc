"use client";
import { useState } from "react";

export default function HeaderComponent({
  children,
  add,
}: {
  children: React.ReactNode;
  add?: String;
}) {
  const [toolBarHidden, setToolBarHidden] = useState("hidden");
  const [hidenRefs, setHidenRefs] = useState("");
  const [customWidht, setCustomWith] = useState("w-[40%]");
  const [customWidhtButton, setCustomWithButton] = useState("");

  function handleHidenToolbar() {
    toolBarHidden === "hidden"
      ? setToolBarHidden("")
      : setToolBarHidden("hidden");
    customWidht === "w-[40%]"
      ? setCustomWith("w-[90%]")
      : setCustomWith("w-[40%]");
    hidenRefs === "" ? setHidenRefs("hidden") : setHidenRefs("");
    customWidhtButton === ""
      ? setCustomWithButton("w-full flex")
      : setCustomWithButton("");
  }
  return (
    <header
      className={`${customWidht} bg-zinc-900 p-2 rounded-md bg-opacity-80 mx-auto z-10 transition-all duration-2000 ease-in fixed text-zinc-300  ${add}`}>
      {/* Toolbar */}
      <div
        className={`${toolBarHidden}  mb-2 p-2 rounded-md m-auto bg-zinc-900 w-full rounded-[0 0 8px 16px] bg-opacity-80 h-[40%] justify-around z-10 transition-all duration-2000 ease-in md:hidden`}>
        <div className='border-r border-zinc-700 w-full p-2'>
          <h2>cosa 1</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className=' w-full p-2'>
          <h1>cosa 2</h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      {/* Header buttons(Refs) */}
      <div className='md:flex md:gap-4 '>
        <button
          type='button'
          className={`bg-zinc-800 rounded-md hover:bg-zinc-700 border-zinc-600 border ${customWidhtButton} md:hidden w-full`}
          onClick={handleHidenToolbar}>
          <h1 className='p-2 w-max'>SDC-Menu</h1>
        </button>
        <div
          className={`${hidenRefs} flex bg-zinc-800 rounded-md w-full p-2 max-md:hidden`}
          id='refs'>
          <h1 className='p-2 animate-pulse'>Home</h1>
          <ul className='flex gap-2 w-full justify-around'>{children}</ul>
        </div>
      </div>
    </header>
  );
}
