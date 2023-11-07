"use client";

import Image from "next/image";
import React, { useState } from "react";

const SendMail = () => {
  return (
    <div className="fixed flex gap-2 w-fit top-10 right-8 md:top-16 md:right-12 z-50">
      <Image src={"/moon.svg"} alt="" width={13} height={13} />
    </div>
  );
};

export default SendMail;
