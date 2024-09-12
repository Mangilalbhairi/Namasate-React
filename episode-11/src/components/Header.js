import React from "react";
import { URL_LOGO } from "../utils/constant.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Header = () => {
  const onelineStatus = useOnlineStatus();
  const [btnText, setBtnText] = useState("login");
  const btnStateChange = () => {
    btnText == "login" ? setBtnText("logout") : setBtnText("login");
  };
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center   shadow-md px-10 bg-purple-300 sticky">
      <div className="border">
        <img
          className="w-20"
          alt="logo"
          src={URL_LOGO} //logo path
        />
      </div>
      <div className="">
        <ul className="flex items-center gap-6 text-red-100">
          <li>Online Status: {onelineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="link-style">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-style">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="link-style">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link-style">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="link-style">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link-style">
              Cart
            </Link>
          </li>
          <button className="login-btn btn" onClick={btnStateChange}>
            {btnText}
          </button>
          <li className="font-medium text-slate-600">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
