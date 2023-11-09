"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { Modal } from "antd"; // import Modal component from Ant Design
import AccentHeaderOne from "./components/accent";
import Hero from "./components/hero";
import Services from "./components/services";
import Research from "./components/research";
import { VisibilityContext } from "./context/Visibility";
import Particles from "./components/particles";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const gridItems = [
  {
    src: "/img2.png",
    alt: "Item 1",
    title: "Double",
    text: "Marketing Agency",
    bgColor: "bg-gray-100",
    content: {
      title: "Double",
      text: "Marketing Agency",
      image: "/img2.png",
      description: "Project information for Double",
    },
  },
  {
    src: "/img1.png",
    alt: "Item 2",
    title: "Archvizual",
    text: "3D Design Studio",
    bgColor: "bg-gray-100",
    content: {
      title: "Archvizual",
      text: "3D Design Studio",
      image: "/img1.png",
      description: "Project information for Archvizual",
    },
  },
  {
    src: "/img3.png",
    alt: "Item 3",
    title: "Verve",
    text: "Streaming Platform",
    bgColor: "bg-gray-100",
    content: {
      title: "Verve",
      text: "Streaming Platform",
      image: "/img3.png",
      description: "Project information for Verve",
    },
  },
  {
    src: "/img4.png",
    alt: "Item 4",
    title: "Snapi",
    text: "Marketing Tool",
    bgColor: "bg-gray-100",
    content: {
      title: "Snapi",
      text: "Marketing Tool",
      image: "/img4.png",
      description: "Project information for Snapi",
    },
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal
  const [modalContent, setModalContent] = useState<any>({}); // add state for modal content

  const { isVisibleRef } = useContext(VisibilityContext);

  console.log("Is Hero visible:", isVisibleRef.current);

  const handleOpenModal = (content: any) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <div className="relative w-fill flex flex-col items-center">
      <section id="home" className="container overflow-hidden">
        <div className="hero-mask"></div>
        <Particles/>


        <div className="subscribe absolute bottom-8 left-[12%]">
          <div className="w-[400px]">
            <input
              type="text"
              placeholder="subscribe for updates"
              className="w-full py-[10px] p-7"
            />
            <div className="absolute top-0 left-0  w-full h-full -z-10" />
            <Image
              src="/arrowRight.svg"
              alt="arrow"
              width={9}
              height={9}
              className="absolute top-[13px] right-0 opacity-60"
            />
            <Image
              src="/airplane.svg"
              alt="arrow"
              width={13}
              height={13}
              className="absolute top-[12px] left-0 opacity-60"
            />
          </div>
        </div>
        <Hero />
        <div className="absolute links text-white   flex items-center hover:opacity-100 gap-6 top-[124px] right-0 font-semibold text-[0.7rem]">
          socials:
          <a href="/">
            i<span>nst</span>g<span>ram</span>
          </a>
          <a href="/">
            g<span>it</span>h<span>ub</span>
          </a>
          <a href="/">
            l<span>inked</span>i<span>n</span>{" "}
          </a>
        </div>
        <a
          href="#clients"
          className="absolute  flex items-center hover:decoration-transparent gap-4 bottom-[38px] right-[13%] text-[0.7rem]"
        >
          <Image
            src="arrowDown.svg"
            alt="arrow down"
            width={15}
            height={15}
            className="border border-[#f9f9f9] rounded-full"
          />
          scroll down
        </a>
        <div className="scrollbar">
          <div className="scrollbar-inner"></div>
        </div>
      </section>

      <section id="clients" className="container">
        <div className="divide"></div>
        <div className="p-12 relative px-6 mb-12">
          <AccentHeaderOne text="Projects" />

          <h2>Our Clients</h2>
          <p className="text-[#ccc] text-[0.75rem] my-1 font-[500]">
            / / 001 — 001
          </p>

          <div className="grid relative mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-black">
            {gridItems.map((item: any, index: any) => (
              <div
                key={index}
                className={`${item.bgColor} project hover:brightness-75 rounded-sm relative p-8 flex items-center gap-8`}
                onClick={() => handleOpenModal(item.content)} // pass project information to handleOpenModal function
              >
                <Image src={item.src} alt={item.alt} width={200} height={200} />
                <div className="relative">
                  <h3>{item.title}</h3>
                  <p className="text-[#666] font-[500]">{item.text}</p>
                </div>
                {item.title === "Snapi" ? (
                  <Image
                    src="/loader.svg"
                    alt="cookie"
                    width={14}
                    height={14}
                    className="absolute bottom-5 right-5"
                  />
                ) : (
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={10}
                    height={10}
                    className="absolute bottom-5 right-5"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="divide"></div>
      </section>

      <section id="services" className="container">
        <div className="divide"></div>
        <div className="p-16">
          <AccentHeaderOne text="Our services" />

          <h2>SERVICES</h2>
          <p className="text-[#ccc] text-[0.75rem] my-2 font-[500]">
            / / 001 — 001
          </p>
          <Services />
        </div>
        <div className="divide"></div>
      </section>

      <section id="about" className="container">
        <div className="divide"></div>
        <div className="p-16">
          <AccentHeaderOne text="About us" />

          <h2>ABOUT US</h2>
          <p className="text-[#ccc] text-[0.75rem] my-4 font-[500]">
            / / 003 — 001
          </p>
          <div className="p-4 ml-auto gap-8 flex flex-col text-2xl font-black w-full max-w-[430px]">
            <Image src="/img5.png" alt="img" width={250} height={250} />
            <h4>
              Crafting visually stunning user experiences through cutting-edge
              design and technology.
            </h4>
          </div>
          <div className="p-4   w-full font-black max-w-[430px]">
            <h4 className="text-2xl">
              Based in London <br /> United Kingdom{" "}
            </h4>
            <p>
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
              Bespoke web design services that focus on creating a visually
              striking and user-friendly online presence for your business.
            </p>
          </div>
          <div className="p-4 ml-auto text-2xl font-black w-full max-w-[430px]">
            OVER 5 years working with small to medium-sized businesses, startups
            and individuals.
          </div>
        </div>
        <div className="divide"></div>
      </section>

      <section id="research" className="container">
        <div className="divide"></div>
        <div className="p-16">
          <AccentHeaderOne text="Blog" />
          <h2>Research</h2>
          <p className="text-[#ccc] text-[0.75rem] my-2 font-[500]">
            / / 001 — 001
          </p>
          <Research />
        </div>
        <div className="divide"></div>
      </section>

      <section id="contact" className="container">
        <h2>CONTACT</h2>
      </section>

      <Modal // replace current modal code with Ant Design Modal component
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        style={{ borderRadius: "2px" }}
      >
        <div className="flex gap-8 items-center">
          <Image
            src={modalContent.image}
            alt={modalContent.title}
            width={400}
            height={400}
          />
          <div>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.text}</p>
            <p>{modalContent.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
