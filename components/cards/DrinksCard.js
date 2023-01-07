import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const DrinksCard = ({ name, drinks }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Container ref={ref}>
      <motion.h3
        initial="hidden"
        className="drinks-card-h3"
        variants={childAnimations}
        animate={isInView ? "show" : "hidden"}
      >
        {name}
      </motion.h3>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
      >
        {drinks?.map((element, index) => {
          return (
            <motion.div
              key={index}
              className={
                index + 1 < drinks?.length
                  ? "drinks-card-div border-bottom"
                  : "drinks-card-div"
              }
              variants={childAnimations}
            >
              <div className="drinks-card-top">
                <h5 className="drinks-card-h5">
                  {element?.name.toLowerCase()}
                </h5>
                <span className="drinks-card-span">{element?.price}</span>
              </div>
              <p className="drinks-card-p">{element?.ingredients}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default DrinksCard;

const Container = styled.div`
  padding: 1em;
  overflow: hidden;
  position: relative;
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    transition: all 0.15s ease;
    z-index: -1;
  }
  &:hover {
    &:after {
      background: #fafafa;
    }
  }
  .drinks-card-div {
    padding: 0.75em 5px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    &:hover {
      background-color: #eee;
      border-radius: 10px;
    }
  }
  .drinks-card-top {
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .drinks-card-h3 {
    border-radius: 8px;
    background: linear-gradient(100deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-style: italic;
    font-size: 1.75rem;
    margin-bottom: 0.5em;
  }
  .drinks-card-h5 {
    text-transform: capitalize;
    text-align: left;
    color: ${({ theme }) => theme.colors.scrollbarColor};
  }
  .drinks-card-p {
    text-align: justify;
    font-size: 12px;
    margin-top: 0.5em;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.textDescription};
  }
  .drinks-card-span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightBrown};
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    padding: 1em 0.5em;
    .drinks-card-h3 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 500px) {
    .drinks-card-h3 {
      font-size: 1.5rem;
    }
  }
`;
