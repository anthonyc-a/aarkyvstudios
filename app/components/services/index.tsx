"use client";

import Image from "next/image";
import React, { useState } from "react";

const gridItems = [
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fweb.png&w=1080&q=75",
    alt: "Item 1",
    title: "Web Design",
    img: "/design.svg",
    bgColor: "bg-gray-500",
  },
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fbranding.png&w=750&q=75",
    alt: "Item 2",
    title: "Development",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
  },
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fdev.png&w=750&q=75",
    alt: "Item 4",
    title: "Branding",
    img: "/branding.svg",
    bgColor: "bg-gray-500",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="grid w-full max-w-[640px] relative mt-16 grid-cols-1 gap-8 text-black">
        {gridItems.map((item: any, index: any) => (
          <div
            key={index}
            className={`service brightness-90 rounded-sm overflow-hidden relative p-8 min-h-[140px] flex items-center gap-8`}
          >
        
            <div className="relative z-10">
            <Image
                src={item.img}
                alt={item.img}
                width={30}
                height={30}
              />
              <h3 className="text-white mt-4">{item.title}</h3>
              
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full z-[5]"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.25))",
              }}
            ></div>
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed z-[500] top-0 left-0 w-full h-full bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-[2px]">
            <h3>Modal Content</h3>
            <button onClick={handleCloseModal}>Close Modal</button>{" "}
            {/* add button to close modal */}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
