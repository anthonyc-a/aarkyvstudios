"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import MarqueeCpt from "../components/marquee";

const Page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [videoSource, setVideoSource] = useState("");

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

  const handleVideoLoadedData = () => {
    setIsVideoLoading(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const cachedVideoSource = localStorage.getItem("videoSource");
    if (cachedVideoSource) {
      setVideoSource(cachedVideoSource);
    } else {
      fetch(
        "https://pininfarina.it/wp-content/uploads/2021/04/Nuovo-video3.mp4"
      )
        .then((response) => response.blob())
        .then((blob) => {
          const videoUrl = URL.createObjectURL(blob);
          setVideoSource(videoUrl);
          localStorage.setItem("videoSource", videoUrl);
        });
    }
  }, []);

  return (
    <div className="flex flex-col">
      <MarqueeCpt />
      {/* Hero Section */}
      <div
        className="flex flex-col-reverse lg:flex-row h-[85vh] p-5 mt-1"
      >
        <div className="absolute font-extralight text-[16px] bottom-24 left-[50%] -translate-x-1/2 w-[90%] h-full ">
          <div className="absolute cross top-[28vh] right-1 w-4 h-4 flex justify-center items-center">
            +
          </div>
          <div className="absolute cross bottom-20 right-1 w-4 h-4 flex justify-center items-center">
            +
          </div>
        </div>
        <div className="flex flex-col justify-center pt-[32px] md:w-1/2 mb-auto">
          <h1 className="text-[1.05rem] tracking-[0.6px] flex gap-3 items-center">
            <Image
              src={"/giflog.gif"}
              alt="AARKYV STUDIOS logo"
              width={22}
              height={22}
              className="invert"
            />
            Aarkyv Studios
          </h1>
          {/* <p className="mt-0.5 tracking-[0.3px] font-[360] text-[#555] text-[0.93rem]  lowercase">Visually stunning multimedia</p> */}
          <button className="p-1 px-3 tracking-[0.2px] w-[240px] text-[0.9rem] font-[480] flex items-center justify-between mt-[10px] border border-[#333] clip">
            Learn more <Image src="/arrow.svg" alt="" width={8} height={8} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3 lowercase">
          <Image src="/scrollArrow.svg" alt="" width={15} height={15} />

          <span>scroll down</span>
        </div>
        <div className="flex relative flex-col justify-center h-[50vh] items-center md:w-1/2">
          <Image src="/pause.svg" alt="" width={8} height={8}className="absolute top-6 right-14 z-50"/>
          <video
            className={`h-full object-cover clip-lg mr-14 z-10 bg-gray-300}`}
            loop={true}
            muted={true}
            autoPlay={true}
            playsInline={true}
        
          >
            <source
              src="/vid.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Clients Section */}
      <div className="flex flex-col md:flex-row h-1/5">
      <h2>clients</h2>

        <div className="flex flex-col justify-center items-center md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="bg-gray-200 p-4 rounded-lg cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              Case Study 1
            </div>
            <div
              className="bg-gray-200 p-4 rounded-lg cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              Case Study 2
            </div>
            <div
              className="bg-gray-200 p-4 rounded-lg cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              Case Study 3
            </div>
            <div
              className="bg-gray-200 p-4 rounded-lg cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              Case Study 4
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
      <div className="flex flex-row h-1/5">
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
