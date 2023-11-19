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
      {show && (

        <div className="cookies rounded-md  clip bg-[#fff] grow backdrop-blur md:whitespace-nowrap fixed bottom-3 md:bottom-8 left-2 md:right-8 border hover:border-[#aaa] border-[#000]">
          <div className="w-full h-full p-4 flex items-center justify-between">
            <div className="absolute detail top-0 left-0  bg-[#000]"></div>
            <div className="absolute detail top-0 right-0  bg-[#000]"></div>
            <div className="absolute detail bottom-0 left-0  bg-[#000]"></div>
            <div className="absolute detail bottom-0 right-0  bg-[#000]"></div>
            <p className="flex items-center gap-5 txt pr-6 font-[450]">
              <Image src={"/cookie.svg"} alt="" width={19} height={19} />
              This website uses cookies to enhance your experience.
            </p>
            <div className="flex gap-6">
              <span
                className=" underline whitespace-nowrap text-[0.68rem] font-[500] hover:underline"
                onClick={close}
              >
                I understand
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
