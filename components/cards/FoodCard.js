import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import BlurredImage from "../elements/BlurredImage";

const parentAnimations = {
  hidden: { opacity: 0, y: "20px" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.3 },
  },
};

const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const FoodCard = ({ name, image, meals, handleClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Container ref={ref} onClick={handleClick}>
      <div className="food-card-image-wrp">
        <BlurredImage
          image={image}
          width="100%"
          height="100%"
          alt={`${name}-image`}
        />
      </div>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
        className="food-card-details food-card-row"
      >
        <motion.h3 variants={childAnimations} className="food-card-h3">
          {name}
        </motion.h3>
        <motion.span variants={childAnimations} className="meals-span">
          {meals.length} Recettes
        </motion.span>
      </motion.div>
    </Container>
  );
};

export default FoodCard;

const Container = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  flex-direction: column;
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    transition: all 0.15s ease;
    z-index: -1;
  }
  .food-card-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .meals-span {
    font-weight: 500;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.lightBrown};
    color: #fff;
  }
  .food-card-h3 {
    font-size: 24px;
    border-radius: 8px;
    background: linear-gradient(100deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-style: italic;
    padding-right: 10px;
  }

  .food-card-details {
    border-radius: 4px !important;
    padding: 1em 0.75em;
    background: transparent;
  }
  .food-card-image-wrp {
    width: 100%;
    aspect-ratio: 16/9;
    transition: padding 0.3s ease-in-out;
    > div {
      border-radius: 0;
    }
  }
  &:hover {
    &:after {
      background: #fafafa;
    }

    .food-card-image-wrp {
      padding: 10px;
      > div {
        border-radius: 8px;
        overflow: hidden;
      }
    }
  }
`;
