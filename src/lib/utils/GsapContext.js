import { createContext, useContext, useEffect } from 'react';
import { gsap } from 'gsap';

const GsapContext = createContext(null);

export const useGsap = () => {
  return useContext(GsapContext);
};

export const GsapProvider = ({ children }) => {
  useEffect(() => {
    // Initialize GSAP or any other setup if needed
  }, []);

  return <GsapContext.Provider value={{ gsap }}>{children}</GsapContext.Provider>;
};

export default GsapContext;
