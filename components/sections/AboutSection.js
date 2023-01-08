import React, { useRef, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import SocialLink from "../elements/SocialLink";
import BlurredImage from "../elements/BlurredImage";
import AdvantagesCard from "../cards/AdvantagesCard";
import aboutImage from "../../assets/gallery/image1.jpg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import TripadvisorIcon from "../../assets/svg/tripadvisor.svg";
import { advantages, restaurantInfo } from "../../utils/generalInfo";
import RestaurantLocationContext from "../../contexts/RestaurantLocationContext";

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

const AboutSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.5 });
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
    <Container ref={ref}>
      <div className="about-information">
        <motion.div
          ref={ref2}
          exit="hidden"
          initial="hidden"
          variants={parentAnimations}
          className="about-section-content"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h3 variants={childAnimations} className="main-h3">
            À Propos De Nous
          </motion.h3>
          <motion.p
            variants={childAnimations}
            className="main-title-description"
          >
            Little Italy
          </motion.p>
          <motion.p
            variants={childAnimations}
            className="about-us-description margin-top"
          >
            Une enseigne prestigieuse, ambassadrice du goût italien s&apos;est
            installée à Marrakech et Agadir.{" "}
            <span className="bold-text">Little Italy </span>
            c&apos;est l&apos;authenticité d&apos;une cuisine Italienne par un
            grand Chef du Pays.
          </motion.p>

          <motion.h4 className="about-h5">Nous locations</motion.h4>
          <motion.div
            variants={childAnimations}
            className="change-location-wrp"
          >
            {restaurantInfo.locations.map((item, index) => {
              return (
                <button
                  className={
                    activeLocation.toLocaleLowerCase() ===
                    item.location.toLocaleLowerCase()
                      ? "location-btn active-btn"
                      : "location-btn"
                  }
                  onClick={() => {
                    setActiveLocation(item.location.toLocaleLowerCase());
                    setRestaurantLocation(item);
                  }}
                  key={`change-location-btn-${index}`}
                >
                  {item.location}
                </button>
              );
            })}
          </motion.div>
          <motion.div
            variants={childAnimations}
            className="restaurant-location-details"
          >
            <div className="restaurant-location-row">
              <p className="data-title">Overture : </p>
              <p className="data-content">CHAQUE JOUR DE 12H à 01H</p>
            </div>
            <div className="restaurant-location-row">
              <p className="data-title">Réseau sociaux : </p>
              <div className="social-media-wrp">
                <SocialLink
                  href={restaurantLocation.facebook}
                  SvgIcon={FacebookIcon}
                />
                <SocialLink
                  href={restaurantLocation.instagram}
                  SvgIcon={InstagramIcon}
                />
                <SocialLink
                  href={restaurantLocation.tripAdviser}
                  SvgIcon={TripadvisorIcon}
                />
              </div>
            </div>
            <div className="restaurant-location-row">
              <p className="data-title">Trouver nous : </p>
              <div>
                <p className="data-content">{restaurantLocation.phone}</p>
                <p className="data-content">{restaurantLocation.email}</p>
                <p className="data-content">{restaurantLocation.address}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="about-image-container">
          <BlurredImage
            width="100%"
            height="100%"
            image={aboutImage}
            alt={`about-us`}
            key={`about-us-image`}
          />
        </div>
      </div>
      <motion.div
        exit="hidden"
        initial="hidden"
        variants={parentAnimations}
        animate={isInView2 ? "show" : "hidden"}
        className="about-services"
      >
        <motion.h3 variants={childAnimations} className="main-h3">
          Nous Services
        </motion.h3>
        <motion.p variants={childAnimations} className="main-title-description">
          vous vous demandez pourquoi nous choisir ?
        </motion.p>
        <motion.p variants={childAnimations} className="about-us-description">
          Chez <span className="bold-text">Little Italy</span>, on vous offre
          plus que des plats délicieux. voici quelques avantages qui font de
          nous le meilleur choix pour vous.
        </motion.p>
        <div className="advantage-cards-wrp">
          {advantages.map((item, index) => {
            return (
              <AdvantagesCard
                icon={item.icon}
                title={item.title}
                animations={childAnimations}
                description={item.description}
                key={`advantages-card-${index}`}
              />
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default AboutSection;

const Container = styled.section`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  .about-information {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 1fr 1fr;
  }
  .about-h5 {
    color: ${({ theme }) => theme.colors.secondary};
    margin: 1em 0;
  }
  .change-location-wrp {
    display: flex;
    gap: 0.5em;
  }
  .location-btn {
    padding: 10px 20px;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    transition: all 0.1s ease 0s;
    &:hover {
      color: #fff;
      background: #ccc;
    }
    &.active-btn {
      color: #fff;
      background: ${({ theme }) => theme.colors.btnBackground};
    }
  }
  .restaurant-location-details {
    padding: 1em 0;
  }
  .restaurant-location-row {
    display: grid;
    grid-template-columns: 150px auto;
    padding: 0.4em 0;
    .data-title {
      font-weight: bold;
      font-style: italic;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 0.9rem;
      line-height: 150%;
    }
    .data-content {
      color: rgb(0, 0, 0);
      font-weight: 500;
      font-size: 0.9rem;
      line-height: 150%;
      padding: 1px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-clamp: 1;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .social-media-wrp {
      display: flex;
      gap: 1em;
    }
  }
  .about-us-description {
    text-align: justify;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 150%;
    padding-top: 0.5em;
  }
  .bold-text {
    font-weight: 600;
  }
  .margin-top {
    margin-top: 0.75em;
  }
  .advantage-cards-wrp {
    gap: 1em;
    display: flex;
    margin-top: 1em;
  }
  @media only screen and (max-width: 1000px) {
    .about-information {
      grid-template-columns: 100%;
      grid-template-rows: 1fr 1fr;
      gap: 1em;
    }
    .restaurant-location-row {
      .data-content {
        padding: 3px 0;
      }
    }
    .advantage-cards-wrp {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 500px) {
    .restaurant-location-row {
      display: grid;
      grid-template-columns: 100%;
      .data-title {
        padding-bottom: 0.5em;
      }
    }
  }
`;
