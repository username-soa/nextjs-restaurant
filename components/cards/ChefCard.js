import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const ChefCard = ({ name, image, animations }) => {
  return (
    <Container variants={animations}>
      <div className="chef-img-wrp">
        <Image
          src={image}
          fill
          className="chef-image"
          placeholder="blur"
          alt={`${name}-picture`}
        />
      </div>
      <h6 className="chef-name">{name}</h6>
    </Container>
  );
};

export default ChefCard;

const Container = styled(motion.div)`
  border-radius: 12px;
  width: 300px;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  pointer-events: none;
  &:hover {
    .chef-image {
      transform: scale(1.02);
    }
  }
  .chef-image {
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .chef-img-wrp {
    width: 100%;
    overflow: hidden;
    aspect-ratio: 1/1.5;
    object-fit: cover;
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .chef-name {
    padding: 0.75em 0;
    line-height: 150%;
    font-size: 1.25rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
