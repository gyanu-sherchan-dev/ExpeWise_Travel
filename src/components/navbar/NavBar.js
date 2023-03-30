import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ExpeWise.</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
