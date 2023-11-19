"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import MarqueeCpt from "../components/marquee";
import HeroVideo from "../components/heroVideo";

const Page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col mt-0">
      <div className="header-height mt-[61px]"></div>
      <div className="flex flex-col-reverse lg:flex-row h-[85vh] p-5 mt-1 ">
        <div className="absolute font-extralight text-[14px] bottom-24 left-[50%] -translate-x-1/2 w-[90%] h-full ">
          <div className="absolute cross top-[28.5vh] right-0.5 w-4 h-4 flex justify-center items-center">
            +
          </div>
          <div className="absolute cross bottom-0 right-0.5 w-4 h-4 flex justify-center items-center">
            +
          </div>
        </div>
        <div className="flex flex-col justify-center pt-[40px] md:w-1/2 mb-auto">
          <h1 className="text-[1rem] tracking-[0.2px] flex gap-3 items-center">
            <Image
              src={"/giflog.gif"}
              alt="AARKYV STUDIOS logo"
              width={24}
              height={24}
              className="invert"
            />
            Aarkyv Studios
          </h1>
          <button className="p-1 px-3 tracking-[0.2px] w-[240px] text-[0.83rem] font-[480] flex items-center justify-between mt-[8px] border border-[#333] clip">
            Get in touch <Image src="/arrow.svg" alt="" width={7} height={7} />
          </button>
        </div>
        <div className="absolute bottom-4 font-[450] left-4 flex items-center gap-3 lowercase">
          <Image src="/scrollArrow.svg" alt="" width={15} height={15} />

          <span className="scroll">Scroll down for more</span>
        </div>
      <HeroVideo/>
      </div>

      {/* Clients Section */}
      <div className="container flex flex-col md:flex-row h-1/5 mt-10">
        <h2>clients</h2>

        <div className="flex flex-col justify-center items-center md:w-1/2">
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <div
              className="bg-gray-100 p-4 rounded-lg cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              Case Study 1
            </div>

          </div>
        </div>
        <Modal
          title="Case Study"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Modal Content</p>
        </Modal>
      </div>

      {/* Contact Section */}
      <div className="flex flex-row h-[100vh]">
        <div className="flex flex-col justify-center items-center w-1/2">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />

            <label htmlFor="file">Attach File:</label>
            <input type="file" id="file" name="file" />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
