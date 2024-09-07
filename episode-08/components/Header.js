import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <>
        <div className="header-section">
          <div className="logo">
            <h1>logo</h1>
          </div>
          <div className="navbar-section">
            <ul className="navbar-items">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          {/* <Outlet/> */}
        </div>
      </>
    );
  }
}
export default Header;
