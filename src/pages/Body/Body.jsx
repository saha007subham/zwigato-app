import "./Body.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_RESTAURANT } from "../../constants";
import TrendingMenu from "../../components/TrendingMenu";
import RestaurantCard from "../../components/RestaurantCard";
import Shimmer from "../../components/Shimmer";
import { SearchContext } from "../../context/SearchContext";

const Body = () => {
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);

  const { searchValue } = useContext(SearchContext);

  const getRestro = async () => {
    const res = await fetch(GET_ALL_RESTAURANT);

    const data = await res.json();

    // setAllRestro(data?.data?.cards[2]?.data?.data?.cards);
    // setFilterRestro(data?.data?.cards[2]?.data?.data?.cards);
    const restaurants =
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(restaurants);

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
