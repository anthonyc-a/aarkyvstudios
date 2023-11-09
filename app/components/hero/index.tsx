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
    <div
      className="hero w-full max-w-[850px] flex hover:font-extrabold justify-center h-[380px] items-center gap-3 p-4 py-10 relative"
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute font-extralight text-[13px] top-0 left-0 w-full h-full ">
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

      <video
        src={
          "https://pininfarina.it/wp-content/uploads/2021/04/Nuovo-video3.mp4"
        }
        autoPlay
        className="saturate-100 max-w-[850px] h-[100%] object-cover  "
        loop
        muted
        style={{
          position: "absolute",
          width: isHovered ? "100%" : "0%",
          zIndex: -1,
        }}
      />
      <div className="inner flex flex-col w-[240px] gap-[14px]">
      <div className="absolute bottom-0 right-0">
          <Image src={"/mouse.svg"} alt="AARKYV STUDIOS" width={15} height={15} />
        </div>
        <div className="logo-container mix-blend-difference flex gap-[16px]">
          <Image
            src={"/logo.svg"}
            alt="AARKYV STUDIOS logo"
            width={10}
            height={10}
          />
          <span className="font-black">AARKYV STUDIOS</span>
        </div>
        <a
          href="#about"
          className="cta flex items-center justify-between rounded-[2px] text-[0.65rem] font-bold bg-white text-black p-[6px] px-4"
        >
          Learn More
          <Image src={"/arrow.svg"} alt="arrow" width={8} height={8} />
        </a>
       
      </div>
    </div>
  );
};

export default Hero;
