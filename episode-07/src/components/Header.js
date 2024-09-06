import React  from "react";
import ReactDOM from "react-dom/client";
import {URL_LOGO} from "../utils/constant.js"
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

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
            <li><Link to="/" className="link-style">Home</Link></li>
            <li><Link to="/about" className="link-style">About</Link></li>
            <li><Link to="/services" className="link-style">services</Link></li>
            <li><Link to="/contact" className="link-style">contact</Link></li>
            <li><Link to="/cart" className="link-style">Cart</Link></li>
            <button  className="login-btn btn" onClick={btnStateChange}>{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;