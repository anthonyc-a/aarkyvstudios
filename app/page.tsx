'use client'

import Image from "next/image";
import React from "react";
import { useState } from "react";
import AccentHeaderOne from "./components/accent";

  const gridItems = [
    {
      src: "/img2.png",

      alt: "Item 1",
      title: "Double",
      text: "Marketing Agency",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img1.png",

      alt: "Item 2",
      title: "Archvizual",
      text: "3D Design Studio",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img3.png",
      alt: "Item 3",
      title: "Verve",
      text: "Streaming Platform",
      bgColor: "bg-gray-100",
    },
    {
      src: "/img4.png",
      alt: "Item 4",
      title: "Snapi",
      text: "Marketing Tool",
      bgColor: "bg-gray-100",
    },
  ];


  const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // add state for controlling modal

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="relative w-fill flex flex-col items-center">
        <section className="container">
          <div className="hero flex items-center gap-3">
            <Image src={"/logo.svg"} alt="" width={10} height={10} />
            AARKYV STUDIOS
          </div>
        </section>
        <section id="clients" className="container">
          <div className="divide"></div>
          <div className="p-12 relative px-6 mb-20">
          <AccentHeaderOne text="Recent projects" />
            <h2>Our Clients</h2>
            <div className="grid relative mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
              {gridItems.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`${item.bgColor} hover:brightness-75 rounded-sm relative p-8 flex items-center gap-8`}
                  onClick={handleOpenModal}
                >
                  <Image src={item.src} alt={item.alt} width={200} height={200} />
                  <div className="relative">
                    <h3>{item.title}</h3>
                    <p className="text-[#666] font-500">{item.text}</p>
                  
                  </div>
                  <Image
                      src="/arrow.svg"
                      alt="arrow"
                      width={10}
                      height={10}
                      className="absolute bottom-5 right-5"
                    />
                </div>
              ))}
            </div>
          </div>
          <div className="divide"></div>
        </section>
        <section id="services" className="container">
          <div className="divide"></div>
          <div className="p-16">
            <h2>SERVICES</h2>
            <button onClick={handleOpenModal}>Open Modal</button> {/* add button to open modal */}
          </div>
          <div className="divide"></div>
        </section>
        <section id="about" className="container">
          <h2>ABOUT</h2>
        </section>
        <section id="research" className="container">
          <h2>RESEARCH</h2>
        </section>
        <section id="contact" className="container">
          <h2>CONTACT</h2>
        </section>

        {isModalOpen && (
          <div className="fixed z-[500] top-0 left-0 w-full h-full bg-black text-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-[2px]">
              <h3>Modal Content</h3>
              <button onClick={handleCloseModal}>Close Modal</button> {/* add button to close modal */}
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Home;
