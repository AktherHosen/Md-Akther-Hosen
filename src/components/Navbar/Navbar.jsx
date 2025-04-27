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
      <nav className="sticky-navbar  w-full px-4 h-[60px] py-6 relative">
        <div className="flex justify-between items-start">
          <div className=" rounded-md ">
            <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center bg-bg-gray-400 text-white rounded-full p-1">
              <li
                className={`${
                  activeTab === 1 && "!bg-primary !text-[#fff]"
                } px-6 py-2 transition duration-300 rounded-full cursor-pointer`}
                onClick={() => setactiveTab(1)}
              >
                Home
              </li>
              <li
                className={`${
                  activeTab === 2 && "!bg-[#3B9DF8] !text-[#fff]"
                } px-6 py-2 transition duration-300 rounded-full cursor-pointer`}
                onClick={() => setactiveTab(2)}
              >
                About
              </li>
              <li
                className={`${
                  activeTab === 3 && "!bg-[#3B9DF8] !text-[#fff]"
                } px-6 py-2 transition duration-300 rounded-full cursor-pointer`}
                onClick={() => setactiveTab(3)}
              >
                Project
              </li>
              <li
                className={`${
                  activeTab === 4 && "!bg-[#3B9DF8] !text-[#fff]"
                } px-6 py-2 transition duration-300 rounded-full cursor-pointer`}
                onClick={() => setactiveTab(4)}
              >
                Contact
              </li>
            </ul>
          </div>

          {/* Download Resume */}
          <div className="hidden md:block">
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

        {/* Mobile menu toggle */}
        <div className="items-center gap-[10px] flex md:hidden">
          <motion.div
            variants={iconVariants}
            animate={mobileSidebarOpen ? "open" : "closed"}
          >
            {mobileSidebarOpen ? (
              <X
                className="text-[1.8rem] text-primary cursor-pointer"
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              />
            ) : (
              <AlignLeft
                className="text-[1.8rem] text-primary cursor-pointer"
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              />
            )}
          </motion.div>
        </div>

        {/* Sidebar (Mobile) */}
        <aside
          className={`${
            mobileSidebarOpen ? "block" : "hidden"
          } md:hidden bg-primary text-white boxShadow p-4 text-start absolute top-[65px] right-1 max-w-[220px] rounded-md transition-all duration-300 z-50`}
        >
          <ul className="items-center gap-[2px] text-[1rem] flex flex-col">
            <li className="py-1">
              <a
                href="#"
                className="relative block hover:text-white transition-all duration-300 before:bg-white before:h-[2px] before:w-0 hover:before:w-full before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
              >
                Home
              </a>
            </li>
            <li className="py-1">
              <a
                href="#about"
                className="relative block hover:text-white transition-all duration-300 before:bg-white before:h-[2px] before:w-0 hover:before:w-full before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
              >
                About
              </a>
            </li>
            <li className="py-1">
              <a
                href="#project"
                className="relative block hover:text-white transition-all duration-300 before:bg-white before:h-[2px] before:w-0 hover:before:w-full before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
              >
                Project
              </a>
            </li>
            <li className="py-1">
              <a
                href="#contact"
                className="relative block hover:text-white transition-all duration-300 before:bg-white before:h-[2px] before:w-0 hover:before:w-full before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0"
              >
                Contact
              </a>
            </li>
            <li className="py-1">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1i--qbJEIa6hNs-l47rRZ9FCffezr_AxT"
                target="_blank"
                download="Akther_Hosen_Resume.pdf"
                whileTap={{ scale: 0.9 }}
                className="bg-white flex items-center gap-1 text-primary uppercase text-xs font-bold px-2 py-2 rounded-md"
              >
                <Download size={16} /> Download Resume
              </motion.a>
            </li>
          </ul>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
