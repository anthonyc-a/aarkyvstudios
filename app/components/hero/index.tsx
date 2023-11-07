// Hero.tsx
import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { VisibilityContext } from "../../context/visibilityCOntext";

const Hero: React.FC = () => {
  const { isVisibleRef, setIsVisible } = useContext(VisibilityContext);
  const ref = useRef<HTMLDivElement>(null);
  

  // ... rest of the useOnScreen custom hook implementation
  // Make sure to update the custom hook to TypeScript as well

  useEffect(() => {
    setIsVisible(isVisibleRef.current);
  }, [isVisibleRef, setIsVisible]);

  return (
    <div className="hero flex items-center gap-3" ref={ref}>
      <Image
        src={"/logo.svg"}
        alt="AARKYV STUDIOS logo"
        width={10}
        height={10}
      />
      AARKYV STUDIOS
    </div>
  );
};

export default Hero;
