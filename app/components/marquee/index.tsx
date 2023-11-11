import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="marquee hidden md:block absolute top-9 right-8 z-50 w-full max-w-[580px] overflow-hidden  bg-[#f9f9f9] text-[#111] p-[5px]">
      <Marquee
      gradient
        gradientColor="#fff"
        gradientWidth={24}
        speed={40}
        direction="left"
      >
        <div className="flex gap-4 font-[560] text-[0.66rem] tracking-[0.045em]">
          <div>
          Crafting visually  stunning user experiences through cutting-edge design and technology
          </div>
          —
          <div>
          Crafting visually stunning user experiences through cutting-edge design and technology
          </div>
          —
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
