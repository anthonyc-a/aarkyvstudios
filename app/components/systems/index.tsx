"use client";

import React, { useState } from "react";

const Systems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="systems fixed top-10 left-10 md:left-20 z-10 hover:underline"
        onClick={handleOpenModal}
      >
        systems
      </div>
      {isModalOpen && (
        <div className="fixed z-[500] top-0 left-0 w-full h-full bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-[2px]">
            <h3>Modal Content</h3>
            <button onClick={handleCloseModal}>Close Modal</button>{" "}
            {/* add button to close modal */}
          </div>
        </div>
      )}
    </>
  );
};

export default Systems;
