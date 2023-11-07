import React from "react";
import styles from "./index.module.scss";

const Nav = () => {
  return (
    <ul
      className={`${styles.nav} text-[0.68rem] md:text-[0.7rem] 3xl:text-[0.75rem] top-[8rem] md:top-[10rem] left-6 md:left-[4rem] flex flex-col gap-y-6`}
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
  );
};

export default Nav;
