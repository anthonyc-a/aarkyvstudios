import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VisibilityContext } from "@/app/context/Visibility";

const Hero: React.FC = () => {
  const { isVisibleRef, setIsVisible } = useContext(VisibilityContext);
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(isVisibleRef.current);
  }, [isVisibleRef, setIsVisible]);

  return (
    <a href="#about">
      <div
        className="hero w-full max-w-[850px] flex hover:font-extrabold justify-center h-[380px] items-center gap-3 p-4 py-10 relative"
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute font-extralight text-[16px] top-0 left-0 w-full h-full ">
          <div className="absolute cross top-0 left-0 w-4 h-4 flex justify-center items-center">
            +
          </div>
          <div className="absolute cross top-0 right-0 w-4 h-4 flex justify-center items-center">
            +
          </div>
          <div className="absolute cross bottom-0 left-0 w-4 h-4 flex justify-center items-center">
            +
          </div>
          <div className="absolute cross bottom-0 right-0 w-4 h-4 flex justify-center items-center">
            +
          </div>
        </div>

        <div className="absolute play-button flex gap-2 items-center text-[0.72rem] font-[500] bottom-8 right-8">
          <Image src={"/mouse.svg"} alt="play" width={15} height={15} />
        </div>

        <video
          src={
            "https://pininfarina.it/wp-content/uploads/2021/04/Nuovo-video3.mp4"
          }
          autoPlay
          className="max-w-[850px] h-[100%] object-cover clip clip-lg "
          loop
          muted
          style={{
            position: "absolute",
            width: isHovered ? "100%" : "0%",
            zIndex: -1,
          }}
        />
        <div className="inner flex flex-col w-[240px] gap-[14px]">
          <div className="logo-container mix-blend-difference flex gap-[20px]">
            <Image
              src={"/logo.svg"}
              alt="AARKYV STUDIOS logo"
              width={10}
              height={10}
            />
            <span className="font-[640] text-[1rem]">AARKYV STUDIOS</span>
          </div>
          <button
            className="cta flex items-center justify-between  text-[0.7rem] font-[680] bg-white text-[#111] p-[6px] px-4"
          >
            Learn More
            <Image
              src={"/arrow.svg"}
              alt="arrow"
              width={8}
              height={8}
              className={`${
                isHovered && "translate-x-[2px] translate-y-[-1px]"
              } transition-all duration-300 delay-300`}
            />
          </button>
        </div>
      </div>
    </a>
  );
};

export default Hero;
