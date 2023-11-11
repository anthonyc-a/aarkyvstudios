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
import ProjectModal from "./components/project";
import Timeline from "./components/timeline";
import CustomTimeline from "./components/timeline";
import About from "./components/about";
import Faq from "./components/FAQ";
import useFrictionScroll from "./hooks/useFrictionScroll";
import Scrollbar from "./components/scrollbar";

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

  const scrollRef = useFrictionScroll();

  return (
    <div
      ref={scrollRef}
      style={{ height: "100%", overflow: "auto" }}
      className="relative w-fill flex flex-col items-center"
    >
      <section id="home" className="container overflow-hidden">
         <div className="scrollbar">
          <div className="scrollbar-inner"></div>
        </div> 
        <div className="fixed bottom-0 w-full h-1/4 bg-gradient-to-t from-[#00000046] to-transparent"></div>

        <div className="subscribe absolute bottom-10 left-[12%]">
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
              width={12}
              height={12}
              className="absolute top-[12px] left-0"
            />
          </div>
        </div>
        <Hero />
        <div className="absolute links   flex items-center hover:opacity-100 gap-6 top-[120px] right-0 font-semibold text-[0.7rem]">
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
    
      </section>

      <section id="clients" className="container">
        <div className="p-12 relative px-20">
          <div className="flex">
            <AccentHeaderOne text="Projects" />
          </div>

          <h2>Our Clients</h2>
          <p className="text-[0.72rem] mt-2 text-[#999]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <div className="grid relative mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-black">
            {gridItems.map((item: any, index: any) => (
              <div
                key={index}
                className={`${item.bgColor} project click hover:brightness-75 relative p-6 flex items-center gap-10`}
                onClick={() => handleOpenModal(item.content)} // pass project information to handleOpenModal function
              >
                <Image src={item.src} alt={item.alt} width={200} height={200} />
                <div className="relative">
                  <h3>{item.title}</h3>
                  <p className="text-[#666] font-[420]">{item.text}</p>
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
      </section>

      <section id="about" className="container">
        <div className="px-[120px]">
          <div className="flex">
            <AccentHeaderOne text="About" />
          </div>

          <h2>ABOUT US</h2>
          <About />
        </div>
      </section>

      <section id="research" className="container">
        <div className="px-12">
          <div className="flex">
            <AccentHeaderOne text="Projects" />
          </div>
          <h2>Research</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Research />
        </div>
      </section>

      <section id="services" className="container overflow-hidden">
        <div className="px-20 ">
          <div className="flex">
            <AccentHeaderOne text="Services" />
          </div>
          <h2>Services & FAQ</h2>

          <div className="w-full flex justify-between mt-4 gap-24">
            <Services />
            <Faq />
          </div>
        </div>
      </section>

      <section id="contact" className="container">
        <h2>CONTACT</h2>
      </section>

      <ProjectModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default Home;
