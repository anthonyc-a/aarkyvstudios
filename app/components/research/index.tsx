'use client'

import Image from "next/image";
import React, { useState } from "react";

const gridItems = [
    {
      src: "/img2.png",

      alt: "Item 1",
      title: "Chroma",
      text: "Software",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img1.png",

      alt: "Item 2",
      title: "Blok Studios",
      text: "Architecture",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img3.png",
      alt: "Change Project",
      title: "Change Project",
      text: "Charity",
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
    <>
    <div className="grid w-full mx-auto max-w-[580px] relative mt-16 grid-cols-1 gap-6 text-black">
      {gridItems.map((item: any, index: any) => (
        <div
          key={index}
          className={`${item.bgColor} research hover:brightness-75 rounded-sm relative p-8 flex items-center gap-8`}
          onClick={handleOpenModal}
        >
          <div className="relative">
            <h3>{item.title}</h3>
            <p className="text-[#666] font-[500]">{item.text}</p>
          </div>
       
        </div>
      ))}
    </div>
    {isModalOpen && (
        <div className="fixed z-[500] top-0 left-0 w-full h-full bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-[2px]">
            <h3>Systems</h3>
            <p>version: 2.2.0</p>
            <button onClick={handleCloseModal}>Close Modal</button>{" "}
          </div>
        </div>
      )}
    </>
    
  );
};

export default Research;
