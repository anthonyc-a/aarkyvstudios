"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "antd/lib/modal/Modal";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const gridItems = [
  {
    alt: "Item 1",
    title: "Branding",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
    src: "https://www.aarkyv.studio/_next/image?url=%2Fbranding.png&w=750&q=75",
  },
  {
    alt: "Item 2",
    title: "UI/UX Design",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
    src: "https://www.aarkyv.studio/_next/image?url=%2Fweb.png&w=1920&q=75",
  },
  {
    alt: "Item 4",
    title: "Development",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
    src: "https://www.aarkyv.studio/_next/image?url=%2Fdev.png&w=750&q=75",
  },
  {
    alt: "Item 5",
    title: "SEO",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
    src: "https://www.aarkyv.studio/_next/image?url=%2Fecom.png&w=750&q=75",
  },
  {
    alt: "Item 6",
    title: "Marketing",
    img: "/dev.svg",
    bgColor: "bg-gray-500",
    src: "https://www.aarkyv.studio/_next/image?url=%2Fdev.png&w=750&q=75",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("");

  const handleOpenModal = (content: string) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const visibleItems = showMore ? gridItems : gridItems.slice(0, 3);

  const handleAccordionClick = (question: string) => {
    setActiveAccordion(activeAccordion === question ? "" : question);
  };

  return (
    <>
      <div className="grid w-full md:w-1/2 max-w-[480px] min-h-[380px] relative mt-6 grid-cols-1 gap-5">
        {visibleItems.map((item: any, index: any) => (
          <div
            key={index}
            className={`service relative p-6 h-[104px] justify-between flex items-center gap-8`}
            onClick={() => handleOpenModal(item.title)}
          >
            <div className="relative z-10">
              <Image src={item.img} alt={item.img} width={72} height={72} />
              <h3 className="text-white mt-4">{item.title}</h3>
            </div>
           
          </div>
        ))}
        <div className="flex mt-6 ml-auto">
          <button
            className="clip text-[0.68rem] w-40 p-1 px-4 bg-[#f9f9f9] text-[#111]"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less -" : "Load more +"}
          </button>
        </div>
      </div>

      <Modal
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        centered
      >
        <div className="bg-white p-8">
          <h3>{modalContent}</h3>
          <button onClick={handleCloseModal}>Close Modal</button>{" "}
        </div>
      </Modal>
    </>
  );
};

export default Services;
