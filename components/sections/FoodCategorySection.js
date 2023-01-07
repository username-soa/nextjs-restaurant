import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import MenuCategoryCard from "../cards/MenuCategoryCard";
import { menuCategories } from "../../utils/generalInfo";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const FoodCategorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Container ref={ref}>
      <motion.div
        className="food-menu-top"
        exit="hidden"
        initial="hidden"
        variants={parentAnimations}
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h3 variants={childAnimations} className="main-h3">
          Notre Menu
        </motion.h3>
        <motion.p variants={childAnimations} className="main-title-description">
          voici nos catégorie
        </motion.p>
      </motion.div>
      <motion.div
        exit="hidden"
        initial="hidden"
        variants={parentAnimations}
        animate={isInView ? "show" : "hidden"}
        className="food-menu-content"
      >
        {menuCategories.map((i, index) => {
          return (
            <MenuCategoryCard
              name={i.name}
              href={i.href}
              image={i.image}
              animations={childAnimations}
              key={`menu-category-card-${index}`}
            />
          );
        })}
      </motion.div>
    </Container>
  );
};

export default FoodCategorySection;

const Container = styled.section`
  gap: 2em;
  display: flex;
  padding: 2em 0;
  flex-direction: column;
  .food-menu-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
  @media only screen and (max-width: 500px) {
    .food-menu-content {
      grid-template-columns: 100%;
    }
  }
`;
