import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const AdvantagesCard = ({ icon, title, description, animations }) => {
  return (
    <Container variants={animations}>
      <div className="advantages-card-top">
        <div className="advantage-icon">
          <Image src={icon} fill alt="advantage-icon" />
        </div>
        <h4 className="advantage-h3">{title}</h4>
      </div>
      <p className="advantage-p">{description}</p>
    </Container>
  );
};

export default AdvantagesCard;

const Container = styled(motion.div)`
  gap: 8px;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  padding: 0.75em 1em;
  border-radius: 12px;
  border: 1px solid #eee;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 7px;
    background: linear-gradient(to top, #c79081 0%, #dfa579 100%);
  }
  .advantages-card-top {
    display: flex;
    gap: 1em;
    align-items: center;
  }
  .advantage-icon {
    width: 30px;
    height: 30px;
    position: relative;
  }

  .advantage-h3 {
    font-size: 1rem;
    color: #98694c;
    font-weight: 600;
    line-height: 150%;
  }
  .advantage-p {
    color: #000;
    opacity: 0.7;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 150%;
    text-align: justify;
  }
`;
