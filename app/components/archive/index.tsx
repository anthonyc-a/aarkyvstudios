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
        className={`fixed archive grid grid-cols-3 gap-0.5 hover:gap-1 grid-rows-3 bottom-5  right-5 z-50`}
      >
        {images.slice(0, 9).map((_: any, index: any) => (
          <div
            key={index}
            className="w-[4px] h-[4px] bg-[#666] bg-cover bg-center"
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
        <div className="pb-8">
        <Row gutter={[16, 16]}>
          {images.map((image: any, index: any) => (
            <Col key={index} span={8}>
              <Image src={"/img1.png"} alt="" width={500} height={500} />
            </Col>
          ))}
        </Row>
        </div>
     
      </Modal>
    </>
  );
};

export default Archive;
