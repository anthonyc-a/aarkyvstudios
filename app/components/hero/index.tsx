import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VisibilityContext } from "../../context/visibilityCOntext";

const Hero: React.FC = () => {
  const { isVisibleRef, setIsVisible } = useContext(VisibilityContext);
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(isVisibleRef.current);
  }, [isVisibleRef, setIsVisible]);

  return (
    <div
      className="hero w-full max-w-[850px] flex hover:font-extrabold overflow-hidden justify-center h-[380px] items-center gap-3 p-4 py-10"
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full "></div>
      <Image
        src={"/logo.svg"}
        alt="AARKYV STUDIOS logo"
        className="mix-blend-difference"
        width={10}
        height={10}
      />
      <video
        src={
          "https://pininfarina.it/wp-content/uploads/2021/04/Nuovo-video3.mp4"
        }
        autoPlay
        className="saturate-100 max-w-[860px] h-[100%] object-cover  "
        loop
        muted
        style={{ position: "absolute", width: isHovered ? '100%' : '0%', zIndex: -1 }}
      />
      <span className="mix-blend-difference">AARKYV STUDIOS</span>
    </div>
  );
};

export default Hero;
