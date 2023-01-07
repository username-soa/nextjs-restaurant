import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import SorrentoCard from "../cards/SorrentoCard";
import PageTitleCard from "../cards/PageTitleCard";
import { sorrentoMenu } from "../../utils/generalInfo";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 0.2,
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

const SorrentoMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Container ref={ref}>
      <PageTitleCard title="Notre Menu Sorrento" />
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
        className="sorrento-menus-wrp"
      >
        {sorrentoMenu.map((item, index) => {
          return (
            <SorrentoCard
              title={item.name}
              animations={childAnimations}
              description={item.description}
              key={`sorrento-menu-card-${index}`}
            />
          );
        })}
      </motion.div>
    </Container>
  );
};

export default SorrentoMain;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 300px auto;
  padding: 1em 0;
  > * {
    &:first-child {
      margin: 0;
    }
  }
  .sorrento-menus-wrp {
    padding: 1em 0;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    height: fit-content;
    .sorrento-menus-wrp {
      grid-template-columns: 100%;
      grid-template-rows: 300px 300px;
    }
  }
`;
