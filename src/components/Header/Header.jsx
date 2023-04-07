import React from "react";
import "./Header.css";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  return (
    <div className="header__main-div">
      <h1 className="headtext__cormorant">Zwigato</h1>
      <Searchbar />
      <ul className="header__ul">
        <li>Offers</li>
        <li>Help</li>
        <li>Cart</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};

export default Header;
