import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="hidden md:block absolute top-8 right-8 z-50 w-full max-w-[580px] overflow-hidden border border-[#1111111d]  bg-[#fff] text-[#111] rounded-[48px] p-1.5">
      <Marquee
      gradient
        gradientColor="#fff"
        gradientWidth={16}
        speed={25}
        direction="left"
      >
        <div className="flex font-[600] text-[0.72rem] tracking-[0.035em]">
          <div>
          Crafting visually stunning user experiences through cutting-edge design and technology. —
          </div>
          <div>
          Crafting visually stunning user experiences through cutting-edge design and technology. — 
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
