import React from "react";
import styles from "./index.module.scss";

const Nav = () => {
  return (
    <ul
      className={`${styles.nav} flex flex-col gap-y-6`}
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
