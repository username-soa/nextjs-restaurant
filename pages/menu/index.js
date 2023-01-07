import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import Portal from "../../components/elements/Portal";
import MainSection from "../../components/sections/MainSection";
import FoodMenuNav from "../../components/elements/FoodMenuNav";
import PageTitleCard from "../../components/cards/PageTitleCard";
import FoodItemModal from "../../components/elements/FoodItemModal";
import FoodMenuSection from "../../components/sections/FoodMenuSection";
import { restaurantInfo, mealsList, drinksList } from "../../utils/generalInfo";

const pageTitle = `Menu - ${restaurantInfo.name}`;

const Menu = () => {
  const { query } = useRouter();
  const [food, setFood] = useState("repas");
  const [popup, setPopup] = useState({ status: null, data: null });

  useEffect(() => {
    if (query.category) {
      setFood(query.category);
    }
  }, [query]);

  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={restaurantInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <PageTitleCard title="Notre Menu" />
        <FoodMenuNav setState={setFood} state={food} />
        <FoodMenuSection
          state={food}
          popup={popup}
          handlePopup={setPopup}
          drinks={drinksList}
          meals={mealsList}
        />
      </MainSection>
      {popup.status && (
        <Portal>
          <FoodItemModal
            popup={popup}
            handleClose={() => {
              setPopup({ status: null, data: null });
            }}
          />
        </Portal>
      )}
    </Container>
  );
};

export default Menu;

const Container = styled.div``;
