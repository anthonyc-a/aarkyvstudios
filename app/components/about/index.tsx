import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div>
      <div className="gap-4 flex flex-col  w-full mt-6">
        <div className="grid items-center grid-rows-2 gap-24 gap-y-20 grid-cols-2">
          <div className="item ">
            <h4 className="text-[20px] leading-[1.3] font-black">
              Crafting visually stunning user experiences through cutting-edge
              design and technology.
            </h4>
            <p className="txt mt-3">
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
              Bespoke web design services that focus on creating a visually.
            </p>
            <button className="mt-7 clip text-[0.68rem] p-1 px-4 bg-[#f9f9f9] text-[#111]">
              Our Services
            </button>
          </div>
          <Marquee className="rclip h-64 clip  bg-[#f9f9f9]">
            <div className="item flex items-center justify-between gap-16 w-full ml-auto p-12 ">
              <Image
                src="/img5.png"
                alt="About Us Image"
                width={250}
                height={286}
                className="w-auto"
              />
              <Image
                src="/pink.png"
                alt="About Us Image"
                width={250}
                height={286}
                className="w-auto"
              />
              <Image
                src="/grey.png"
                alt="About Us Image"
                width={250}
                height={286}
                className="w-auto"
              />
              <Image
                src="/phone.png"
                alt="About Us Image"
                width={80}
                height={286}
              />
            </div>
          </Marquee>

          <div className="item">
            <Image
              src="/ppl.png"
              alt="About Us Image"
              width={330}
              height={286}
              className="w-full h-64 clip object-cover brightness-[0.8] "
            />
          </div>
          <div className="item">
            <h4 className="text-[20px] text-right leading-[1.3] font-black">
              Over 5 years collaborating with small to medium-sized businesses,
              startups and individuals.
            </h4>
            <div className="flex gap-4 ml-auto w-fit items-center">
            <button className="mt-7 text-[0.68rem] p-1 px-4 bg-transparent border border-[#666] text-[#fff]">
                Double Agency
              </button>
              <button className="mt-7 clip text-[0.68rem] p-1 px-4 bg-[#f9f9f9] text-[#111]">
                Our Clients
              </button>
             
            </div>
          </div>
          <div className="item">
            <h4 className="text-[20px] flex items-center gap-3 leading-[1.35] font-black">
              <Image src="/globe.svg" alt="About Us Image" width={24} height={24} />
              Based in the
              United Kingdom
            </h4>
            <p className="txt mt-4">
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
            </p>
            <button className="mt-7 clip text-[0.68rem] p-1 px-4 bg-[#f9f9f9]  text-[#111]">
              Our Research
            </button>
          </div>
          <div className="item w-full ml-auto">
            <Image
              src="/ldn.png"
              alt="About Us Image"
              width={330}
              height={286}
              className="w-full h-64 object-cover clip brightness-[0.8] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
