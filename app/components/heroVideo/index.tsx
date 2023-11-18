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
        >
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
