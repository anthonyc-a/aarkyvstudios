"use client";

import React, { useState } from "react";
import { Modal, Button, Row, Col } from "antd";
import { FaFilter } from "react-icons/fa";
import Image from "next/image";

interface GridItemButtonProps {
  images: string[];
}

const Archive: React.FC<GridItemButtonProps> = ({ images }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed archive grid grid-cols-3 gap-0.5 border border-black bg-white p-2.5 rounded-[8px] hover:gap-[3px] grid-rows-3 bottom-4  right-4 z-50`}
      >
        {images.slice(0, 9).map((_: any, index: any) => (
          <div
            key={index}
            className="w-[4px] h-[4px]  bg-[#222] bg-cover bg-center"
          />
        ))}
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={800}
        style={{ borderRadius: "2px", zIndex: 10000 }}
      >
        <div className="flex flex-col gap-2 h-[340px] overflow-scroll">
      
          <div className="w-full min-h-[100px] overflow-hidden rounded-lg bg-blue-500">
            <Image src={"/bali.png"} alt="" width={500} height={500} className="w-full h-full object-cover brightness-50" />
          </div>
          <div className="w-full min-h-[100px] overflow-hidden rounded-lg bg-blue-500">
            <Image src={"/bali.png"} alt="" width={500} height={500} className="w-full h-full object-cover brightness-50" />
          </div>
          <div className="w-full min-h-[100px] overflow-hidden rounded-lg bg-blue-500">
            <Image src={"/bali.png"} alt="" width={500} height={500} className="w-full h-full object-cover brightness-50" />
          </div>
          <div className="w-full min-h-[100px] overflow-hidden rounded-lg bg-blue-500">
            <Image src={"/bali.png"} alt="" width={500} height={500} className="w-full h-full object-cover brightness-50" />
          </div>
          <div className="w-full min-h-[100px] overflow-hidden rounded-lg bg-blue-500">
            <Image src={"/bali.png"} alt="" width={500} height={500} className="w-full h-full object-cover brightness-50" />
          </div>

  
        </div>
      </Modal>
    </>
  );
};

export default Archive;
