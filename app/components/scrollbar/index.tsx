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
    <div className="fixed bottom-0  left-0 w-full bg-transparent h-[2px] mix-blend-difference">
      <div
        className="h-full bg-[#e9e9e9]"
        style={{ width: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default Scrollbar;
