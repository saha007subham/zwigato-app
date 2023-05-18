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

    setAllRestro(data?.data?.cards[2]?.data?.data?.cards);
    setFilterRestro(data?.data?.cards[2]?.data?.data?.cards);
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
              return val.data;
            } else if (
              val?.data?.name?.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val.data;
            }
          })
          .map((res) => {
            return (
              <Link
                to={"/restraunts/" + res.data.id}
                key={res.data.id}
                className="restaurant-cards"
              >
                <RestaurantCard {...res.data} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
