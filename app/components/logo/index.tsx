"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Logo = () => {
  const [showLogo, setShowLogo] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= window.innerHeight / 2) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showLogo) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: .5 }
      );
    }
  }, [showLogo]);

  return (
    <Link href="#"
      ref={logoRef}
      className={`fixed top-10 left-12 opacity-0 mix-blend-difference z-[1000] font-extrabold gap-3 ${
        showLogo ? "flex" : "hidden"
      }`}
    >
      <Image
        src={"/logo.svg"}
        alt="AARKYV STUDIOS logo"
        width={10}
        height={10}
      />
      AARKYV STUDIOS
    </Link>
  );
};

export default Logo;

