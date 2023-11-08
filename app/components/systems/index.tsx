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
        className={`systems fixed top-10  z-10  hover:underline ${
          showLogo ? "right-10 md:right-12" : "left-10 md:left-[16rem]"
        }`}
        onClick={handleOpenModal}
      >
        systems: online
      </div>
      <button
        className={`fixed  p-1.5 px-10 bg-[#666] rounded-[32px] z-10 ${
          showLogo ? "top-[36px] right-[16rem]" : "top-[36px] left-10"
        }`}
        onClick={handleOpenContactModal}
      >
        <Image src="/mail.svg" alt="mail" width={15} height={15} />
      </button>
      <Modal
        title="Systems"
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={[
          <button key="close" onClick={handleCloseModal}>
            Close Modal
          </button>,
        ]}
      >
        <p>Version: 2.2.0</p>
        <p>System Status: Online</p>
        <p>System Uptime: 99.9%</p>
        <p>Current Users: 100</p>
        <p>
          Local Time:{" "}
          {new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })}
        </p>
      </Modal>
      <Modal
        title="Contact Us"
        visible={isContactModalOpen}
        onCancel={handleCloseContactModal}
        footer={[
          <button key="close" onClick={handleCloseContactModal}>
            Close Modal
          </button>,
        ]}
      >
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </Modal>
    </>
  );
};

export default Systems;
