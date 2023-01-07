import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import BlurredImage from "../elements/BlurredImage";

const MenuCategoryCard = ({ href, name, image, animations }) => {
  const newHref =
    name.toLowerCase() === "sorrento"
      ? href
      : `${href}?category=${name.toLowerCase()}`;
  return (
    <Link href={newHref}>
      <Container variants={animations}>
        <div className="card-image-wrp">
          <BlurredImage
            image={image}
            width="100%"
            height="100%"
            alt={`menu-category-${name}`}
          />
        </div>
        <div className="card-overlay">
          <h5>{name}</h5>
        </div>
      </Container>
    </Link>
  );
};

export default MenuCategoryCard;

const Container = styled(motion.div)`
  color: #fff;
  aspect-ratio: 1/1.5;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  &:hover {
    .card-image-wrp {
      transform: scale(1.03);
    }
  }
  .card-overlay {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    padding-bottom: 2em;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* z-index: 1; */
    background: transparent;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(239, 239, 239, 0)
    );
    h5 {
      line-height: 150%;
      font-size: 1.25rem;
      text-transform: capitalize;
      color: #fff;
    }
  }
  .card-image-wrp {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }
  @media only screen and (max-width: 500px) {
    aspect-ratio: 1/1;
  }
`;
