import React from "react";
import "./MobileNav.css";
import logo from "../../../assets/portlogo.png";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
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
              className="bg-white text-primary uppercase text-xs font-bold px-3 py-2 rounded-sm flex items-center justify-center gap-2"
            >
              Download Resume{" "}
              <AiOutlineDownload className=" font-bold text-sm" />
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
