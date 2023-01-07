import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import ChefCard from "../cards/ChefCard";

const ITEMS_PADDING = 16;
const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
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

const ChefsSection = ({ chefs }) => {
  const ref = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Container itemsGap={ITEMS_PADDING} ref={ref}>
      <motion.div
        exit="hidden"
        initial="hidden"
        variants={parentAnimations}
        className="chefs-section-top"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h3 variants={childAnimations} className="main-h3">
          nous chefs
        </motion.h3>
        <motion.p variants={childAnimations} className="main-title-description">
          Suis nous sur Instagram, pour ne pas manquer aucun actualités
        </motion.p>
      </motion.div>
      <motion.div className="chefs-section-content" ref={sliderRef}>
        <motion.div
          drag="x"
          exit="hidden"
          initial="hidden"
          dragConstraints={sliderRef}
          variants={parentAnimations}
          className="chefs-section-slider"
          animate={isInView ? "show" : "hidden"}
        >
          {chefs.map((item, index) => {
            return (
              <ChefCard
                name={item.name}
                image={item.image}
                key={`chef-card-${index}`}
                animations={childAnimations}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ChefsSection;

const Container = styled.section`
  padding: 2em 0;
  .chefs-section-content {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    padding: 1.25em 0;
  }
  .chefs-section-slider {
    cursor: grab;
    display: inline-flex;
    gap: ${(props) => `${props.itemsGap}px`};
  }
`;
