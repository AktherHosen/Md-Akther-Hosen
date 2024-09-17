import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav/MobileNav";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from "../../assets/portlogo.png";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <RiCloseLargeFill className="inline" size={30} />
            ) : (
              <GiHamburgerMenu className="inline" size={30} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
