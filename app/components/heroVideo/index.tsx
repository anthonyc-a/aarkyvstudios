import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const videoRect = videoRef.current.getBoundingClientRect();
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        const offset = containerRect.top - videoRect.top;
        const position = (offset - scrollPosition) * 0.5;
        videoRef.current.style.transform = `translateY(${position}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex relative flex-col justify-center h-[68%] mb-2 items-center md:w-1/2"
      ref={containerRef}
    >
      <div className="relative video-container clip-lg h-full ">
        <div
          className="flex gap-6 items-center
            absolute bottom-6 right-10 z-50"
        ></div>
        <div className="absolute bottom-8 left-0 w-full z-50">
          <Swiper spaceBetween={50} className="swiper-container" autoplay={true}>
            <SwiperSlide>
              <div className=" flex gap-6 text-[0.7rem]  w-full items-center px-6 z-50">
                <Image
                  src="/img2.png"
                  alt="Aarkyv Studios Logo"
                  width={160}
                  height={160}
                  className="float"
                />
                <div className="text-white leading-[15px] tracking-[0.2px]">
                  <h3 className="font-[500]">DOuble</h3>
                  <p className="text-gray-400">Marketing agency</p>

                  <div className="tag-contain w-full gap-1.5 font-[500] flex flex-wrap mt-2 text-[0.55rem]">
                  <span className="tag flex items-center gap-1 p-1 px-2 bg-white text-black rounded-xl">
                      view site <Image src="/arrow.svg" alt="" width={5} height={5} />
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      ui/ux
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      dev
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      consultancy
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      2023
                    </span>
                  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex gap-8 text-[0.7rem]  w-full items-center px-6 z-50">
                <Image
                  src="/img1.png"
                  alt="Aarkyv Studios Logo"
                  width={160}
                  height={160}
                  className="float"
                />
                <div className="text-white leading-[15px] tracking-[0.2px]">
                  <h3 className="font-[500]">Archvizual</h3>
                  <p className="text-gray-400">Architecture studio</p>

                  <div className="tag-contain w-full gap-1.5 font-[500] flex flex-wrap mt-2 text-[0.55rem]">
                  <span className="tag flex items-center gap-1 p-1 px-2 bg-white text-black rounded-xl">
                      view site  <Image src="/arrow.svg" alt="" width={5} height={5} />
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      ui/ux
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      dev
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      concept
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      2021
                    </span>
                  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex gap-8 text-[0.7rem]  w-full items-center px-6 z-50">
                <Image
                  src="/img5.png"
                  alt="Aarkyv Studios Logo"
                  width={160}
                  height={160}
                  className="float"
                />
                <div className="text-white leading-[15px]">
                  <h3>Epoch-a</h3>
                  <p className="text-gray-400">E-comemrce</p>

                  <div className="tag-contain w-full gap-1.5 font-[500] flex flex-wrap mt-2 text-[0.55rem]">
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      ui/ux
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      marketing
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      concept
                    </span>
                    <span className="tag p-1 px-2 bg-white bg-opacity-50 rounded-xl">
                      2022
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="absolute top-12 flex justify-end items-center left-0 w-16 p-2.5 pr-4 bg-white rounded-r-full bg-opacity-30 z-50">
          <Image
            src="/globe.svg"
            alt="Aarkyv Studios Logo"
            width={22}
            height={22}
          />
        </div>

        <div className="absolute rounded-[8px]  text-[0.65rem] bg-white bg-opacity-30 backdrop-blur p-2.5 tracking-[0.35px] text-right text-gray-300 top-5 right-4 z-50">
          <div className="font-medium border-b text-white border-gray-300 border-opacity-60 pb-0.5">
            recent updates:
          </div>
          <ul className=" text-[92%] w-[190px]">
            <li className="p-0.5 border-b border-gray-300 border-opacity-60">
              <a href="#">
                <span className="  text-white">double site update</span> — [Nov / &apos;23]
              </a>
            </li>
            <li className="p-0.5 border-b border-gray-300 border-opacity-60">
              <a href="#">
                <span className=" text-white">available for work </span>— [oct /&apos;23]
              </a>
            </li>
            <li className="p-0.5 border-b border-gray-300 border-opacity-60">
              <a href="#">
                <span className="  text-white">artfair website </span>— [aug /
                &apos;23]
              </a>
            </li>
          </ul>
          <div className="mt-2 p-1 pb-0.5 px-3 text-[90%] font-semibold bg-white text-black w-fit rounded-full ml-auto">
            + more
          </div>
        </div>

        <video
          className={`h-full object-cover clip-lg mr-14 z-10 bg-gray-300 relative`}
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
