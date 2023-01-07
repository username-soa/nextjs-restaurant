import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FoodMenuNav = ({ setState, state }) => {
  return (
    <Container>
      <button
        className={
          state === "repas" ? "food-menu-nav-btn active" : "food-menu-nav-btn"
        }
        onClick={() => {
          setState("repas");
        }}
      >
        Repas
      </button>
      <button
        className={
          state === "boissons"
            ? "food-menu-nav-btn active"
            : "food-menu-nav-btn"
        }
        onClick={() => {
          setState("boissons");
        }}
      >
        Boissons
      </button>
    </Container>
  );
};

export default FoodMenuNav;

const Container = styled(motion.div)`
  margin: 1em auto;
  overflow: hidden;
  width: fit-content;
  position: relative;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  &:after {
    content: "";
    inset: 0;
    z-index: -1;
    position: absolute;
    transition: all 0.15s ease;
  }
  &:hover {
    &:after {
      background: #fafafa;
    }
  }
  .underline {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 24px;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary};
  }
  .food-menu-nav-btn {
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    padding: 10px 32px;
    border-radius: 5px;
    font-family: inherit;
    color: rgb(27, 27, 27);
    border-radius: 25px;
    background: transparent;
    text-transform: capitalize;
    transition: all 0.1s ease 0s;

    &.active {
      color: ${({ theme }) => theme.colors.secondary};
      background: rgb(238, 238, 238);
    }
  }
`;
