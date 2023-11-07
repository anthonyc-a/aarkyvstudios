'use client'

import React, { useRef } from "react";

const Cursor: React.FC<any> = ({
}: any): JSX.Element => {
  const cursorRef = useRef<any>(null);

  const cursorFunction = () =>
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef?.current?.clientWidth / 2;
      const mouseY = clientY - cursorRef?.current?.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`;
      cursorRef.current.style.opacity = 1;
    });

  React.useEffect(() => {
    cursorFunction();
  }, [cursorRef]);

  return (
    <div className="cursor z-[9999]" ref={cursorRef}>
  
    </div>
  );
};

export default Cursor;