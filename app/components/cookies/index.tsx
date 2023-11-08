'use client'

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

  return (
    <>
      {!show && (
        <div className="cookies bg-[#080808c0] grow w-full max-w-[620px] md:whitespace-nowrap fixed bottom-4 md:bottom-8 right-0 md:right-8 border hover:border-[#555] border-[#222]">
          <div className="w-full h-full p-6 flex items-center justify-between">
            <p className="flex items-center gap-3 font-[450]">
              <Image src={"/cookie.svg"} alt="" width={19} height={19} />
              This website uses cookies to enhance your experience.
            </p>
            <div className="flex gap-6">
              <span
                className="underline-anim underline hover:underline"
                onClick={close}
              >
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
