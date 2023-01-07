import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import heroImage1 from "../../assets/gallery/hero-img1.jpg";
import heroImage2 from "../../assets/gallery/hero-img2.jpg";

const SQUARE_WIDTH = 10;
const SQUARE_HEIGHT = 7;

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
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

const HeroSection = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const divX = useMotionValue(0);
  const divY = useMotionValue(0);
  const divSlowX = useMotionValue(0);
  const divSlowY = useMotionValue(0);

  const generateDots = (number) => {
    return [...Array.from(Array(number).keys())].map((item, index) => {
      return (
        <div className="dot-div" key={index}>
          <div className="dot" />
        </div>
      );
    });
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 100);
      cursorY.set(e.clientY - 100);
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
    <Container columns={SQUARE_WIDTH}>
      <motion.div
        className="mouse-tracker"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      <div className="underlay-div underlay-1" />
      <div className="underlay-div underlay-2" />
      <div className="relative-dots">
        {generateDots(SQUARE_WIDTH * SQUARE_HEIGHT)}
      </div>
      <motion.div
        animate="show"
        initial="hidden"
        variants={parentAnimations}
        className="hero-left"
      >
        <motion.h2 variants={childAnimations} className="">
          pourquoi aller en <span className="bg-gradient">ITALIE</span>
          <br /> quand <span className="bg-gradient">L'ITALIE</span> vient a toi
          <span className="dot-color"> ?</span>
        </motion.h2>
        <motion.p variants={childAnimations} className="p">
          Une enseigne prestigieuse, ambassadrice du goût italien s'est
          installée à Marrakech et Agadir.
          <span className="bold-text"> Little Italy </span>
          c'est l'authenticité d'une cuisine Italienne par l'un des plus grand
          Chef du Pays.
          <br /> Chez <span className="bold-text">Little Italy </span> on vous
          proposes une menu riches qui imite la cuisine italienne de la
          meilleure façon possible. consultez notre menu, et si vous avez des
          questions, n'hésitez pas à nous contacter.
        </motion.p>
        <motion.div variants={childAnimations} className="hero-btn-container">
          <Link href={"/menu?category=repas"} className="food-menu-btn">
            Découvrir Notre Menu
          </Link>
          <Link href={"/contact"} className="contact-btn">
            Contacter Nous
          </Link>
        </motion.div>
      </motion.div>
      <div className="hero-right">
        <motion.div
          style={{
            translateX: divX,
            translateY: divY,
          }}
          className="skew-div skew-div-1"
        >
          <div className="transform-div">
            <Image
              src={heroImage1}
              alt="hero-image-1"
              fill
              placeholder="blur"
            />
          </div>
        </motion.div>
        <motion.div
          style={{
            translateX: divSlowX,
            translateY: divSlowY,
          }}
          className="skew-div skew-div-2"
        />
        <motion.div
          className="skew-div skew-div-3"
          style={{
            translateX: divX,
            translateY: divY,
          }}
        >
          <div className="transform-div">
            <Image
              src={heroImage2}
              alt="hero-image-1"
              fill
              placeholder="blur"
            />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  width: 95%;
  z-index: 10;
  padding: 2em;
  margin: 0 auto;
  display: grid;
  grid-gap: 1em;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  height: calc(100vh - 130px);
  transition: box-shadow 0.3s ease;
  grid-template-columns: 1fr 1.5fr;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: saturate(180%) blur(8px);
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
  }
  .bold-text {
    font-weight: 600;
  }
  .mouse-tracker {
    width: 20%;
    top: 0;
    left: 0;
    opacity: 0.5;
    aspect-ratio: 1/1;
    position: absolute;
    pointer-events: none;
    border-radius: 9999px;
    background: radial-gradient(circle, #9f8772 0, rgba(161, 252, 70, 0) 71%);
  }
  .relative-dots {
    position: absolute;
    right: 80px;
    bottom: 30px;
    display: grid;
    z-index: 99;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #000;
      opacity: 0.3;
      transition: transform, opacity 0.3s ease-in-out;
    }
    .dot-div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      &:hover {
        .dot {
          opacity: 1;
          transform: scale(1.8);
        }
      }
    }
  }
  .underlay-div {
    aspect-ratio: 1/1;
    position: absolute;
  }
  .underlay-1 {
    width: 20%;
    top: -50px;
    left: -50px;
    opacity: 0.3;
    background: radial-gradient(circle, #3c2a21 0, rgba(161, 252, 70, 0) 71%);
  }
  .underlay-2 {
    width: 30%;
    right: -50px;
    opacity: 0.4;
    bottom: -50px;
    background: radial-gradient(circle, #1a120b 0, rgba(161, 252, 70, 0) 71%);
  }

  .hero-left {
    gap: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      text-transform: lowercase;
      text-transform: capitalize;
      font-size: 2.25rem;
      color: ${({ theme }) => theme.colors.primary};
      .bg-gradient {
        font-size: 3rem;
        background-image: linear-gradient(
          to top,
          #c4c5c7 0%,
          #dcdddf 52%,
          #ebebeb 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .p {
      color: #000;
      opacity: 0.7;
      font-weight: 500;
      font-size: 1rem;
      text-align: justify;
      line-height: 150%;
    }
    .dot-color {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
  }
  .hero-btn-container {
    gap: 1em;
    display: flex;
    flex-wrap: wrap;
    > a {
      font-size: 14px;
      padding: 10px 18px;
      border-radius: 12px;
    }
    .food-menu-btn {
      color: #fff;
      background: ${({ theme }) => theme.colors.btnBackground};
    }
    .contact-btn {
      color: ${({ theme }) => theme.colors.btnBackground};
      background: #ebebeb;
    }
  }
  .hero-right {
    position: relative;
  }
  .skew-div {
    position: absolute;
  }
  .skew-div-1 {
    top: 35%;
    left: 15%;
    width: 210px;
    height: 300px;
    z-index: 3;
    clip-path: path(
      "M180.926 11.698C198.494 24.2941 208.59 46.6872 208.59 72.7676V225.536C208.59 251.751 198.494 273.982 180.926 286.632C170.99 293.72 159.048 297.489 146.82 297.398C139.156 297.362 131.556 296.015 124.353 293.414L38.0584 262.974C16.4035 255.276 0 225.293 0 192.996V105.334C0 73.1982 16.3765 43.1344 38.0854 35.3561L124.272 4.83478C131.475 2.23448 139.075 0.886996 146.739 0.851398C159.005 0.755042 170.983 4.55506 180.926 11.698Z"
    );
  }
  .skew-div-2 {
    top: 25%;
    left: 38%;
    width: 95px;
    height: 134px;
    z-index: 2;
    background: ${({ theme }) => theme.colors.lightBrown};
    clip-path: path(
      "M82.4007 4.902C90.4016 10.5937 95 20.7123 95 32.4971V101.527C95 113.373 90.4016 123.419 82.4007 129.135C77.8754 132.337 72.4366 134.041 66.8674 133.999C63.3772 133.983 59.9158 133.374 56.6351 132.199L17.3332 118.444C7.4708 114.966 0 101.418 0 86.8237V47.2128C0 32.6917 7.45847 19.107 17.3456 15.5922L56.5981 1.80075C59.8788 0.625772 63.3402 0.0168936 66.8304 0.000808011C72.4171 -0.0427316 77.872 1.67436 82.4007 4.902Z"
    );
  }
  .skew-div-3 {
    top: 10%;
    right: 0;
    width: 95px;
    z-index: 4;
    width: 210px;
    height: 300px;
    clip-path: path(
      "M180.926 11.698C198.494 24.2941 208.59 46.6872 208.59 72.7676V225.536C208.59 251.751 198.494 273.982 180.926 286.632C170.99 293.72 159.048 297.489 146.82 297.398C139.156 297.362 131.556 296.015 124.353 293.414L38.0584 262.974C16.4035 255.276 0 225.293 0 192.996V105.334C0 73.1982 16.3765 43.1344 38.0854 35.3561L124.272 4.83478C131.475 2.23448 139.075 0.886996 146.739 0.851398C159.005 0.755042 170.983 4.55506 180.926 11.698Z"
    );
  }

  @media only screen and (max-width: 1200px) {
    .hero-left {
      h2 {
        font-size: 2rem;
        .bg-gradient {
          font-size: 2.5rem;
        }
      }
    }
    .relative-dots {
      right: 40px;
      bottom: 15px;
      .dot {
        width: 8px;
        height: 8px;
      }
      .dot-div {
        width: 20px;
        height: 20px;
      }
    }
    .skew-div-1 {
      left: 5%;
    }
    .skew-div-2 {
    }
    .skew-div-3 {
    }
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    height: fit-content;
    grid-template-rows: 1fr 500px;
    .underlay-1 {
      width: 40%;
      top: -30px;
      left: -30px;
    }
    .underlay-2 {
      width: 40%;
      right: -30px;
      bottom: -40px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1em;
    .hero-left {
      padding-top: 2em;
      h2 {
        font-size: 1.5rem;
        .bg-gradient {
          font-size: 1.75rem;
        }
      }
      .p {
        font-size: 12px;
      }
    }
    .relative-dots {
      right: 10px;
    }
  }
  @media only screen and (max-width: 500px) {
    grid-template-rows: 1fr 400px;
    .transform-div {
      width: 100%;
      height: 100%;
      transform: scale(0.7);
      border-radius: 12px;
      overflow: hidden;
    }
    .skew-div-1 {
      left: -30px;
    }
    .skew-div-2 {
      display: none;
    }
    .skew-div-3 {
      top: -30px;
      right: -30px;
      bottom: unset;
    }
  }
  @media only screen and (max-width: 410px) {
    .hero-btn-container {
      align-items: center;
      justify-content: center;
    }
    .skew-div-1 {
      top: 20%;
      bottom: unset;
      z-index: 5;
    }
    .skew-div-3 {
      top: 0;
    }
  }
`;
