import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { eventsList } from "../../utils/generalInfo";
import TwitterIcon from "../../assets/svg/twitter.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import { restaurantInfo } from "../../utils/generalInfo";
import BlurredImage from "../../components/elements/BlurredImage";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const EventDetails = () => {
  let isMounted = true;
  const router = useRouter();
  const { slug } = router.query;
  const [event, setEvent] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getEvent = (eventID) => {
    return eventsList.find((item) => item.id === eventID);
  };

  useEffect(() => {
    if (isMounted && slug) {
      setError(false);
      const result = getEvent(slug);
      if (result === undefined) {
        setError(true);
        setLoading(false);
      } else {
        setEvent(result);
        setLoading(false);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (error) {
    return null;
  }
  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <Container>
      <div className="event-wrp">
        <motion.h3
          className="event-h3"
          // initial="hidden"
          // animate="visible"
          // variants={fadeUpAnimation}
        >
          {event?.name}
        </motion.h3>
        <div className="event-image-wrp">
          <BlurredImage
            image={event.img}
            width="100%"
            height="100%"
            alt={`${slug}-event-image`}
          />
        </div>
        <div
        // ref={ref}
        >
          <motion.div
          // initial="hidden"
          // animate={hasBeenViewed ? "visible" : "hidden"}
          // variants={fadeUpDelayedAnimation}
          >
            <h4 className="event-h4"> Heure et lieu</h4>
            <h5 className="event-h5">{event?.date}</h5>
            <p className="event-p">{event?.address}</p>
          </motion.div>
          <motion.div
          // initial="hidden"
          // animate={hasBeenViewed ? "visible" : "hidden"}
          // variants={fadeUpDelayedAnimation}
          >
            <h4 className="event-h4">Partager cet événement</h4>
            <div className="event-links-wrp">
              <FacebookShareButton
                url={window.location.href}
                quote={"Découvrez notre événement ! J'espère vous y voir."}
                hashtag={{ ...restaurantInfo?.hashtags }}
              >
                <div className="socials-wrp">
                  <FacebookIcon />
                </div>
              </FacebookShareButton>
              <TwitterShareButton
                url={window.location.href}
                title={"Découvrez notre événement ! J'espère vous y voir."}
                hashtags={restaurantInfo?.hashtags}
              >
                <div className="socials-wrp">
                  <TwitterIcon />
                </div>
              </TwitterShareButton>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default EventDetails;

const Container = styled(motion.div)`
  .event-wrp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
    padding: 4em;
  }
  .event-h3 {
    text-transform: uppercase;
    width: fit-content;
    font-size: 2rem;
    margin: 0em auto 2em auto;
    letter-spacing: 2px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    background: linear-gradient(200deg, #555, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .event-h5 {
    text-transform: uppercase;
    margin: 1em 0;
    color: ${({ theme }) => theme.colors.secondary};
    width: fit-content;
  }
  .event-h4 {
    text-transform: capitalize;
    margin: 2em 0 1em 0;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 1px;
    font-size: 1.25rem;
  }
  .event-p {
    color: #000;
    opacity: 0.7;
    font-weight: 400;
    font-size: 0.95rem;
  }
  .event-image-wrp {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%),
      0 12px 24px rgb(0 0 0 / 5%);
  }
  .event-image {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.01);
    }
  }
  .event-links-wrp {
    display: flex;
    align-items: center;
    gap: 1em;
    .socials-wrp {
      box-shadow: ${({ theme }) => theme.colors.boxShadow};
      width: 50px;
      height: 50px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s;
      &:hover {
        border: 1px solid #98694c;
        svg {
          fill: 1px solid #98694c;
          path,
          circle {
            fill: #98694c !important;
          }
          g {
            path {
              fill: #98694c !important;
            }
          }
        }
      }
    }
    svg {
      width: 24px;
      height: 24px;
      margin: 0 0.75em;
      cursor: pointer;
      fill: #1b1b1b !important;
      transition: all 0.4s;
      path,
      circle {
        fill: #1b1b1b !important;
      }
      g {
        path {
          fill: #1b1b1b !important;
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .event-wrp {
      width: 100%;
    }
    .event-h3 {
      text-align: center;
    }
  }
  @media only screen and (max-width: 768px) {
    .event-wrp {
      padding: 4em 1.5em;
    }
    .event-h3 {
      font-size: 1.25em;
    }
    .event-h4 {
      font-size: 1em;
    }
    .event-h5 {
      font-size: 14px;
    }
    .event-p {
      font-size: 12px;
    }
  }
`;
