import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="relative w-fill flex flex-col items-center">
      <section className="container">
        <div className="hero flex items-center gap-3">
          <Image src={"/logo.svg"} alt="" width={10} height={10} />
          AARKYV STUDIOS
        </div>
        <span className="absolute bottom-10 left-8 underline">scroll down</span>
      </section>
      <section id="clients" className="container">
        <div className="divide"></div>
        <div className="p-16 my-20">
          <h2>CLIENTS</h2>
        </div>
        <div className="divide"></div>
      </section>
      <section id="services" className="container">
        <div className="divide"></div>
        <div className="p-16">
          <h2>SERVICES</h2>
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
    </div>
  );
};

export default Home;
