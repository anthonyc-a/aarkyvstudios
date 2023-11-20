"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import MarqueeCpt from "../components/marquee";
import HeroVideo from "../components/heroVideo";
import AccentHeaderOne from "../components/accent";
import Research from "../components/research";

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
      <div className="flex flex-col-reverse pt-[67px] md:pt-0 md:flex-row md:items-center h-[100vh]  p-5 ">
        <div className="absolute font-extralight text-[14px] bottom-24 left-[50%] -translate-x-1/2 w-[90%] h-full ">
          <div className="absolute cross top-[28.5vh] right-2 md:right-[unset] md:left:0 w-4 h-4 flex justify-center items-center">
            +
          </div>
          <div className="absolute cross bottom-0 right-2 md:right-[unset] md:left:0 w-4 h-4 flex justify-center items-center">
            +
          </div>
        </div>
        <div className="flex flex-col justify-center pt-[32px] md:pt-0 md:ml-20 md:translate-x-[15%] md:w-1/2 mb-auto md:mb-0">
          <h1 className="text-[0.99rem] tracking-[0px] flex gap-4 items-center">
            <Image
              src={"/giflog.gif"}
              alt="AARKYV STUDIOS logo"
              width={23}
              height={23}
              className="invert"
            />
            Aarkyv Studios
          </h1>
          <button className="p-1 px-3 rounded-md tracking-[0.2px] w-[240px] text-[0.84rem] font-[480] flex items-center justify-between mt-[7px] border border-[#333] clip">
            Get in touch <Image src="/arrow.svg" alt="" width={7} height={7} />
          </button>
        </div>
        <a
          href="#clients"
          className="absolute bottom-4 p-1 pb-0.5 rounded-2xl  font-[500] text-[0.8rem] lowercase  left-4 flex items-center gap-2 "
        >
          <Image src="/scrollArrow.svg" alt="" width={14} height={14} />

          <span className="scroll ">scroll down</span>
        </a>
        <HeroVideo />
      </div>

      <div className="p-4 font-[500] text-[0.7rem]">
        branding — marketing
        <br />
        SEO <br />
        UI/UX Design <br />
        Web & Mobile Development <br />
        3d visualisation <br />
      </div>

     

      <AccentHeaderOne text="work" />

      <div id="clients" className="p-4 flex flex-col md:flex-row h-1/5">
        <h2 className="leading-6">Our Clients</h2>
        <p className="lowercase leading-5 text-[#666] text-[0.85rem] ">
          some of our most recent clients:
        </p>

        <div className="flex flex-col justify-center items-center md:w-1/2 mt-2">
          <div className="grid mt-4 md:grid-cols-2 gap-4 w-full">
            <div
              className="border border-black rounded-md clip flex items-center gap-6 p-4 cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              <Image src="/img2.png" alt="" width={120} height={120} />
              <div className="text-[0.72rem]">
                <h3>Double</h3>
                <span className="text-gray-500">Marketing Agency</span>
              </div>
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={7}
                height={7}
                className="absolute bottom-5 right-5"
              />
            </div>
            <div
              className="border border-black rounded-md clip flex items-center gap-6 p-4 cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              <Image src="/img3.png" alt="" width={120} height={120} />
              <div className="text-[0.72rem]">
                <h3>Verve</h3>
                <span className="text-gray-500">Streaming service</span>
              </div>
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={7}
                height={7}
                className="absolute bottom-5 right-5"
              />
            </div>
            <div
              className="border border-black rounded-md clip flex items-center gap-6 p-4 cursor-pointer md:w-1/2 w-full"
              onClick={showModal}
            >
              <Image src="/img1.png" alt="" width={120} height={120} />
              <div className="text-[0.72rem]">
                <h3>Archvizual</h3>
                <span className="text-gray-500">3D artist</span>
              </div>
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={7}
                height={7}
                className="absolute bottom-5 right-5"
              />
            </div>
            <div
            className="border border-black rounded-md clip flex items-center gap-6 p-3 cursor-pointer md:w-1/2 w-full"
            onClick={showModal}
          >
            <Image src="/img4.png" alt="" width={120} height={120} />
            <div className="text-[0.84rem]">
              <h3>Snapi</h3>
              <span className="text-gray-500">Marketing Tool</span>
            </div>
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

     

      <div id="research" className="p-4 mt-10 flex flex-col md:flex-row h-1/5">
        <h2 className="leading-6">Research</h2>
        <p className="lowercase leading-5 text-[#666]  text-[0.85rem] ">
          some research we&apos;ve carried out:
        </p>
        <Research/>
        </div>

      {/* Contact Section */}
      <div className="p-5">
        <h2 className="leading-6">Get in touch</h2>
        <p className="lowercase leading-5 text-[#666] text-[0.85rem] ">
          some of our most recent clients:
        </p>
        <div className="flex mt-6 flex-col justify-center items-center w-1/2">
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
