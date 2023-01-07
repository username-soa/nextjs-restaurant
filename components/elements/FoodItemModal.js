import React, { Fragment, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BlurredImage from "./BlurredImage";

const parentAnimations = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: { scale: 0 },
};
const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const FoodItemModal = ({ popup, handleClose }) => {
  const divRef = useRef();
  console.log(popup);

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <PopupWrap>
      <Container
        exit="exit"
        ref={divRef}
        animate="show"
        initial="hidden"
        variants={parentAnimations}
      >
        <div className="desktop-container">
          <div className="food-popup-image">
            <BlurredImage
              width="100%"
              height="100%"
              image={popup?.data?.image}
              alt={`${popup?.data?.category}-image`}
            />
          </div>
          <div className="padding-div">
            <div className="modal-close-svg">
              <motion.h3 variants={childAnimations}>
                {popup?.data?.category}
              </motion.h3>
              <motion.button variants={childAnimations} onClick={handleClose}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.41L13.59 1L8 6.59L2.41 1L1 2.41L6.59 8L1 13.59L2.41 15L8 9.41L13.59 15L15 13.59L9.41 8L15 2.41Z"
                    fill="currentColor"
                    strokeWidth="0.5"
                  ></path>
                </svg>
              </motion.button>
            </div>
            <div className="food-card-meals-container card-overflow">
              {popup?.data?.meals?.map((element, index) => {
                return (
                  <motion.div
                    key={index}
                    className={
                      index + 1 < popup.data?.length
                        ? "menu-item-div border-bottom"
                        : "menu-item-div"
                    }
                    variants={childAnimations}
                  >
                    <div className="item-top">
                      <h5 className="menu-item-h5">
                        {element?.name.toLowerCase()}
                      </h5>
                      <span className="menu-item-span">{element?.price} </span>
                    </div>
                    <p className="menu-item-p">
                      {element?.ingredients?.toLowerCase()}
                    </p>
                    {element.subMeals &&
                      element.subMeals.map((item, index) => {
                        return (
                          <Fragment key={`sub-meals-${index}`}>
                            <div className="item-top">
                              <h5 className="menu-item-h5">{item?.name}</h5>
                              <span className="menu-item-span">
                                {item?.price}
                              </span>
                            </div>
                            <p className="menu-item-p">
                              {element?.ingredients}
                            </p>
                          </Fragment>
                        );
                      })}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mobile-container">
          <div className="modal-close-svg">
            <motion.h3 variants={childAnimations}>
              {popup?.data?.category}
            </motion.h3>
            <motion.button variants={childAnimations} onClick={handleClose}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2.41L13.59 1L8 6.59L2.41 1L1 2.41L6.59 8L1 13.59L2.41 15L8 9.41L13.59 15L15 13.59L9.41 8L15 2.41Z"
                  fill="currentColor"
                  strokeWidth="0.5"
                ></path>
              </svg>
            </motion.button>
          </div>
          <div className="mobile-scroll-container card-overflow">
            <div className="food-popup-image">
              <BlurredImage
                width="100%"
                height="100%"
                image={popup?.data?.image}
                alt={`${popup?.data?.category}-image`}
              />
            </div>
            <div className="food-card-meals-container">
              {popup?.data?.meals?.map((element, index) => {
                return (
                  <motion.div
                    key={index}
                    className={
                      index + 1 < popup.data?.length
                        ? "menu-item-div border-bottom"
                        : "menu-item-div"
                    }
                    variants={childAnimations}
                  >
                    <div className="item-top">
                      <h5 className="menu-item-h5">
                        {element?.name.toLowerCase()}
                      </h5>
                      <span className="menu-item-span">{element?.price}</span>
                    </div>
                    <p className="menu-item-p">
                      {element?.ingredients?.toLowerCase()}
                    </p>
                    {element.subMeals &&
                      element.subMeals.map((item, index) => {
                        return (
                          <Fragment key={`sub-meals-${index}`}>
                            <div className="item-top">
                              <h5 className="menu-item-h5">{item?.name}</h5>
                              <span className="menu-item-span">
                                {item?.price}
                              </span>
                            </div>
                            <p className="menu-item-p">
                              {element?.ingredients}
                            </p>
                          </Fragment>
                        );
                      })}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </PopupWrap>
  );
};

export default FoodItemModal;

const Container = styled(motion.div)`
  width: clamp(300px, 90%, 900px);
  max-height: 600px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;

  .desktop-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .mobile-container {
    display: none;
  }
  .mobile-scroll-container {
    overflow-y: scroll;
    max-height: calc(97vh - 90px);
  }
  .padding-div {
    padding: 0.75em;
  }
  .modal-close-svg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding-bottom: 0.75em;
    h3 {
      background: linear-gradient(100deg, #555, #000);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      font-style: italic;
      margin-top: 0.25em;
      padding-right: 10px;
    }
    button {
      background: #eee;
      padding: 15px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .food-popup-image {
    width: 100%;
    height: 100%;
    max-height: 600px;
    > div {
      border-radius: 0 !important;
    }
  }
  .food-popup-details {
    padding: 0.75em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .food-card-meals-container {
    overflow-y: scroll;
    max-height: calc(600px - 90px);

    .menu-item-h5 {
      text-transform: capitalize;
      text-align: left;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.scrollbarColor};
    }
    .menu-item-div {
      padding: 0.5em 5px;
      &:hover {
        background-color: #eee;
        border-radius: 10px;
      }
    }
    .item-top {
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .menu-item-p {
      text-align: justify;
      font-size: 10px;
      margin-top: 0.5em;
      text-transform: lowercase;
      font-size: 14px;
      color: #68768e;
    }
    .menu-item-span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.lightBrown};
      text-align: center;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    border-radius: 15px 15px 0 0;
    height: 97vh;
    max-height: unset;
    .desktop-container {
      display: none;
    }
    .mobile-container {
      display: flex;
      flex-direction: column;
    }
    .modal-close-svg {
      padding: 1em;
    }
    .food-card-meals-container {
      max-height: unset;
      overflow-y: unset;
      padding: 0.75em 0.25em;
      .menu-item-div {
        padding: 0.5em 10px;
      }
      .menu-item-h5 {
        font-size: 14px;
      }
      .menu-item-p {
        font-size: 12px;
      }
      .menu-item-span {
        font-weight: 600;
        font-size: 14px;
      }
    }
    .food-popup-image {
      width: 100%;
      aspect-ratio: 16/9;
      > div {
        border-radius: 0 !important;
      }
    }
  }
`;

const PopupWrap = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  margin: 0;
  @media only screen and (max-width: 900px) {
    align-items: flex-end;
  }
`;
