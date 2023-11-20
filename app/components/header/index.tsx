"use client";

import React, { useState, useEffect, useRef } from "react";
import ContactButton from "../contact";
import Systems from "../systems";
import ThemeToggle from "../theme";
import Image from "next/image";
import { gsap } from "gsap";
import Nav from "../nav";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolledPast100vh, setIsScrolledPast100vh] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false); // Step 1: Add state variable for mobile nav visibility
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isAtTop = currentScrollPos === 0;
      const isAtBottom =
        currentScrollPos + window.innerHeight >=
        document.documentElement.scrollHeight;

      setIsHeaderVisible(!isScrolledDown || isAtTop || isAtBottom);
      setIsScrolledPast100vh(currentScrollPos > window.innerHeight / 1.5);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    gsap.from(logoRef.current, { opacity: 0, duration: 1, delay: 0.5 });
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible); // Step 2: Toggle mobile nav visibility
  };

  return (
    <header
      className={`fixed  top-0 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-[1280px] p-4 flex justify-between items-center transition-transform duration-200 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {isScrolledPast100vh ? (
        <div className="logo" ref={logoRef}>
          <Image
            src={"/giflog.gif"}
            alt="AARKYV STUDIOS logo"
            width={28}
            height={28}
            className="invert"
          />
        </div>
      ) : (
        <ContactButton />
      )}
      <ul className="hidden md:flex lowercase gap-8 items-center text-[0.85rem]">
        <li>home</li>
        <li>clients</li>
        <li>research</li>
        <li>contact</li>
      </ul>
      <div className="flex items-center gap-6 md:gap-8">
        <Systems />
        <div
          className="menu md:hidden  text-white font-light w-8 h-8 flex justify-center items-center text-2xl leading-[1] rounded-[6px] bg-[#111] hover:bg-blue-500 clip-sm"
          onClick={toggleMobileNav} // Step 3: Add onClick event handler to toggle mobile nav
        >
          <div className="burger w-10 h-10 flex flex-col gap-[4px]  justify-center items-center">
            <span className="w-1/3 h-[1px] rounde-sm bg-white"></span>
            <span className="w-1/3 h-[1px] rounded-sm bg-white"></span>
          </div>
        </div>
        <ThemeToggle />
      </div>
      {isMobileNavVisible && ( // Step 3: Conditionally render mobile nav based on visibility state
        <div className="mobile-nav fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 backdrop-blur -z-10 flex justify-center items-center">
          <Nav/>
        </div>
      )}
    </header>
  );
};

export default Header;
