import React, { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import BlurredImage from "../elements/BlurredImage";
import eventsImage from "../../assets/gallery/image4.PNG";

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

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Container ref={ref}>
      <div className="events-image-container">
        <BlurredImage
          width="100%"
          height="100%"
          alt={`events`}
          image={eventsImage}
          key={`events-image`}
        />
      </div>
      <motion.div
        exit="hidden"
        initial="hidden"
        variants={parentAnimations}
        className="event-section-content"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h3 variants={childAnimations} className="main-h3">
          Nous Evenements
        </motion.h3>
        <motion.p variants={childAnimations} className="main-title-description">
          Little Italy, plus qu'un restaurant
        </motion.p>
        <motion.p
          variants={childAnimations}
          className="events-description margin-top"
        >
          <span className="bold-text">little Italy</span> n'est pas seulement un
          endroit idéal pour le déjeuner ou dîner, mais aussi un espace idéal
          pour une fête ou un événement spécial.
        </motion.p>
        <motion.p variants={childAnimations} className="events-description">
          pour en savoir plus sur nous événements nouveaux et passés, n'hésitez
          pas à consulter notre liste d'événements en cliquant sur le lien
          ci-dessous.
        </motion.p>
        <motion.div className="events-link">
          <Link href="/events">Voir Plus</Link>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default EventsSection;

const Container = styled.section`
  padding: 2em 0;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
  .bold-text {
    font-weight: 600;
  }
  .margin-top {
    margin-top: 0.75em;
  }
  .events-description {
    text-align: justify;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 150%;
    padding-top: 0.5em;
  }
  .events-link {
    margin: 1em 0;
    > a {
      border-radius: 12px;
      width: fit-content;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
      background: ${({ theme }) => theme.colors.btnBackground};
      padding: 10px 20px;
    }
  }
  @media only screen and (max-width: 1000px) {
    gap: 1em;
    grid-template-columns: 100%;
    .events-image-container {
      width: 100%;
      aspect-ratio: 1/1;
      grid-row: 2/3;
    }
    .events-text {
      grid-row: 1/2;
      padding: 2em 0;
    }
    .event-section-content {
      grid-row: 1/2;
    }
  }
`;
