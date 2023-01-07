import React from "react";
import styled from "styled-components";
import FoodCard from "../cards/FoodCard";
import DrinksCard from "../cards/DrinksCard";

const FoodMenuSection = ({ state, meals, drinks, handlePopup }) => {
  return (
    <Container>
      {state === "repas" && (
        <div className="food-menu-container">
          {meals
            .sort((a, b) => a.meals.length - b.meals.length)
            .map((item, index) => {
              return (
                <FoodCard
                  handleClick={() => {
                    handlePopup({ status: true, data: item });
                  }}
                  image={item.image}
                  meals={item.meals}
                  name={item.category}
                  key={`food-card-${index}`}
                />
              );
            })}
        </div>
      )}
      {state === "boissons" && (
        <div className="drinks-menu-container">
          {drinks
            .sort((a, b) => a.drinks.length - b.drinks.length)
            .map((item, index) => {
              return (
                <DrinksCard
                  name={item.category}
                  drinks={item.drinks}
                  key={`drink-card-${index}`}
                />
              );
            })}
        </div>
      )}
    </Container>
  );
};

export default FoodMenuSection;

const Container = styled.section`
  .drinks-menu-container,
  .food-menu-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.25em;
    padding: 2em 0;
  }
  @media only screen and (max-width: 768px) {
    .drinks-menu-container,
    .food-menu-container {
      grid-template-columns: 100%;
    }
  }
`;
