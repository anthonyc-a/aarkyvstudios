'use client'

import React, { useState } from "react";
import { Modal, Button, Row, Col } from "antd";
import { FaFilter } from "react-icons/fa";
import Image from "next/image";

interface GridItemButtonProps {
  images: string[];
}

const Archive: React.FC<GridItemButtonProps> = ({ images }) => {
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
        className={`fixed grid grid-cols-3 gap-1 py-2 grid-rows-3 bottom-8 right-8 z-50`}
      >
          {images.slice(0, 9).map((image, index) => (
              <div
              key={index}
                className="w-[3px] h-[3px] bg-white bg-cover bg-center"
              />
          ))}
      </div>
    <Modal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={800}
        style={{ borderRadius: "2px", zIndex:10000 }}
    >
        <div className="flex justify-between pb-8">
          <h2>Archive</h2>
        </div>
        <Row gutter={[16, 16]}>
          {images.map((image, index) => (
            <Col key={index} span={8}>
              <Image src={'/img1.png'} alt="" width={500} height={500} />
            </Col>
          ))}
        </Row>
      </Modal>
    </>
  );
};

export default Archive;
