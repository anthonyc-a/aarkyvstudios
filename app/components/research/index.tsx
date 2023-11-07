'use client'

import Image from "next/image";
import React, { useState } from "react";

const gridItems = [
    {
      src: "/img2.png",

      alt: "Item 1",
      title: "Double",
      text: "Marketing Agency",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img1.png",

      alt: "Item 2",
      title: "Archvizual",
      text: "3D Design Studio",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img3.png",
      alt: "Item 3",
      title: "Verve",
      text: "Streaming Platform",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img4.png",
      alt: "Item 4",
      title: "Snapi",
      text: "Marketing Tool",
      bgColor: "bg-gray-100",
    },
  ];

const Research = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="grid w-full mx-auto max-w-[860px] relative mt-16 grid-cols-1 gap-6 text-black">
      {gridItems.map((item: any, index: any) => (
        <div
          key={index}
          className={`${item.bgColor} hover:brightness-75 rounded-sm relative p-8 flex items-center gap-8`}
          onClick={handleOpenModal}
        >
          <div className="relative">
            <h3>{item.title}</h3>
            <p className="text-[#666] font-[500]">{item.text}</p>
          </div>
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={10}
            height={10}
            className="absolute bottom-5 right-5"
          />
        </div>
      ))}
    </div>
  );
};

export default Research;
