import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const SorrentoCard = ({ title, description, animations }) => {
  return (
    <Container variants={animations}>
      <h2 className="sorrento-card-h2">{title}</h2>
      <p className="sorrento-card-p">{description}</p>
      <Link href={`/menu/sorrento#${title}`}>menu {title}</Link>
    </Container>
  );
};

export default SorrentoCard;

const Container = styled(motion.div)`
  padding: 1em;
  border-radius: 8px;
  position: relative;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  .sorrento-card-p {
    width: 80%;
    text-align: center;
    margin: 1em 0;
    color: #000;
    opacity: 0.7;
    font-weight: 400;
    font-size: 0.95rem;
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
  .sorrento-card-h2 {
    margin: 0;
    font-size: 2rem;
    text-transform: capitalize;
    background: linear-gradient(300deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 768px) {
    .sorrento-card-h2 {
      font-size: 1.5rem;
    }
    .sorrento-card-p {
      /* width: 100%; */
      font-size: 12px;
    }
    a {
      font-size: 14px;
    }
  }
`;
