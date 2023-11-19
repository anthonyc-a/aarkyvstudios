import Image from "next/image";
import React, { useRef, useEffect } from "react";

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
      className="flex relative flex-col justify-center h-[65%] mb-2 items-center md:w-1/2"
      ref={containerRef}
    >
      <div className="relative video-container clip-lg h-full ">
        <div
          className="flex gap-6 items-center
            absolute bottom-6 right-10 z-50"
        ></div>

        <div className="absolute flex gap-5 text-[0.72rem] items-center bottom-8 left-4 z-50">
          <Image src="/img2.png" alt="Aarkyv Studios Logo" width={170} height={170} />
          <div className="text-white leading-4">
            <h3>DOuble</h3>
            <p className="text-gray-400">Marketing agency</p>
            <p className="text-gray-400">2023</p>
          </div>
        </div>

    
        <div className="absolute top-6 flex justify-center items-center left-6 p-2.5 bg-white rounded-full bg-opacity-30 z-50">
          <Image
            src="/globe.svg"
            alt="Aarkyv Studios Logo"
            width={18}
            height={18}
          />
        </div>

        <div className="absolute rounded-[6px] text-[0.67rem] tracking-[0.15px] text-right text-gray-200 top-5 right-4 z-50">
          <div className="font-medium border-b border-gray-400 border-opacity-60 pb-0.5">
            recently:
          </div>
          <ul className="font-light text-[95%] w-[190px]">
            <li className="p-0.5 border-b border-gray-400 border-opacity-60">
              <a href="#">
                <span className="  text-white">
                  blok studios launch
                </span>{" "}
                — Nov // &apos;23
              </a>
            </li>
            <li className="p-0.5 border-b border-gray-400 border-opacity-60">
              <a href="#">
                <span className=" text-white">
                  available for work{" "}
                </span>
                — oct // &apos;23
              </a>
            </li>
            <li className="p-0.5 border-b border-gray-400 border-opacity-60">
              <a href="#">
                <span className="  text-white">
                  artfair website{" "}
                </span>
                — aug // &apos;23
              </a>
            </li>
          </ul>
          <div className="mt-2 p-1 pb-0.5 px-2.5 text-[90%] font-semibold bg-white text-black w-fit rounded-full ml-auto">
            load more +
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
          {/* Add gradient in top right corner */}
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
