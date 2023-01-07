import React from "react";
import Head from "next/head";
import styled from "styled-components";
import MainSection from "../../components/sections/MainSection";
import SorrentoMain from "../../components/sections/SorrentoMain";
import SorrentoMenuCard from "../../components/cards/SorrentoMenuCard";
import { restaurantInfo, sorrentoMenu } from "../../utils/generalInfo";
import { returnDirection } from "../../utils/functions";

const pageTitle = `Menu Sorrento - ${restaurantInfo.name}`;

const sorrento = () => {
  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={restaurantInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <SorrentoMain />
        {sorrentoMenu.map((item, index) => {
          return (
            <SorrentoMenuCard
              title={item.name}
              image={item.image}
              meals={item.meals}
              nextCard={item.name === "terra" ? "mare" : "terra"}
              description={item.description}
              direction={returnDirection(index)}
              key={`sorrento-menu-card-${index}`}
            />
          );
        })}
      </MainSection>
    </Container>
  );
};

export default sorrento;

const Container = styled.div``;
