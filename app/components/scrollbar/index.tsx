"use client";

import React, { useState, useEffect } from "react";

const Scrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = (position / maxScroll) * 100;
      setScrollPosition(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/3  right-10 w-[1px] bg-[#222] h-[140px] mix-blend-difference">
      <div
        className="w-full bg-[#f9f9f9]"
        style={{ height: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default Scrollbar;
