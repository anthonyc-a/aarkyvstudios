"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";

const Systems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // add state for controlling contact modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= window.innerHeight / 2) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`systems z-10  hover:underline ${
          showLogo ? "hidden hover:text-inherit" : ""
        }`}
        onClick={handleOpenModal}
      >
        <span>systems</span>
      </div>
  
      <Modal
        title={
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Aarkyv Studios Logo"
              width={10}
              height={10}
              className="invert-[1]"
            />
            <span className="ml-3">Aarkyv Studios</span>
          </div>
        }
        visible={isModalOpen}
        onCancel={handleCloseModal}
        okButtonProps={{ disabled: true, style: { display: "none" } }}
      >
        <p className="">Site Version: 2.2.0</p>
        <p>Language: TypeScript</p>
        <p>Font: Britti Sans Variable</p>
        <p>
          Last Updated:{" "}
          {new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })}{" "}
          (ICT), Thailand
        </p>
      </Modal>
    </>
  );
};

export default Systems;
