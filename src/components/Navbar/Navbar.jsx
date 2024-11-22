import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import logo from "../../assets/portlogo.png";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Variants for the toggle icon animation
  const iconVariants = {
    open: {
      rotate: 180,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper font-primary ">
        <div className="nav-content ">
          <div className="flex justify-start bg-primary rounded-md">
            <img src={logo} className="h-10 w-12 -ms-0.5 " alt="Logo" />
          </div>
          <ul className={openMenu ? "show-menu" : ""}>
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
            <motion.div
              variants={iconVariants}
              animate={openMenu ? "open" : "closed"}
            >
              {openMenu ? (
                <RiCloseLargeFill className="inline" size={25} />
              ) : (
                <GiHamburgerMenu className="inline" size={30} />
              )}
            </motion.div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
