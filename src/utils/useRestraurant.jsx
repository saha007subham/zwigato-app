import { useEffect, useState } from "react";

const useRestraurant = (id) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.71693713897372&lng=88.43584332615137&restaurantId=${id}`
    );

    const data = await res.json();
    setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    // console.log(data?.data?.cards[0]?.card?.card?.info);
  };

  return restaurant;
};

export default useRestraurant;
