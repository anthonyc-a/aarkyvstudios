import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCpt = () => {
  return (
    <div className="marquee mt-0 z-50  clip max-w-[580px] overflow-hidden border border-[#000] text-[#000] p-1">
      <Marquee speed={50} direction="left" gradient gradientColor="#fff" gradientWidth={16}>
        <div className="flex font-[500] text-[0.68rem] tracking-[0.035em]">
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
