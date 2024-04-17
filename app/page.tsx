/** @format */
"use client";
import Index from ".";
import HeaderComponent from "./components/header";
import LiComponent from "./components/header/li";
import { homeRef } from "./lib/utils";

export default function Home() {
  return (
    <div className='px-4'>
      <HeaderComponent>
        {homeRef.map((ref) => {
          return <LiComponent name={ref.name} idRef={ref.idRef} />;
        })}
      </HeaderComponent>
      <Index />
    </div>
  );
}
