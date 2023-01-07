import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SocialLink from "../elements/SocialLink";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import TripadvisorIcon from "../../assets/svg/tripadvisor.svg";

const LocationInfoCard = ({
  SvgIcon,
  title,
  details,
  animations,
  override = false,
  ...props
}) => {
  return (
    <Container variants={animations}>
      <SvgIcon />
      {!override ? (
        <div className="flex-div">
          <h4 className="location-card-h4">{title}</h4>
          <span className="location-card-p">{details}</span>
        </div>
      ) : (
        <>
          <div>
            <h4 className="location-card-h4">{title}</h4>
            <div className="location-card-links">
              <SocialLink href={props.facebookLinks} SvgIcon={FacebookIcon} />
              <SocialLink href={props.instagramLinks} SvgIcon={InstagramIcon} />
              <SocialLink
                href={props.tripAdviserLinks}
                SvgIcon={TripadvisorIcon}
              />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default LocationInfoCard;

const Container = styled(motion.div)`
  padding: 1em 0.5em;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease-in-out;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 30px auto;
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    transition: all 0.15s ease;
    z-index: -1;
  }
  &:hover {
    &:after {
      background: #fafafa;
    }
  }

  .location-card-h4 {
    font-weight: 500;
    font-size: 1.45rem;
    line-height: 1.29em;
    margin-bottom: 0.25em;
    color: ${({ theme }) => theme.colors.scrollbarColor};
  }
  .location-card-p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textDescription};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .location-card-links {
    display: flex;
    gap: 1em;
    padding: 1em 0;
  }
  @media only screen and (max-width: 768px) {
    grid-gap: 10px;
    padding: 1em 0;
    svg {
      width: 24px !important;
      height: 24px !important;
    }
    .location-card-links {
      svg {
        width: 14px !important;
        height: 14px !important;
      }
    }
    .location-card-h4 {
      font-size: 1rem;
    }
    .location-card-p {
      font-size: 12px;
    }
  }
`;
