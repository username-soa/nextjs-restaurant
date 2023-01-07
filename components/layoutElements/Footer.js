import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import SocialLink from "../elements/SocialLink";
import { restaurantInfo } from "../../utils/generalInfo";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import LogoIcon from "../../assets/svg/little-italy-logo.svg";
import TripadvisorIcon from "../../assets/svg/tripadvisor.svg";
import RestaurantLocationContext from "../../contexts/RestaurantLocationContext";

const Footer = () => {
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
    <FooterContainer>
      <div className="footer-column footer-column-grow">
        <div className="footer-logo ">
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>
      </div>
      <div className="footer-column">
        <h4 className="footer-links-h4">Pages</h4>
        <Link href={"/menu"} className="footer-link">
          Menu
        </Link>
        <Link href={"/"} className="footer-link">
          Accueil
        </Link>
        <Link href={"/menu/sorrento"} className="footer-link">
          Sorrento
        </Link>
        <Link href={"/contact"} className="footer-link">
          Contact
        </Link>
        <Link href={"/events"} className="footer-link">
          Evenements
        </Link>
      </div>
      <div className="footer-column">
        <h4 className="footer-links-h4">Trouvez Nous</h4>
        {restaurantInfo.locations.map((item, index) => {
          return (
            <span
              className={
                item.location.toLocaleLowerCase() ===
                activeLocation.toLocaleLowerCase()
                  ? "footer-link active-location clickable"
                  : "footer-link clickable"
              }
              key={`footer-locations-${index}`}
              onClick={() => {
                setRestaurantLocation(item);
                setActiveLocation(item.location);
              }}
            >
              {item.location}
            </span>
          );
        })}
        <span className="footer-link copy-link-content">
          {restaurantLocation.phone}
        </span>
        <span className="footer-link copy-link-content">
          {restaurantLocation.email}
        </span>
        <span className="footer-link copy-link-content">
          {restaurantLocation.address}
        </span>
      </div>
      <div className="footer-column">
        <div className="footer-socials-top">
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
        <div className="footer-socials-bottom">
          <p>
            © {new Date().getFullYear()} {restaurantInfo.name}, Tous droits
            réservés.
          </p>
          <p>Site made by SOA</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 1;
  padding: 2em;
  display: flex;
  gap: 2em;
  margin: 2em auto;
  border-radius: 15px;
  background-color: #f3efef;
  width: clamp(70%, 1140px, 90%);
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .footer-column-grow {
    flex-grow: 1;
  }
  .clickable {
    cursor: pointer;
  }

  .footer-logo {
    svg {
      width: 70px;
      height: 70px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      g {
        path {
          fill: rgb(27, 27, 27, 0.9);
        }
      }
      &:hover {
        g {
          path {
            fill: rgb(27, 27, 27);
          }
        }
      }
    }
  }
  .footer-links-h4 {
    color: #444;
    opacity: 0.9;
    font-weight: 400;
    font-size: 0.95rem;
    margin-bottom: 0.75em;
  }
  .footer-link {
    transition: all 0.3s ease;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.05rem;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      color: rgb(152, 105, 76);
    }
  }
  .copy-link-content {
    cursor: copy;
  }
  .footer-socials-top {
    gap: 1em;
    display: flex;
    margin: 0.75em 0;
    align-items: center;
    justify-content: space-around;
  }
  .footer-socials-bottom {
    text-align: right;
    padding: 0.5em 0.25em;
    border-top: 1px solid rgb(152, 105, 76);
    border-bottom: 1px solid rgb(152, 105, 76);
    p {
      font-size: 13px;
      padding: 0.25em 0.5em;
      opacity: 0.9;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  .active-location {
    color: rgb(152, 105, 76);
  }
  @media only screen and (max-width: 1400px) {
    width: unset;
    margin: 1em 4em;
  }
  @media only screen and (max-width: 1200px) {
    margin: 1em 2em;
    padding: 1.5em;
    .footer-links-h4 {
      font-size: 0.8rem;
    }
    .footer-link {
      font-size: 0.85rem;
    }
    .footer-socials-bottom {
      p {
        font-size: 10px;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    .footer-links-h4 {
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 1em;
  }
`;
