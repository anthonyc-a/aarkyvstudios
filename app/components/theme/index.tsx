"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
    const handleChange = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleToggle = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    document.body.classList.toggle("dark", newIsDarkMode);
    if (newIsDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed flex gap-2 p-2.5 border border-[#333] rounded-md hover:border-[#999] w-fit left-8 md:right-0 bottom-8 md:left-12 z-50">
      <Image className="" src={"/moon.svg"} alt="" width={11} height={11} onClick={handleToggle} />
    </div>
  );
};

export default ThemeToggle;
