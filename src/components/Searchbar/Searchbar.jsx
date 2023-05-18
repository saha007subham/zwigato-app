import React, { useContext } from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";
import { SearchContext } from "../../context/SearchContext";

const Searchbar = () => {
  const { searchValue, updateSearchValue } = useContext(SearchContext);

  const handleSearch = (e) => {
    const value = e.target.value;
    updateSearchValue(value);
  };

  return (
    <div className="searchbar__div">
      <BiSearch size={20} />
      <input
        className="searchbar"
        placeholder="Search for restaurants and food"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
