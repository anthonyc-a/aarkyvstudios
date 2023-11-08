"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Systems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      >
        <Image
          src="/mail.svg"
          alt="mail"
          width={15}
          height={15}
        />
      </button>
      {isModalOpen && (
        <div className="fixed z-[500] top-0 left-0 w-full h-full bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-[2px]">
            <h3>Systems</h3>
            <p>version: 2.2.0</p>
            <button onClick={handleCloseModal}>Close Modal</button>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Systems;
