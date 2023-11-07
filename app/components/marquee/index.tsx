import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="hidden md:block fixed top-8 right-8 z-50 w-full max-w-[580px] overflow-hidden border border-[#1111111d]  bg-[#fff] text-[#111] rounded-[48px] p-1.5">
      <Marquee
        gradientColor="#fff"
        gradientWidth={16}
        speed={25}
        direction="left"
      >
        <div className="flex font-[550] text-[0.7rem] tracking-[0.025em]">
          <div>
            I can be a React component, multiple React components, or just some
            text.
          </div>
          <div className="mx-2">—</div>
          <div>
            I can be a React component, multiple React components, or just some
            text.
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
