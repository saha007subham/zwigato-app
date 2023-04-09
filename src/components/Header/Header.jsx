import React from "react";
import "./Header.css";
import Searchbar from "../Searchbar/Searchbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBoltCircle } from "react-icons/bi";
import { BiBuoy } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header__main-div">
      <div style={{ cursor: "pointer" }}>
        <h1 className="headtext__cormorant">Zwigato</h1>
      </div>

      <Searchbar />

      <div>
        <ul className="header__ul">
          <li className="header__icons">
            <BiBoltCircle size={20} />
            Offers
          </li>
          <li className="header__icons">
            <BiBuoy size={20} />
            Instamart
          </li>
          <li className="header__icons">
            <BiCartAdd size={20} />
            Cart
          </li>
          <li className="header__icons">
            <BiUserCircle size={20} />
            Sign in
          </li>
        </ul>
        <div className="header__hamburger-menu">
          <GiHamburgerMenu size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
