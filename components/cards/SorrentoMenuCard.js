import React, { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import BlurredImage from "../elements/BlurredImage";
import SvgIcon from "../../assets/svg/svgSeparator.svg";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.3 },
  },
};

const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const SorrentoMenuCard = ({ title, nextCard, image, meals, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Container ref={ref} direction={direction} id={title}>
      <div className="sorrento-item-img-wrp">
        <BlurredImage
          image={image}
          width="100%"
          height="100%"
          alt={`sorrento-${title}`}
        />
      </div>
      <motion.div
        initial="hidden"
        variants={childAnimations}
        animate={isInView ? "show" : "hidden"}
        className="sorrento-item-description-wrp"
      >
        <motion.div
          variants={childAnimations}
          className="sorrento-item-text-wrp-top"
        >
          <h3>{title}</h3>
          <SvgIcon />
        </motion.div>
        <div>
          <motion.h4 variants={childAnimations}>Finger food du chef</motion.h4>
          {meals.map((item, index) => {
            return (
              <motion.div
                variants={childAnimations}
                className="meal-item"
                key={`${index}-SorrentoItem`}
              >
                <h5>{item.name}</h5>
                <p>{item.ingredients}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div variants={childAnimations} className="next-menu-btn">
          <Link href={`/menu/sorrento#${nextCard}`}>menu {nextCard}</Link>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default SorrentoMenuCard;

const Container = styled.div`
  height: calc(100vh - 90px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  padding-bottom: 2em;
  scroll-margin-top: 100px;
  .sorrento-item-img-wrp {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .sorrento-item-description-wrp {
    grid-row: 1/1;
    grid-column: ${(props) => (props.direction === "left" ? "2 / 3" : "1 / 2")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .sorrento-item-text-wrp-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 1em;
      svg {
        width: 200px;
        fill: rgba(109, 86, 53, 0.7);
      }
    }
    h3 {
      font-style: italic;
      text-transform: uppercase;
      font-size: 3rem;
      letter-spacing: 5px;
      background: linear-gradient(300deg, #555, #000);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 1;
      width: fit-content;
      text-align: center;
    }
    h4 {
      font-style: italic;
      color: ${({ theme }) => theme.colors.secondary};
      margin: 2em 0;
      text-align: center;
    }
    h5 {
      font-style: italic;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
      text-transform: capitalize;
      font-size: 0.9rem;
    }
    p {
      text-align: center;
      color: #000;
      margin-top: 0.5em;
      opacity: 0.7;
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
  .meal-item {
    padding: 0.75em 0;
  }
  a {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    transition: opacity 0.3s ease;
    :hover {
      opacity: 0.7;
    }
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-gap: 2em;
    padding: 2em 0;
    height: fit-content;
    .sorrento-item-img-wrp,
    .sorrento-item-description-wrp {
      grid-column: 1/2;
    }
    .sorrento-item-img-wrp {
      width: 100%;
      aspect-ratio: 1/1;
    }
    .sorrento-item-description-wrp {
      grid-row: 1/2;
    }
    .sorrento-item-img-wrp {
      grid-row: 2/3;
      /* img {
        aspect-ratio: 1/1.25;
      } */
    }
  }
  @media only screen and (max-width: 768px) {
    .sorrento-item-img-wrp {
      width: 100%;
      aspect-ratio: 1/1.25;
    }
  }
  @media only screen and (max-width: 500px) {
    .sorrento-item-img-wrp {
      width: 100%;
      aspect-ratio: 1/1.5;
    }
  }
`;
