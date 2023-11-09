"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "antd";

const gridItems = [
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fweb.png&w=1080&q=75",
    alt: "Item 1",
    title: "Branding",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
  },
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fbranding.png&w=750&q=75",
    alt: "Item 2",
    title: "Web Design",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
  },
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fdev.png&w=750&q=75",
    alt: "Item 4",
    title: "Development",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
  },
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fdev.png&w=750&q=75",
    alt: "Item 5",
    title: "SEO",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
  },
  {
    src: "https://www.aarkyv.studio/_next/image?url=%2Fdev.png&w=750&q=75",
    alt: "Item 6",
    title: "Marketing",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal
  const [modalContent, setModalContent] = useState(""); // add state for modal content
  const [showMore, setShowMore] = useState(false); // add state for showing more services

  const handleOpenModal = (content: string) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const visibleItems = showMore ? gridItems : gridItems.slice(0, 3); // determine which services to show based on showMore state

  return (
    <>
      <div className="grid w-full md:w-1/2 max-w-[640px] relative mt-8 grid-cols-1 gap-6 text-black">
        {visibleItems.map((item: any, index: any) => (
          <div
            key={index}
            className={`service hover:brightness-75 rounded-sm overflow-hidden relative p-4 min-h-[88px] flex items-center gap-8`}
            onClick={() => handleOpenModal(item.title)}
          >
            <div className="relative z-10">
              <Image src={item.img} alt={item.img} width={80} height={80} />
              <h3 className="text-white mt-4">{item.title}</h3>
            </div>
            <div
              className="absolute top-0 left-0 w-full rounded-sm h-full z-[5]"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
              }}
            ></div>
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              className="absolute top-0 left-0 rounded-sm w-full h-full object-cover z-[-1]"
            />
          </div>
        ))}
        <div className="flex mt-8 ">
          <button onClick={() => setShowMore(!showMore)} className="opacity-80 border border-[#666] p-1.5 px-4 text-[0.7rem] rounded-2xl">
            {showMore ? "Show Less -" : "Show more +"}
          </button>
        </div>
      </div>

      <Modal
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        centered
      >
        <div className="bg-white p-8 rounded-[2px]">
          <h3>{modalContent}</h3>
          <button onClick={handleCloseModal}>Close Modal</button>{" "}
          {/* add button to close modal */}
        </div>
      </Modal>
    </>
  );
};

export default Services;
