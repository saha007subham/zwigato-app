import "./Body.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_RESTAURANT } from "../../constants";
import TrendingMenu from "../../components/TrendingMenu";
import RestaurantCard from "../../components/RestaurantCard";
import Shimmer from "../../components/Shimmer";
import { SearchContext } from "../../context/SearchContext";
import { MOCK_RESTAURANTS } from "../../utils/resData";

const Body = () => {
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);

  const { searchValue } = useContext(SearchContext);

  const getRestro = async () => {
    // Temporarily using mock data to bypass CORS or API changes
    // const res = await fetch(GET_ALL_RESTAURANT);
    // const data = await res.json();

    const data = MOCK_RESTAURANTS;

    const restaurants =
      data?.data?.cards?.find(
        (c) => c?.card?.card?.id === "restaurant_grid_listing_v2"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setAllRestro(restaurants);
    setFilterRestro(restaurants);
  };

  useEffect(() => {
    getRestro();
  }, []);

  if (filteredRestro?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <TrendingMenu />
      <div className="restaurant__container">
        {filteredRestro
          ?.filter((val) => {
            if (searchValue === "") {
              return true;
            }
            return val?.info?.name
              ?.toLowerCase()
              .includes(searchValue.toLowerCase());
          })
          .map((res) => {
            return (
              <Link
                to={"/restraunts/" + res?.info?.id}
                key={res?.info?.id}
                className="restaurant-cards"
              >
                <RestaurantCard
                  {...res?.info}
                  deliveryTime={res?.info?.sla?.deliveryTime}
                  costForTwoString={res?.info?.costForTwo}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
