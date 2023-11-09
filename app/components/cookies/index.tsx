"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Cookies = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setShow(false);
    }
  }, []);

  const close = () => {
    setShow(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      localStorage.removeItem("cookiesAccepted");
    }
  }, []);

  return (
    <>
     
    </>
  );
};

export default Cookies;
