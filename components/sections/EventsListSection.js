import React, { useRef } from "react";
import styled from "styled-components";
import EventCard from "../cards/EventCard";
import { motion, useInView } from "framer-motion";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.3 },
  },
};

const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const EventsListSection = ({ title, data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Container ref={ref}>
      <motion.h3
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
        className="event-list-h3"
      >
        {title}
      </motion.h3>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
        className="event-list-wrp"
      >
        {data.map((item, index) => {
          return (
            <EventCard
              id={item.id}
              image={item.img}
              date={item.date}
              title={item.name}
              key={`event-card-${index}`}
              animations={childAnimations}
            />
          );
        })}
      </motion.div>
    </Container>
  );
};

export default EventsListSection;

const Container = styled.div`
  padding: 2em 0;
  .event-list-h3 {
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0.25em auto 1em;
    letter-spacing: 1px;
    width: fit-content;
    text-align: center;
    background: linear-gradient(200deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .event-list-wrp {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 2em 1em;
    padding: 2em 0;
  }
  @media only screen and (max-width: 1000px) {
    .event-list-wrp {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      max-width: unset;
    }
  }
`;
