import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBoltCircle } from "react-icons/bi";
import { BiBuoy } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header__main-div">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ cursor: "pointer" }}>
          <h1 className="headtext__cormorant">Zwigato</h1>
        </div>
      </Link>

      <Searchbar />

      <div>
        <ul className="header__ul">
          <Link to="/offer" className="link-tag">
            <li className="header__icons">
              <BiBoltCircle size={20} />
              Offers
            </li>
          </Link>

          <li className="header__icons">
            <BiBuoy size={20} />
            Instamart
          </li>

          <Link to="/cart" className="link-tag">
            <li className="header__icons">
              <BiCartAdd size={20} />
              Cart {cartItems.length}
            </li>
          </Link>
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
