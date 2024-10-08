import useOnlineStatus from "../utils/useOnlineStatus.js";
import {URL_LOGO} from "../utils/constant.js"
import React,{useState,} from "react";
import { Link } from "react-router-dom";

const Header = () => {
const [btnText, setBtnText] = useState("login")
const onlineStatus = useOnlineStatus();

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
            <li>Online Status {onlineStatus ?"🟢":"🔴"}</li>
            <li><Link to="/" className="link-style">Home</Link></li>
            <li><Link to="/about" className="link-style">About</Link></li>
            <li><Link to="/services" className="link-style">services</Link></li>
            <li><Link to="/contact" className="link-style">contact</Link></li>
            <li><Link to="/cart" className="link-style">Cart</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <button  className="login-btn btn" onClick={btnStateChange}>{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;