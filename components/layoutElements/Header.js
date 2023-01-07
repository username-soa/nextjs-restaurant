import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { returnClassNames } from "../../utils/functions";
import LogoIcon from "../../assets/svg/little-italy-logo.svg";
import useScrollIndicator from "../../hooks/useScrollIndicator";

const Header = ({
  fixed = true,
  blurred = true,
  dark = true,
  state,
  setState,
}) => {
  const router = useRouter();
  const { padding, boxShadow } = useScrollIndicator();

  return (
    <Container
      className={returnClassNames({ fixed, blurred, dark })}
      style={{
        paddingTop: `${padding}px`,
        paddingBottom: `${padding / 2}px`,
        borderBottom: `2px solid rgb(0 0 0 / ${boxShadow})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="header-content">
        <div className="header-logo">
          <Link href="/">
            <motion.div
              animate="visible"
              initial="hidden"
              className="logo-icon"
            >
              <LogoIcon />
            </motion.div>
          </Link>
        </div>
        <nav className="header-menu">
          <Link
            href={`/`}
            className={
              router.pathname === "/" ? "top-link active-link" : "top-link"
            }
          >
            <span className="links-top-span">Accueil</span>
          </Link>
          <Link
            href={`/menu`}
            className={
              router.pathname === "/menu" ? "top-link active-link" : "top-link"
            }
          >
            <span className="links-top-span">Menu</span>
          </Link>
          <Link
            href={`/menu/sorrento`}
            className={
              router.pathname === "/menu/sorrento"
                ? "top-link active-link"
                : "top-link"
            }
          >
            <span className="links-top-span">Sorrento</span>
          </Link>
          <Link
            href={`/events`}
            className={
              router.pathname === "/events"
                ? "top-link active-link"
                : "top-link"
            }
          >
            <span className="links-top-span">Evenements</span>
          </Link>
          <Link
            href={`/contact`}
            className={
              router.pathname === "/contact"
                ? "top-link active-link"
                : "top-link"
            }
          >
            <span className="links-top-span">Contact</span>
          </Link>
        </nav>
        <div className="mobile-nav-container">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            datahide="true"
            onClick={() => {
              setState(!state);
            }}
          >
            <path
              d="M2.5 7.5H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2.5 12.5H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  padding: 2em 0;
  z-index: 20;
  width: 100%;
  .mobile-nav-container {
    display: none;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .header-content {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    width: clamp(70%, 1140px, 90%);
  }
  &.blurred {
    backdrop-filter: saturate(180%) blur(8px);
  }
  &.fixed {
    position: sticky;
    top: 0;
  }
  &.dark {
    background: hsla(0, 0%, 100%, 0.8);

    svg {
      fill: #444444;
      g {
        fill: #444444;
        path {
          fill: #444444;
        }
      }
    }
    .top-link {
      color: #444444;
      &:hover {
        background: #f3efef;
      }
    }
    .active-link {
      color: #222222;
      font-weight: 600;
    }
  }
  &.transparent {
    background: transparent;
    svg {
      fill: #fff !important;
      g {
        fill: #fff !important;
        path {
          fill: #fff !important;
        }
      }
    }
    .top-link {
      color: #ccc;
      &:hover {
        color: #222222;
        background: #f3efef;
      }
    }
    .active-link {
      color: #fff;
      font-weight: 600;
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
  svg {
    cursor: pointer;
  }
  .header-menu {
    gap: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .top-link {
    font-weight: 400;
    padding: 5px 10px;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  @media only screen and (max-width: 1400px) {
    .header-content {
      width: unset;
      margin: 0 4em;
    }
  }
  @media only screen and (max-width: 1200px) {
    .header-content {
      margin: 0 2em;
    }
  }
  @media only screen and (max-width: 768px) {
    .header-content {
      margin: 0 1em;
    }
    .mobile-nav-container {
      display: flex;
    }
    .header-menu {
      display: none;
    }
  }
`;
