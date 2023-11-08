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
      <div className="absolute font-light top-0 left-0 w-full h-full ">
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
      <div className="flex flex-col items-center">
        <span className="mix-blend-difference flex gap-3">
          {" "}
          <Image
            src={"/logo.svg"}
            alt="AARKYV STUDIOS logo"
            width={10}
            height={10}
          />
          AARKYV STUDIOS
        </span>
        <a href="#about" className="mt-3 text-[0.65rem] font-semibold z-50 bg-white text-black p-1.5 px-5 rounded-3xl">Learn More</a>
      </div>
    </div>
  );
};

export default Hero;
