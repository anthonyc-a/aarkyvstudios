"use client";

import React, { useState, useEffect, useRef } from "react";
import ContactButton from "../contact";
import Systems from "../systems";
import ThemeToggle from "../theme";
import Image from "next/image";
import { gsap } from "gsap";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolledPast100vh, setIsScrolledPast100vh] = useState(false);
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

  return (
    <header
      className={`fixed bg-white top-0 left-0 z-[9999] w-full p-4 flex justify-between items-center transition-transform duration-200 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {isScrolledPast100vh ? (
        <div className="logo" ref={logoRef}>
          <Image
            src={"/giflog.gif"}
            alt="AARKYV STUDIOS logo"
            width={32}
            height={32}
            className="invert"
          />
        </div>
      ) : (
        <ContactButton />
      )}
      <div className="flex items-center gap-6">
        <Systems />
        <div className="menu  text-white font-light w-8 h-8 flex justify-center items-center text-2xl leading-[1] rounded-[6px] bg-[#111] hover:bg-blue-600 clip-sm">
          <div className="burger w-10 h-10 flex flex-col gap-[4px]  justify-center items-center">
            <span className="w-1/3 h-[1px] rounde-sm bg-white"></span>
            <span className="w-1/3 h-[1px] rounded-sm bg-white"></span>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
