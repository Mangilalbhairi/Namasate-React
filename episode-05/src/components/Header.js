import React  from "react";
import ReactDOM from "react-dom/client";
import {URL_LOGO} from "../utils/constant.js"

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            alt="logo"
            src={URL_LOGO}
          />
        </div>
        <div className="nav-iteam">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;