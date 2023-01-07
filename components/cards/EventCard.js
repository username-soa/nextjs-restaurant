import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const EventCard = ({ title, image, date, id, animations }) => {
  const router = useRouter();

  return (
    <Container
      variants={animations}
      onClick={() => {
        router.push(`/events/${id}`);
      }}
    >
      <div className="event-card-image-wrp">
        <Image
          fill
          src={image}
          alt={`${title}-image`}
          className="image-class"
        />
      </div>
      <div className="event-card-info-wrp">
        <h3 className="event-card-h2">{title}</h3>
        <p className="event-card-p">{date}</p>
        <button
          className={"event-card-btn"}
          onClick={() => {
            router.push(`/events/${id}`);
          }}
        >
          Détails
        </button>
      </div>
    </Container>
  );
};

export default EventCard;

const Container = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
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
  .event-card-image-wrp {
    width: 100%;
    aspect-ratio: 1/1;
    position: relative;
  }
  .event-card-info-wrp {
    padding: 15px 20px;
  }
  .event-card-h2 {
    background: linear-gradient(200deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
  .event-card-p {
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightBrown};
    margin-bottom: 0.75rem;
  }
  .event-card-btn {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.btnBackground};
    transition: all 0.3s ease 0s;
    &:hover {
      color: ${({ theme }) => theme.colors.textColor};
      background: #ccc;
    }
  }
`;
