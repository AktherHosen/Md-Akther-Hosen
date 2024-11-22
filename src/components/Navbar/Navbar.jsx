import React, { useState } from "react";
import "./Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import logo from "../../assets/portlogo.png";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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
    <nav className="sticky-navbar flex items-center justify-between w-full   px-[10px]  h-[60px] py-6">
      {/* Logo Section */}
      <div className="bg-primary rounded-md h-[40px] w-[40px]">
        <img src={logo} alt="logo" className="h-fit w-fit" />
      </div>

      {/* Desktop Navigation */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
        <a href="#">
          <li className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Home
          </li>
        </a>
        <a href="#about">
          <li className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize">
            About
          </li>
        </a>
        <a href="#project">
          <li className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Project
          </li>
        </a>
        <a href="#contact">
          <li className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Contact
          </li>
        </a>
        <li>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1i--qbJEIa6hNs-l47rRZ9FCffezr_AxT"
            target="_blank"
            download="Akther_Hosen_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary flex items-center gap-2 text-white uppercase text-xs font-bold px-4 py-2 rounded-md"
          >
            Download Resume <AiOutlineDownload className="text-sm font-bold" />
          </motion.a>
        </li>
      </ul>

      <div className="items-center gap-[10px] flex md:hidden">
        <motion.div
          variants={iconVariants}
          animate={mobileSidebarOpen ? "open" : "closed"}
        >
          {mobileSidebarOpen ? (
            <RiCloseLargeFill
              className="text-[1.8rem] text-primary cursor-pointer lg:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          ) : (
            <FaBarsStaggered
              className="text-[1.8rem] text-primary cursor-pointer lg:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          )}
        </motion.div>
      </div>

      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } lg:hidden bg-primary text-white boxShadow p-4 text-start absolute z-100 top-[65px] right-0 max-w-max rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[2px] text-[1rem] flex flex-col">
          <li className="py-1">
            <a
              href=""
              className="block hover:before:w-full before:bg-white before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-white transition-all duration-300 before:left-0"
            >
              Home
            </a>
          </li>
          <li className="py-1">
            <a
              href="#about"
              className="block hover:before:w-full before:bg-white before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-white transition-all duration-300 before:left-0"
            >
              About
            </a>
          </li>
          <li className="py-1">
            <a
              href="#project"
              className="block hover:before:w-full before:bg-white before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-white transition-all duration-300 before:left-0"
            >
              Project
            </a>
          </li>
          <li className="py-1">
            <a
              href="#contact"
              className="block hover:before:w-full before:bg-white before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-white transition-all duration-300 before:left-0"
            >
              Contact
            </a>
          </li>
          <li className="py-1">
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1i--qbJEIa6hNs-l47rRZ9FCffezr_AxT"
              target="_blank"
              download="Akther_Hosen_Resume.pdf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white flex items-center gap-2 text-primary uppercase text-xs font-bold px-4 py-2 rounded-md"
            >
              Download Resume{" "}
              <AiOutlineDownload className="text-sm font-bold" />
            </motion.a>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
