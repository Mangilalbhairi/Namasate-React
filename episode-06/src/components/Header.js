import React  from "react";
import ReactDOM from "react-dom/client";
import {URL_LOGO} from "../utils/constant.js"
import {useState, useEffect} from "react";

const Header = () => {
const [btnText, setBtnText] = useState("login")
const btnStateChange = () => {
  btnText == "login" ? setBtnText("logout"):setBtnText("login");
}
    return (
      <div className="header">
        <div className="logo">
          <img
            alt="logo"
            src={URL_LOGO}//logo path
          />
        </div>
        <div className="nav-iteam">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login-btn btn" onClick={btnStateChange}>{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;