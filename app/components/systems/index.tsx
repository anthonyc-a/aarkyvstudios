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
        className={`systems fixed top-11 z-10 hidden md:block  hover:underline ${
          showLogo ? "right-10 md:right-12" : "left-10 md:left-[16rem]"
        }`}
        onClick={handleOpenModal}
      >
        <span className="">systems</span> online
      </div>
      <button
        className={`fixed  p-1.5 px-10 bg-[#333] rounded-[32px] z-10 ${
          showLogo
            ? "top-[39px] right-8 md:right-[16rem]"
            : "top-[39px] right-8 md:left-10 md:right-[unset]"
        }`}
        onClick={handleOpenContactModal}
      >
        <Image src="/mail.svg" alt="mail" width={15} height={15} />
      </button>
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
        <p className="">Version: 2.2.0</p>
        <p>Language: TypeScript</p>
        <p>Animation Library: GSAP</p>
        <p>Font: Britti Sans Variable</p>
        <p>
          Last Updated:{" "}
          {new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })}{" "}
          (ICT), Thailand
        </p>
      </Modal>
      <Modal
        title="Get in touch"
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
