import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="marquee hidden md:block absolute top-8 right-8 z-50 w-full max-w-[580px] overflow-hidden border border-[#1111111d]  bg-[#f9f9f9] text-[#111] rounded-[2px] p-[5px]">
      <Marquee
      gradient
        gradientColor="#fff"
        gradientWidth={6}
        speed={40}
        direction="left"
      >
        <div className="flex gap-4 font-[510] text-[0.68rem] tracking-[0.035em]">
          <div>
          Crafting visually  stunning experiences through cutting-edge design and technology
          </div>
          —
          <div>
          Crafting visually stunning experiences through cutting-edge design and technology
          </div>
          —
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
