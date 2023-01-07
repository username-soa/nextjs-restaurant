import React from "react";
import Head from "next/head";
import styled from "styled-components";
import MainSection from "../../components/sections/MainSection";
import PageTitleCard from "../../components/cards/PageTitleCard";
import EventsListSection from "../../components/sections/EventsListSection";
import { restaurantInfo, eventsList } from "../../utils/generalInfo";

const pageTitle = `Evenements - ${restaurantInfo.name}`;

const events = () => {
  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={restaurantInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <PageTitleCard title="Nous Evenements" />
        <EventsListSection title="Toute L'actualité" data={eventsList} />
      </MainSection>
    </Container>
  );
};

export default events;

const Container = styled.div``;
