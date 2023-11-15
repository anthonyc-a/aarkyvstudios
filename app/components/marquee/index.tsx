import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="marquee z-50 w-[90%] clip max-w-[580px] overflow-hidden border border-[#000] text-[#000] mx-auto p-1.5">
      <Marquee speed={64} direction="left" gradient gradientColor="#fff" gradientWidth={24}>
        <div className="flex font-[600] text-[0.71rem] tracking-[0.05em]">
          <div>
            outstanding user experiences crafted with cutting-edge design and
            technology
          </div>

          <div className="mx-2">—</div>
          <div>
            outstanding user experiences crafted with cutting-edge design and
            technology
          </div>
          <div className="mx-2">—</div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCpt;
