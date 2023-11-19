"use client";

import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ContactButton = () => {
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
      <button
        className={` p-1.5 px-10 border border-black rounded-md clip-sm  z-10 ${
          showLogo ? "" : ""
        }`}
        onClick={handleOpenContactModal}
      >
        <Image src="/mail.svg" alt="mail" width={15} height={15} />
      </button>
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

export default ContactButton;
