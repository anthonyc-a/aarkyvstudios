import Image from 'next/image'
import React from 'react'

const Cookies = () => {
  return (
    <div className="cookies mix-blend-difference grow w-full max-w-[580px] md:whitespace-nowrap fixed bottom-4 md:bottom-10 right-0 md:right-10 border border-[#222]">
    <div className="w-full h-full p-6 flex items-center justify-between">
      <p className="flex items-center gap-2 font-[450]">
      <Image src={"/cookie.svg"} alt="" width={17} height={17} />
        This website uses cookies to improve your experience.
      </p>
      <div className="flex gap-6">
        <span className="underline-anim">close</span>
      </div>
    </div>
  </div>
  )
}

export default Cookies