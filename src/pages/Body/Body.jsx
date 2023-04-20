import React, { useEffect, useState } from "react";
import TrendingMenu from "../../components/TrendingMenu";
import RestaurantCard from "../../components/RestaurantCard";
import { Link } from "react-router-dom";
import "./Body.css";

//COmponents

const Body = () => {
  const [search, setSearch] = useState("");
  const [filteredRestro, setFilterRestro] = useState([]);
  const [allRestro, setAllRestro] = useState([]);

  const getRestro = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.71693713897372&lng=88.43584332615137&page_type=DESKTOP_WEB_LISTING"
    );

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
