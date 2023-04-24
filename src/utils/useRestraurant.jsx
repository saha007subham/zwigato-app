import { useEffect, useState } from "react";
import { FOOD_MENU } from "../constants";

const useRestraurant = (id) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const res = await fetch(FOOD_MENU + id);

    const data = await res.json();
    setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    console.log("DATA--->", data?.data?.cards[0]?.card?.card?.info);
  };

  return restaurant;
};

export default useRestraurant;
