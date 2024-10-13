import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav/MobileNav";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper border-b font-primary">
        <div className="nav-content">
          <h1 className="font-title text-2xl font-bold">Akther</h1>
          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-item">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="menu-item">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact
              </a>
            </li>
            <li>
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1i--qbJEIa6hNs-l47rRZ9FCffezr_AxT"
                target="_blank"
                download="Akther_Hosen_Resume.pdf"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary text-white uppercase text-xs font-bold px-3 py-2 rounded-full"
              >
                Download Resume
              </motion.a>
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
