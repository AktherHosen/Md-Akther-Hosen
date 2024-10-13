import React from "react";
import Profile from "../../assets/profile.jpg";
// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="min-h-[200px] mt-10  py-10 px-4 ">
      <div className="flex flex-col items-center justify-center space-y-2">
        <img src={Profile} className="h-10 w-10 rounded-full" alt="" />
        <h4 className="font-title text-primary font-normal text-xl tracking-widest">
          Md. Akther Hosen
        </h4>
        <div className="flex gap-x-4 text-gray-600 font-primary">
          <a
            href="#"
            className="hover:underline hover:text-primary underline-offset-4 transition-all duration-400 italic"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:underline hover:text-primary underline-offset-4 transition-all duration-300 italic"
          >
            About
          </a>
          <a
            href="#works"
            className="hover:underline hover:text-primary underline-offset-4 transition-all duration-300 italic"
          >
            Works
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-primary underline-offset-4 transition-all duration-300 italic"
          >
            Contact
          </a>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="font-primary italic">
          All right reserved,2024{" "}
          <span className="font-title text-primary font-semibold">
            {" "}
            @Akther
          </span>
        </p>
        <div className="flex gap-4">
          <Link to="https://github.com/AktherHosen/" target="_blank">
            <FaGithub
              size={20}
              className="hover:text-primary transition-all hover:-translate-y-1"
            />
          </Link>

          <Link
            to="https://www.linkedin.com/in/md-akther-hosen"
            target="_blank"
          >
            <BsLinkedin
              size={20}
              className="hover:text-primary transition-all hover:-translate-y-1"
            />
          </Link>
          <Link to="https://www.facebook.com/nirjhor.nowshad/" target="_blank">
            <FaFacebookSquare
              size={20}
              className="hover:text-primary transition-all hover:-translate-y-1"
            />
          </Link>
          <Link to="https://x.com/AktherHosen165" target="_blank">
            {" "}
            <FaXTwitter
              size={20}
              className="hover:text-primary transition-all hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
