'use client'

// VisibilityContext.tsx
import React, { createContext, useRef, Dispatch, SetStateAction } from 'react';

interface VisibilityContextProps {
  isVisibleRef: React.MutableRefObject<boolean>;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

// Initialize the context with a default value
export const VisibilityContext = createContext<VisibilityContextProps>({
  isVisibleRef: { current: false },
  setIsVisible: () => {}, // This is a no-op function
});

export const VisibilityProvider: any= ({ children }:any) => {
  const isVisibleRef = useRef<boolean>(false);

  const setIsVisible:any = (isVisible: boolean) => {
    isVisibleRef.current = isVisible;
  };

  return (
    <VisibilityContext.Provider value={{ isVisibleRef, setIsVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
};
