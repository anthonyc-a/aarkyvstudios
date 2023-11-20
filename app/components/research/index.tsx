"use client";

import { Modal, Button, Image, Row, Col } from "antd";
import React, { useState } from "react";

const gridItems = [
  {
    src: "/aarkyv.png",
    alt: "Item 1",
    title: "Aarkyv",
    text: "Blog",
    bgColor: "bg-gray-100",
    date: "2021",
  },

  {
    src: "/blok.png",
    alt: "Item 2",
    title: "Blok Studios",
    text: "Architecture",
    bgColor: "bg-gray-100",
    date: "2023",
  },
  {
    src: "/chroma.png",
    alt: "Item 1",
    title: "Chroma",
    text: "Software",
    bgColor: "bg-gray-100",
    date: "2024",
  },
  {
    src: "/change.png",
    alt: "Change Project",
    title: "Change Project",
    text: "Social Development",
    bgColor: "bg-gray-100",
    date: "2025",
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
    <div className="my-6 flex flex-col-reverse lg:flex-row gap-8">
      <div className="grid w-full max-w-[800px]  relative grid-cols-1 gap-4 text-[#222]">
        {gridItems.map((item: any, index: any) => (
          <div
            key={index}
            className={`border border-black rounded-md clip research click hover:brightness-75 relative p-2 flex items-center gap-8`}
            onClick={handleOpenModal}
          >
            <div className="relative flex justify-between items-center w-full gap-10 p-2">
              <div className="flex items-center gap-6">
                <div className="flex gap-8">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={28}
                    height={28}
                    className="rounded-md "
                  />
                </div>
                <div>
                  <h3 className="font-[600]">{item.title}</h3>
                  <p className="text-[#666] text-[0.7rem] font-[420] mt-[2px]">
                    {item.text}
                  </p>
                </div>
              </div>
              <p className="text-[#666]">
                    {item.date}
                  </p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          title="Systems"
          visible={isModalOpen}
          onCancel={handleCloseModal}
          footer={[
            <Button key="back" onClick={handleCloseModal}>
              Close Modal
            </Button>,
          ]}
        >
          <p>Version: 2.2.0</p>
          <p>Some more content here...</p>
        </Modal>
      )}
      <div className="w-full h-full clip-lg rounded-xl overflow-hidden relative">
        <Image
          src="/bali.png"
          alt="blok"
          className=" w-full object-cover brightness-75"
        />
        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full p-6 text-white">
          <h3 className="text-[16px] font-bold mb-[2px]">Medewi beach, Bali</h3>
          <p className="text-[#999] text-[0.72rem]">Blok studios Visualisation</p>
        </div>
      </div>
    </div>
  );
};

export default Research;
