import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import LogoIcon from "../../assets/svg/little-italy-logo.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import TripadvisorIcon from "../../assets/svg/tripadvisor.svg";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};
const childAnimations = {
  hidden: { opacity: 0, y: "100px" },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "Inertia" },
  },
};

const SideMenu = ({ state, setState, data }) => {
  const router = useRouter();

  return (
    <Container>
      <motion.div
        animate="show"
        initial="hidden"
        className="side-menu-top"
        variants={parentAnimations}
      >
        <motion.div
          className="logo-icon"
          onClick={() => {
            if (router.pathname === "/") {
              setState(!state);
            }
          }}
          variants={childAnimations}
        >
          <Link href="/">
            <LogoIcon />
          </Link>
        </motion.div>
        <motion.div className="close-icon" variants={childAnimations}>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setState(!state);
            }}
          >
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </motion.div>
      </motion.div>
      <nav className="side-menu-nav">
        <motion.ul animate="show" initial="hidden" variants={parentAnimations}>
          <motion.li variants={childAnimations}>
            <Link
              href={`/`}
              className={
                router.pathname === "/"
                  ? "side-menu-link active-link"
                  : "side-menu-link"
              }
              onClick={() => {
                if (router.pathname === "/") {
                  setState(!state);
                }
              }}
            >
              <span className="side-menu-span">Accueil</span>
            </Link>
          </motion.li>
          <motion.li variants={childAnimations}>
            {" "}
            <Link
              href={`/menu`}
              className={
                router.pathname === "/menu"
                  ? "side-menu-link active-link"
                  : "side-menu-link"
              }
              onClick={() => {
                if (router.pathname === "/menu") {
                  setState(!state);
                }
              }}
            >
              <span className="side-menu-span">Menu</span>
            </Link>
          </motion.li>
          <motion.li variants={childAnimations}>
            {" "}
            <Link
              href={`/menu/sorrento`}
              className={
                router.pathname === "/menu/sorrento"
                  ? "side-menu-link active-link"
                  : "side-menu-link"
              }
              onClick={() => {
                if (router.pathname === "/menu/sorrento") {
                  setState(!state);
                }
              }}
            >
              <span className="side-menu-span">Sorrento</span>
            </Link>
          </motion.li>
          <motion.li variants={childAnimations}>
            <Link
              href={`/events`}
              className={
                router.pathname === "/events"
                  ? "side-menu-link active-link"
                  : "side-menu-link"
              }
              onClick={() => {
                if (router.pathname === "/events") {
                  setState(!state);
                }
              }}
            >
              <span className="side-menu-span">Evenements</span>
            </Link>
          </motion.li>
          <motion.li variants={childAnimations}>
            {" "}
            <Link
              href={`/contact`}
              className={
                router.pathname === "/contact"
                  ? "side-menu-link active-link"
                  : "side-menu-link"
              }
              onClick={() => {
                if (router.pathname === "/contact") {
                  setState(!state);
                }
              }}
            >
              <span className="side-menu-span">Contact</span>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
      <motion.div
        className="side-menu-socials"
        animate="show"
        initial="hidden"
        exit="exit"
        variants={parentAnimations}
      >
        <motion.a
          variants={childAnimations}
          href={data?.facebookLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="socials-wrp">
            <FacebookIcon />
          </div>
        </motion.a>
        <motion.a
          variants={childAnimations}
          href={data?.instagramLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="socials-wrp">
            <InstagramIcon />
          </div>
        </motion.a>
        <motion.a
          variants={childAnimations}
          href={data?.tripAdvisorLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="socials-wrp">
            <TripadvisorIcon />
          </div>
        </motion.a>
      </motion.div>
      <motion.div
        className="copyright-div"
        animate="show"
        initial="hidden"
        variants={parentAnimations}
      >
        <span className="data">Little Italy</span>
        <span className="data">
          © {new Date().getFullYear()} Tous droits réservés
        </span>
      </motion.div>
    </Container>
  );
};

export default SideMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 999;
  .side-menu-top {
    height: 130px;
    display: flex;
    margin: 0 1em;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: flex;
    align-items: center;
    justify-content: right;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  svg {
    cursor: pointer;
    fill: #444444;
    g {
      fill: #444444;
      path {
        fill: #444444;
      }
    }
  }
  .logo-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  li {
    list-style: none;
  }
  .side-menu-nav {
    padding: 1em;
    .side-menu-link {
      transition: all 0.3s ease;
      font-weight: 400;
      color: #444444;
      font-size: 1.75rem;
      margin: 0.1em 0;
      &:hover {
        padding-left: 2px;
        color: #98694c;
      }
    }
    .active-link {
      font-weight: 700;
      color: #222222;
    }
    .side-menu-span {
    }
  }
  .side-menu-socials {
    display: flex;
    align-items: center;
    margin: auto 1em 1em 1em;
    justify-content: space-around;
    .socials-wrp {
      box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%),
        0 12px 24px rgb(0 0 0 / 5%);
      width: 50px;
      height: 50px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s;
      cursor: pointer;
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
      fill: #98694c !important;
      transition: all 0.4s;
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
  .copyright-div {
    border-top: 1px solid #98694c;
    border-bottom: 1px solid #98694c;
    margin: 2em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: rgba(0, 0, 0, 0.8);
  }
  @media only screen and (max-width: 768px) {
    .copyright-div {
      margin: 0.75em 1.5em 1.5em 1.5em;
      .data {
        font-size: 14px;
      }
    }
    .side-menu-links {
      padding: 1.5em;
      .side-menu-h4 {
        font-size: 1.5rem;
      }
    }
  }
`;
