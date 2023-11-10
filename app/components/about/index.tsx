import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="gap-4 flex flex-col  w-full mt-6">
        <div className="grid items-center grid-rows-2 gap-16 gap-y-24 grid-cols-2">
          <div className="item ">
            <h4 className="text-[20px] leading-[1.35] font-black">
              Crafting visually stunning user experiences through cutting-edge
              design and technology.
            </h4>
            <p className="txt mt-3">
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
            </p>
          </div>
          <div className="item ml-auto">
            <Image
              src="/img5.png"
              alt="About Us Image"
              width={330}
              height={286}
            />
          </div>
          <div className="item">
            <Image
              src="/img5.png"
              alt="About Us Image"
              width={330}
              height={286}
            />
          </div>
          <div className="item">
            <h4 className="text-[20px] leading-[1.35] font-black">
              Over 5 years working with small to medium-sized businesses,
              startups and individuals.
            </h4>
            <p className="txt mt-3">
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
            </p>
          </div>
          <div className="item">
            <h4 className="text-[20px] leading-[1.35] font-black">
              Based in London, Uk
            </h4>
            <p className="txt mt-3">
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
            </p>
          </div>
          <div className="item ml-auto">
            <Image
              src="/img5.png"
              alt="About Us Image"
              width={330}
              height={286}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
