import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import logo from "../../assets/portlogo.png";
import { AlignLeft, X, Download } from "lucide-react";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setactiveTab] = useState(1);

  const iconVariants = {
    open: {
      rotate: 180,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300, damping: 50 },
    },
    closed: {
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 50 },
    },
  };

  return (
    <>
      <nav className="sticky-navbar w-full px-4 py-4 relative font-rubik">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="rounded-md hidden md:block">
            <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
          </div>
          <ul className="flex items-center bg-secondary text-white rounded-full p-1 mb-4 md:mb-0">
            <li
              className={`${
                activeTab === 1 && "!bg-gray-600 !text-[#fff]"
              } px-4 py-1 transition duration-300 rounded-full cursor-pointer`}
              onClick={() => setactiveTab(1)}
            >
              <a href="#">Home</a>
            </li>
            <li
              className={`${
                activeTab === 2 && "!bg-gray-600 !text-[#fff]"
              } px-4 py-1 transition duration-300 rounded-full cursor-pointer`}
              onClick={() => setactiveTab(2)}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`${
                activeTab === 3 && "!bg-gray-600 !text-[#fff]"
              } px-4 py-1 transition duration-300 rounded-full cursor-pointer`}
              onClick={() => setactiveTab(3)}
            >
              <a href="#project">Project</a>
            </li>
            <li
              className={`${
                activeTab === 4 && "!bg-gray-600 !text-[#fff]"
              } px-4 py-1 transition duration-300 rounded-full cursor-pointer`}
              onClick={() => setactiveTab(4)}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Download Button (Desktop only) */}
          <div className="hidden md:block ml-4">
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1i--qbJEIa6hNs-l47rRZ9FCffezr_AxT"
              target="_blank"
              download="Akther_Hosen_Resume.pdf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary flex items-center gap-2 text-white uppercase text-xs font-bold px-4 py-2 rounded-md"
            >
              <Download size={16} /> Get Resume
            </motion.a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
