"use client";

import Image from "next/image";
import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="fixed flex gap-2 p-2.5 w-fit rounded-full top-10 right-8 md:top-[unset] md:right-0 md:bottom-10 md:left-12 z-50">
      <Image className="" src={"/moon.svg"} alt="" width={13} height={13} />
    </div>
  );
};

export default ThemeToggle;
