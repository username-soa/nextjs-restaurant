import React, { createContext, useState } from "react";
import { restaurantInfo } from "../utils/generalInfo";

const RestaurantLocationContext = createContext({});

export const RestaurantLocationProvider = ({ children }) => {
  const [restaurantLocation, setRestaurantLocation] = useState(
    restaurantInfo.locations[0]
  );
  const restaurantLocationContext = {
    restaurantLocation,
    setRestaurantLocation,
  };

  return (
    <RestaurantLocationContext.Provider value={restaurantLocationContext}>
      {children}
    </RestaurantLocationContext.Provider>
  );
};

export const RestaurantLocationConsumer = RestaurantLocationContext.Consumer;

export default RestaurantLocationContext;
