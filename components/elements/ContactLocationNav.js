import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactLocationNav = ({
  data,
  state,
  setState,
  animations,
  handleClick,
}) => {
  return (
    <Container variants={animations}>
      {data?.map((item, index) => {
        return (
          <button
            className={
              state.toLocaleLowerCase() === item?.location.toLocaleLowerCase()
                ? "location-info-nav-btn active"
                : "location-info-nav-btn"
            }
            onClick={() => {
              setState(item?.location.toLocaleLowerCase());
              handleClick(item);
            }}
            key={`contact-location-nav-${index}`}
          >
            {item.location}
          </button>
        );
      })}
    </Container>
  );
};

export default ContactLocationNav;

const Container = styled(motion.div)`
  margin: 1em 0;
  overflow: hidden;
  width: fit-content;
  position: relative;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  &:after {
    content: "";
    inset: 0;
    z-index: -1;
    position: absolute;
    transition: all 0.15s ease;
  }
  &:hover {
    &:after {
      background: #fafafa;
    }
  }
  .location-info-nav-btn {
    font-weight: 500;
    font-size: 14px;
    position: relative;
    padding: 10px 32px;
    border-radius: 5px;
    font-family: inherit;
    color: rgb(27, 27, 27);
    border-radius: 10px;
    background: transparent;
    text-transform: capitalize;
    transition: all 0.1s ease 0s;

    &.active {
      color: ${({ theme }) => theme.colors.secondary};
      background: rgb(238, 238, 238);
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 1em auto;
    .location-info-nav-btn {
      font-size: 12px;
      padding: 10px 20px;
    }
  }
`;
