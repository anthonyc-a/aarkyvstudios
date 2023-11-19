import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="marquee mt-0 z-50  clip-sm max-w-[580px] overflow-hidden border border-[#000] text-[#000] p-1">
      <Marquee
        speed={50}
        direction="left"
        gradient
        gradientColor="#fff"
        gradientWidth={16}
      >
        <div className="flex font-[600] text-[0.65rem] tracking-[0.03em]">
          <div>
            thoughtful digital experiences crafted with cutting-edge design and
            technology 
          </div>

          <div className="mx-2">—</div>
          <div>
          thoughtful digital experiences crafted with cutting-edge design and
            technology  
          </div>
          <div className="mx-2">—</div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
