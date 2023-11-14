import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="marquee z-50 w-[90%] clip max-w-[580px] overflow-hidden border border-[#000] text-[#000] mx-auto p-1.5">
      <Marquee
        speed={64}
        direction="left"
      >
        <div className="flex gap-4 font-[580] text-[0.7rem] tracking-[0.05em]">
          <div>
          outstanding user experiences made with cutting-edge design and technology
          </div>
          —
          <div>
          outstanding user experiences made with cutting-edge design and technology
          </div>
          —
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
