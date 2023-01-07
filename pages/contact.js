import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Portal from "../components/elements/Portal";
import { restaurantInfo } from "../utils/generalInfo";
import ContactForm from "../components/forms/ContactForm";
import MainSection from "../components/sections/MainSection";
import NoticeModal from "../components/elements/NoticeModal";
import PageTitleCard from "../components/cards/PageTitleCard";
import ContactLocations from "../components/sections/ContactLocations";
import NewsLetterSection from "../components/sections/NewsLetterSection";

const pageTitle = `Contact - ${restaurantInfo.name}`;

const Contact = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={restaurantInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <PageTitleCard title="Contacter Nous" />
        <ContactLocations data={restaurantInfo.locations} />
        <ContactForm
          handleSubmit={() => {
            setShow(!show);
          }}
        />
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
};

export default Contact;

const Container = styled.div`
  .contact-h3 {
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
  .contact-title-description {
    padding-top: 0.5rem;
    color: ${({ theme }) => theme.colors.textDescription};
  }
`;
