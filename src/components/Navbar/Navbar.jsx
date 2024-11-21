import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav/MobileNav";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import logo from "../../assets/portlogo.png";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper font-primary">
        <div className="nav-content">
          <div className="flex justify-start bg-primary rounded-md">
            <img src={logo} className="h-10 w-12 -ms-0.5 " alt="" />
          </div>
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
                className="bg-primary flex items-center gap-2 text-white uppercase text-xs font-bold px-4 py-2 rounded-md"
              >
                Download Resume{" "}
                <AiOutlineDownload className=" text-sm font-bold" />
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
