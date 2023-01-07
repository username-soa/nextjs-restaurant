import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useInView, useMotionValue } from "framer-motion";
import NewsLetterForm from "../forms/NewsLetterForm";

const delayedAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};
const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const NewsLetterSection = ({ handleSubmit }) => {
  const ref = useRef(null);
  const divX = useMotionValue(0);
  const divY = useMotionValue(0);
  const divSlowX = useMotionValue(0);
  const divSlowY = useMotionValue(0);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 100);
      cursorY.set(e.clientY - 400);
      divX.set(((window.innerWidth - e.pageX) * 2.5) / 100);
      divY.set(((window.innerHeight - e.pageY) * 2.5) / 100);
      divSlowX.set(((window.innerWidth - e.pageX) * -1.5) / 100);
      divSlowY.set(((window.innerHeight - e.pageY) * -1.5) / 100);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <Container ref={ref}>
      <motion.h1
        initial="hidden"
        variants={childAnimations}
        animate={isInView ? "show" : "hidden"}
        className="news-letter-h1"
      >
        rester connecté
      </motion.h1>
      <NewsLetterForm
        isInView={isInView}
        animations={delayedAnimations}
        handleSubmit={handleSubmit}
      />
      <motion.div
        style={{
          translateX: divX,
          translateY: divY,
        }}
        className="underlay-div underlay-1"
      />
      <motion.div
        style={{
          translateX: divSlowX,
          translateY: divSlowY,
        }}
        className="underlay-div underlay-2"
      />
      <motion.div
        className="mouse-tracker"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
    </Container>
  );
};

export default NewsLetterSection;

const Container = styled.section`
  gap: 2em;
  margin: 1em 0;
  height: 300px;
  display: flex;
  z-index: 2;
  padding: 2em 1em;
  overflow: hidden;
  border-radius: 15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: saturate(180%) blur(8px);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
  }
  .news-letter-h1 {
    font-size: 5rem;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(-100deg, #555, rgba(0, 0, 0, 0.8));
    width: fit-content;
    margin: 0 auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .underlay-div {
    aspect-ratio: 1/1;
    position: absolute;
  }
  .underlay-1 {
    width: 30%;
    top: 30%;
    left: 0%;
    opacity: 0.4;
    background: radial-gradient(circle, #3c2a21 0, rgba(161, 252, 70, 0) 71%);
  }
  .underlay-2 {
    width: 30%;
    right: -50px;
    opacity: 0.4;
    bottom: -10px;
    background: radial-gradient(circle, #1a120b 0, rgba(161, 252, 70, 0) 71%);
  }
  .mouse-tracker {
    width: 20%;
    top: 0;
    left: 0;
    opacity: 0.4;
    z-index: 1;
    aspect-ratio: 1/1;
    position: absolute;
    pointer-events: none;
    border-radius: 9999px;
    background: radial-gradient(circle, #9f8772 0, rgba(161, 252, 70, 0) 71%);
  }

  @media only screen and (max-width: 1200px) {
    .news-letter-h1 {
      font-size: 4rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .news-letter-h1 {
      font-size: 2.5rem;
    }
    .underlay-1 {
      top: 50%;
    }
    .underlay-2 {
      width: 100px;
      bottom: unset;
      top: 40%;
      right: 0;
    }
  }
  @media only screen and (max-width: 500px) {
    .news-letter-h1 {
      font-size: 1.75rem;
    }
  }
`;
