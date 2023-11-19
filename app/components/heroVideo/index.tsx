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
      className="flex relative flex-col justify-center h-[50vh] items-center md:w-1/2"
      ref={containerRef}
    >
      <div className="relative video-container clip-lg h-full w-full overflow-hidden">
        <div
          className="flex gap-6 items-center
            absolute bottom-6 right-10 z-50"
        ></div>

        <Image
          src="/pause.svg"
          alt="Aarkyv Studios Logo"
          width={8}
          height={8}
          className="absolute bottom-8 right-8 z-50"
        />

        <div className="absolute rounded-[6px] text-[0.65rem] text-right text-white top-6 right-6 z-50">
          <div className="font-semibold border-b border-gray-400 border-opacity-60 pb-0.5">
            recent updates:
          </div>
          <ul className="font-light w-[200px]">
            <li className="py-0.5 border-b border-gray-400 border-opacity-80">
              <a href="#">
                <span className="font-normal">blok studios launch</span> — Nov /
                23
              </a>
            </li>
            <li className="py-0.5 border-b border-gray-400 border-opacity-80">
              <a href="#">
                <span className="font-normal">available for work </span>— oct /
                23
              </a>
            </li>
            <li className="py-0.5 border-b border-gray-400 border-opacity-80">
              <a href="#">
                <span className="font-normal">artfair website </span>— aug / 23
              </a>
            </li>
          </ul>
          <div className="mt-2 p-0.5 pb-0 px-2 text-[0.6rem] font-semibold bg-white text-black w-fit rounded-sm ml-auto">
            + load more
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
