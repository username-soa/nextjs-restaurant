import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.3 },
  },
};

const childAnimations = {
  hidden: { opacity: 0, y: "100px" },
  show: {
    opacity: 1,
    y: 0,
  },
};

const PageTitleCard = ({ title }) => {
  const divX = useMotionValue(0);
  const divY = useMotionValue(0);
  const divSlowX = useMotionValue(0);
  const divSlowY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = (e) => {
      divX.set(((window.innerWidth - e.pageX) * 3) / 100);
      divY.set(((window.innerHeight - e.pageY) * 3) / 100);
      divSlowX.set(((window.innerWidth - e.pageX) * -1.5) / 100);
      divSlowY.set(((window.innerHeight - e.pageY) * -1.5) / 100);
    };
    window.addEventListener("mousemove", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleScroll);
    };
  }, []);

  return (
    <Container initial="hidden" animate="show" variants={fadeUp}>
      <motion.h2 variants={childAnimations} className="page-title-card-h2">
        {title}
      </motion.h2>
      <motion.div
        aria-hidden="true"
        className="underlay-div underlay-1"
        style={{
          translateX: divX,
          translateY: divY,
        }}
      ></motion.div>
      <motion.div
        aria-hidden="true"
        className="underlay-div underlay-2"
        style={{
          translateX: divSlowX,
          translateY: divSlowY,
        }}
      ></motion.div>
      <motion.div
        aria-hidden="true"
        className="underlay-div underlay-3"
        style={{
          translateX: divX,
          translateY: divY,
        }}
      ></motion.div>
    </Container>
  );
};

export default PageTitleCard;

const Container = styled(motion.div)`
  height: 300px;
  margin: 2em 0;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    transition: all 0.15s ease;
    z-index: -1;
  }
  &:hover {
    .underlay-div {
      opacity: 0.4;
    }
    &:after {
      background: #fafafa;
    }
  }

  .page-title-card-h2 {
    margin: 0;
    font-size: 2rem;
    background: linear-gradient(300deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .underlay-div {
    position: absolute;
    height: 50%;
    aspect-ratio: 1/1;
    background: radial-gradient(
      circle,
      rgb(152, 105, 76) 0,
      rgba(161, 252, 70, 0) 71%
    );
    border-radius: 9999px;
    transition: transform, opacity 0.3s ease-in-out;
    opacity: 0.25;
  }
  .underlay-1 {
    top: 0;
    left: 50px;
  }
  .underlay-2 {
    bottom: -10px;
    right: 0px;
  }
  .underlay-3 {
    bottom: 10px;
    right: 50%;
  }
  @media only screen and (max-width: 768px) {
    .page-title-card-h2 {
      font-size: 1.5rem;
    }
  }
`;
