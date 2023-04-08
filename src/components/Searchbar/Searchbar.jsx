import React from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="searchbar__div">
      <BiSearch size={20} />
      <input
        className="searchbar"
        placeholder="Search for restaurants and food"
      />
    </div>
  );
};

export default Searchbar;
