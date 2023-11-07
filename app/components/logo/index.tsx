"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Logo = () => {
  const [showLogo, setShowLogo] = useState(false);

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

  return (
    <div
      className={`fixed top-10 left-12 mix-blend-difference z-[1000] font-extrabold gap-3 ${
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
    </div>
  );
};

export default Logo;
