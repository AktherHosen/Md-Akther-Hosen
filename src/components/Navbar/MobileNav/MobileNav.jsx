import React from "react";
import "./MobileNav.css";
import logo from "../../../assets/portlogo.png";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const MobileNav = ({ isOpen, toggleMenu }) => {
  // Variants for the dropdown animation
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20, // initially above the toggle button
    },
    visible: {
      opacity: 1,
      y: 0, // slide down to its normal position
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="mobile-nav-wrapper">
      <motion.div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={dropdownVariants}
        exit="hidden"
      >
        <div className="mobile-menu-container">
          <div className="flex justify-start">
            <img src={logo} className="h-20 -ms-2" alt="Logo" />
          </div>

          <ul>
            <li>
              <a
                href="#"
                className="menu-item hover:underline hover:underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="menu-item hover:underline hover:underline-offset-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="menu-item hover:underline hover:underline-offset-4"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="menu-item hover:underline hover:underline-offset-4"
              >
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
                className="bg-white text-primary uppercase text-xs font-bold px-3 py-2 rounded-sm flex items-center gap-2 w-fit"
              >
                Download Resume{" "}
                <AiOutlineDownload className="font-bold text-sm" />
              </motion.a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
