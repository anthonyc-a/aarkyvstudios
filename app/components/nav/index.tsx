"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimation(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showNav && (
        <ul
          className={`${
            styles.nav
          } text-[0.66rem] 3xl:text-[0.75rem] top-[8rem] md:top-[13rem] left-6 md:left-[4rem] flex flex-col gap-y-6 ${
            initialAnimation ? styles.initialAnimation : ""
          }`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      {!showNav && (
        <ul
          className={`${styles.nav} ${
            styles.reverse
          } text-[0.66rem] 3xl:text-[0.75rem] top-[8rem] md:top-[13rem] left-6 md:left-[4rem] flex flex-col gap-y-6 ${
            initialAnimation ? styles.initialAnimation : ""
          }`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
