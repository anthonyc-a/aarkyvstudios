"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { Modal } from "antd"; // import Modal component from Ant Design
import AccentHeaderOne from "./components/accent";
import Hero from "./components/hero";
import Services from "./components/services";
import Research from "./components/research";
import { VisibilityContext } from "./context/visibilityCOntext";

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
  const [modalContent, setModalContent] = useState({}); // add state for modal content

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
      <section id="home" className="container">
        <Hero />
      </section>

      <section id="clients" className="container">
        <div className="divide"></div>
        <div className="p-12 relative px-6 mb-12">
          <AccentHeaderOne text="Projects" />
          <h2>Our Clients</h2>
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
          <Services />
        </div>
        <div className="divide"></div>
      </section>

      <section id="about" className="container">
        <div className="divide"></div>
        <div className="p-16">
          <AccentHeaderOne text="About us" />
          <h2>ABOUT US</h2>
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
          <Image src={modalContent.image} alt={modalContent.title} width={400} height={400} />
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
