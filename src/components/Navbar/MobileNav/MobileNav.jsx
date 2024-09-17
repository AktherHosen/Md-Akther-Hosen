import React from "react";
import "./MobileNav.css";
import logo from "../../../assets/portlogo.png";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img src={logo} className="logo" alt="" />

        <ul>
          <li>
            <a href="#" className="menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
