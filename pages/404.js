import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import img2 from "../assets/gallery/hero-img1.jpg";
import img1 from "../assets/gallery/drinks-img.jpg";
import { motion, useMotionValue } from "framer-motion";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};
const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const Error = () => {
  const divX = useMotionValue(0);
  const divY = useMotionValue(0);
  const divSlowX = useMotionValue(0);
  const divSlowY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e) => {
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
    <Container>
      <div className="not-found-container">
        <div className="error-underlay-container">
          <motion.div
            style={{
              translateX: divSlowX,
              translateY: divSlowY,
            }}
            className="error-underlay-div error-underlay-1"
          />
          <motion.div
            style={{
              translateX: divSlowX,
              translateY: divSlowY,
            }}
            className="error-underlay-div error-underlay-2"
          />
        </div>

        <div className="content-container">
          <motion.div
            animate="show"
            initial="hidden"
            variants={parentAnimations}
            className="error-content"
          >
            <h1 className="error-h1">404</h1>
            <motion.p variants={childAnimations} className="error-p">
              Désolé, il n'y a<br /> rien ici :(
            </motion.p>
            <motion.div variants={childAnimations}>
              <Link href="/" className="error-link">
                Accueil
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              translateX: divX,
              translateY: divY,
            }}
            className="error-image-container image-container-1"
          >
            <Image src={img1} fill placeholder="blur" className="error-image" />
          </motion.div>
          <motion.div
            style={{
              translateX: divX,
              translateY: divY,
            }}
            className="error-image-container image-container-2"
          >
            <Image src={img2} fill placeholder="blur" className="error-image" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  margin: 0 auto;
  width: clamp(70%, 1140px, 90%);
  height: calc(100vh - 110px);
  padding: 2em 0;
  .error-h1 {
    font-size: 150px;
    line-height: 150px;
    letter-spacing: 0.015em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textColor};
    filter: saturate(180%) blur(6px);
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
      filter: saturate(100%) blur(3px);
    }
  }
  .error-p {
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    color: ${({ theme }) => theme.colors.textColor};
  }
  .error-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 205px;
    min-height: 52px;
    border: 2px solid #0f0f11;
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 25px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #0f0f11;
    }
  }
  .not-found-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .error-underlay-container,
  .content-container {
    border-radius: 12px;
    overflow: hidden;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .error-image-container,
  .error-underlay-div {
    position: absolute;
  }
  .error-image-container {
    width: 200px;
    aspect-ratio: 1/1.5;
    border-radius: 12px;
    overflow: hidden;
    &:hover {
      .error-image {
        transform: scale(1.05);
      }
    }
  }
  .image-container-1 {
    top: 30%;
    right: 20px;
  }
  .image-container-2 {
    bottom: -20%;
    left: 20%;
  }
  .error-image {
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
  }
  .error-underlay-div {
    aspect-ratio: 1/1;
  }
  .error-underlay-1 {
    width: 200px;
    top: -20px;
    left: -20px;
    opacity: 0.3;
    background: radial-gradient(circle, #3c2a21 0, rgba(161, 252, 70, 0) 71%);
  }
  .error-underlay-2 {
    width: 30%;
    right: -50px;
    opacity: 0.4;
    bottom: -50px;
    background: radial-gradient(circle, #1a120b 0, rgba(161, 252, 70, 0) 71%);
  }

  .content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    transition: box-shadow 0.3s ease;
    backdrop-filter: saturate(180%) blur(3px);
    .error-content {
      width: fit-content;
      margin: 0 0 0 auto;
      gap: 2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &:hover {
      box-shadow: ${({ theme }) => theme.colors.boxShadow};
    }
  }
  @media only screen and (max-width: 1400px) {
    width: unset;
    margin: 0 4em;
  }
  @media only screen and (max-width: 1200px) {
    margin: 0 2em;
  }
  @media only screen and (max-width: 1100px) {
    .content-container {
      grid-template-columns: 1fr;
      .error-content {
        margin: 0 auto;
        align-items: center;
      }
    }
    .error-image-container {
      width: 150px;
    }
    .image-container-1 {
      top: -20px;
      right: -15px;
    }
    .image-container-2 {
      bottom: -5%;
      left: -15px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0 1em;
    .error-image-container {
      width: 80px;
    }
    .error-h1 {
      font-size: 6rem;
    }
    .error-p {
      font-size: 28px;
      line-height: 40px;
    }
    .error-link {
      width: 130px;
    }
  }
`;
