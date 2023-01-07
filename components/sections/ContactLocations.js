import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MailIcon from "../../assets/svg/mail.svg";
import PhoneIcon from "../../assets/svg/phone.svg";
import BlurredImage from "../elements/BlurredImage";
import SocialsIcon from "../../assets/svg/socials.svg";
import LocationInfoCard from "../cards/LocationInfoCard";
import LocationIcon from "../../assets/svg/location-pin.svg";
import ContactLocationNav from "../elements/ContactLocationNav";
import RestaurantLocationContext from "../../contexts/RestaurantLocationContext";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.2 },
  },
};

const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const ContactLocations = ({ data }) => {
  const { restaurantLocation, setRestaurantLocation } = useContext(
    RestaurantLocationContext
  );
  const [activeLocation, setActiveLocation] = useState(
    restaurantLocation?.location
  );
  useEffect(() => {
    setActiveLocation(restaurantLocation?.location);
  }, [restaurantLocation]);

  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={parentAnimations}
        className="location-info-container"
      >
        <div>
          <motion.h3 variants={childAnimations} className="contact-h3">
            Nos restaurants
          </motion.h3>
          <motion.p
            variants={childAnimations}
            className="contact-title-description"
          >
            voici nos locations
          </motion.p>
        </div>

        <ContactLocationNav
          data={data}
          state={activeLocation}
          animations={childAnimations}
          setState={setActiveLocation}
          handleClick={setRestaurantLocation}
        />
        <div className="grid-div">
          <LocationInfoCard
            title="Adresse"
            SvgIcon={LocationIcon}
            details={restaurantLocation.address}
            animations={childAnimations}
          />
          <LocationInfoCard
            title="Téléphone"
            SvgIcon={PhoneIcon}
            details={restaurantLocation.phone}
            animations={childAnimations}
          />
          <LocationInfoCard
            title="E-mail"
            SvgIcon={MailIcon}
            details={restaurantLocation.email}
            animations={childAnimations}
          />
          <LocationInfoCard
            override={true}
            SvgIcon={SocialsIcon}
            title="Réseaux Sociaux"
            animations={childAnimations}
            facebookLinks={restaurantLocation?.facebook}
            instagramLinks={restaurantLocation?.instagram}
            tripAdviserLinks={restaurantLocation?.tripAdviser}
          />
        </div>
      </motion.div>
      <div
        className="location-image-container"
        onClick={() => {
          window.open(restaurantLocation?.googleMapsLink);
        }}
      >
        <BlurredImage
          width="100%"
          height="100%"
          image={restaurantLocation?.addressImage}
          alt={`${restaurantLocation?.name} address`}
        />
      </div>
    </Container>
  );
};

export default ContactLocations;

const Container = styled.section`
  padding: 2em;
  margin: 2em 0;
  overflow: hidden;
  border-radius: 8px;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 1.5fr;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  .location-info-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .location-image-container {
    border-radius: 8px;
    background: #ccc;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    .location-image-container {
      width: 100%;
      aspect-ratio: 16/9;
    }
    .grid-div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1em;
    .grid-div {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (max-width: 500px) {
    .location-image-container {
      aspect-ratio: 1/1;
    }
  }
`;
