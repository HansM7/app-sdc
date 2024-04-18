/** @format */

"use client";

function Hero() {
  return (
    <section className='bg-zinc-800 h-screen'>
      <div className='w-full h-full pt-24'>
        <div className='grid grid-cols-2'>
          <div className='col-span-1'>
            <h1 className='text-white xl:text-[10rem] 2xl::text-[12rem]  font-semibold leading-none'>
              This section is a section test
            </h1>
            <p className='text-gray-400 text-3xl mt-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis id deserunt natus excepturi adipisci quis sed esse
              necessitatibus saepe!
            </p>
          </div>
          <div className='col-span-1  pt-8'>
            <img className='w-full  rounded-lg' src='vector.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
