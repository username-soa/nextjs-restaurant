import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Portal from "../components/elements/Portal";
import NoticeModal from "../components/elements/NoticeModal";
import HeroSection from "../components/sections/HeroSection";
import MainSection from "../components/sections/MainSection";
import AboutSection from "../components/sections/AboutSection";
import ChefsSection from "../components/sections/ChefsSection";
import EventsSection from "../components/sections/EventsSection";
import GallerySection from "../components/sections/GallerySection";
import FoodCategorySection from "../components/sections/FoodCategorySection";
import NewsLetterSection from "../components/sections/NewsLetterSection";
import { restaurantInfo, galleryImages, chefsList } from "../utils/generalInfo";

const pageTitle = `Page d'accueil - ${restaurantInfo.name}`;

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={restaurantInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <MainSection>
        <FoodCategorySection />
        <AboutSection />
        <EventsSection />
        <GallerySection images={galleryImages} />
        <ChefsSection chefs={chefsList} />
        <NewsLetterSection
          handleSubmit={() => {
            setShow(!show);
          }}
        />
      </MainSection>
      {show && (
        <Portal>
          <NoticeModal
            title="Notice"
            description="This is only a UI template, for demonstration purposes only. All the data existing on this website is static. that goes for the products, login and signing up logic, cart logic,the contact form, newsletter form, and search functionality."
            handleClose={() => {
              setShow(!show);
            }}
          />
        </Portal>
      )}
    </Container>
  );
}

const Container = styled.div`
  .main-h3 {
    border: none;
    display: flex;
    overflow: hidden;
    max-height: 2.4em;
    position: relative;
    line-height: normal;
    padding-left: 0.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.textColor};
    &:before {
      width: 4px;
      height: 80%;
      content: "";
      align-self: center;
      position: absolute;
      border-radius: 12px;
      margin-left: -0.5rem;
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
  .main-title-description {
    padding-top: 0.5rem;
    color: ${({ theme }) => theme.colors.textDescription};
  }
`;
