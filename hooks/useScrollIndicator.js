import { useState, useEffect, useRef } from "react";

const useScrollIndicator = () => {
  const padding = useRef();
  const boxShadow = useRef();
  const backgroundTransparency = useRef();
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;

    if (backgroundTransparencyVar < 1) {
      let paddingVar = 40 - backgroundTransparencyVar * 20;
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      padding.current = paddingVar;
      boxShadow.current = boxShadowVar;
      backgroundTransparency.current = backgroundTransparencyVar;
    }
  }, [clientWindowHeight]);

  return {
    padding: padding.current,
    boxShadow: boxShadow?.current,
    backgroundTransparency: backgroundTransparency?.current,
  };
};

export default useScrollIndicator;
