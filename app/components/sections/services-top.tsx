"use client";

import { RevealWrapper } from "next-reveal";
import { TypeAnimation } from "react-type-animation";

function ServicesTop() {
  return (
    <section className="flex flex-col w-full h-full pt-24">
      <div className="grid grid-cols-2 gap-4">
        <RevealWrapper origin="left " className={`w-full`} delay={1000}>
          <div className="relative  group  overflow-hidden gap-4 h-[20rem] ">
            <div className=" flex w-full absolute  filter brightness-50 ">
              <video
                muted
                autoPlay={true}
                loop={true}
                className="w-full h-full "
                src="https://videos.pexels.com/video-files/852421/852421-hd_1920_1080_30fps.mp4"
              />
            </div>
            <div className=" flex flex-col w-full gap-2 px-4 py-8  ">
              <RevealWrapper
                origin="left"
                delay={1000}
                easing="cubic-bezier(0.5, 0, 0, 1)"
              >
                <h2 className="text-white text-4xl underline">
                  Desarrollo web
                </h2>
              </RevealWrapper>

              <RevealWrapper
                className={`w-full`}
                origin="left"
                delay={1000}
                easing="cubic-bezier(0.5, 0, 0, 1)"
              >
                <p className="text-zinc-400 text-pretty text-xl ">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam accusamus nam impedit, eius culpa modi! Enim maxime placeat explicabo excepturi magni libero quo quis, ad omnis? Consequuntur quisquam amet numquam!",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                  />
                </p>
              </RevealWrapper>

              <div className=" absolute bottom-0 hidden group-hover:flex text-white">
                Ver mas...
              </div>
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper origin="left " className={`w-full`}>
          <div className="relative  group   overflow-hidden gap-4 h-[20rem] ">
            <div className=" flex w-full absolute  filter brightness-50 ">
              <video
                muted
                autoPlay={true}
                loop={true}
                className="w-full h-full "
                src="https://videos.pexels.com/video-files/852421/852421-hd_1920_1080_30fps.mp4"
              />
            </div>
            <div className=" flex flex-col w-full gap-2 p-4  ">
              <RevealWrapper
                origin="left"
                delay={1000}
                easing="cubic-bezier(0.5, 0, 0, 1)"
              >
                <h2 className="text-white text-3xl">Desarrollo web</h2>
              </RevealWrapper>

              <RevealWrapper
                className={`w-full`}
                origin="left"
                delay={1000}
                easing="cubic-bezier(0.5, 0, 0, 1)"
              >
                <p className="text-zinc-300 text-pretty ">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam accusamus nam impedit, eius culpa modi! Enim maxime placeat explicabo excepturi magni libero quo quis, ad omnis? Consequuntur quisquam amet numquam!",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                  />
                </p>
              </RevealWrapper>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default ServicesTop;
