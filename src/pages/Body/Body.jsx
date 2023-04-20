import "./Body.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_RESTAURANT } from "../../constants";
import TrendingMenu from "../../components/TrendingMenu";
import RestaurantCard from "../../components/RestaurantCard";

const Body = () => {
  const [search, setSearch] = useState("");
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);

  const getRestro = async () => {
    const res = await fetch(GET_ALL_RESTAURANT);

    const data = await res.json();

    // console.log(data);

    setAllRestro(data?.data?.cards[2]?.data?.data?.cards);
    setFilterRestro(data?.data?.cards[2]?.data?.data?.cards);
    // console.log(filteredRestro);
  };

  useEffect(() => {
    getRestro();
  }, []);

  // console.log(filteredRestro);

  return (
    <div>
      <TrendingMenu />
      <div className="restaurant__container">
        {filteredRestro?.map((res) => {
          console.log(res.data);
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
