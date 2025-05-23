import React from "react";
import Container from "../Container";
import { FaGithub, FaLink } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SplitText from "../../utils/SplitText";
const Projects = () => {
  return (
    <Container>
      <SplitText
        text="Latest Project"
        className="text-xl font-bold uppercase underline underline-offset-4"
      />
      <div
        id="project"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6 font-rubik"
      >
        <motion.div
          initial={{ y: -20 }}
          transition={{ duration: "2" }}
          whileInView={{ y: 0 }}
          className="min-h-[400px] bg-secondary text-white p-4 rounded-2xl"
        >
          <div>
            <img
              src="https://i.ibb.co.com/QXw5yNz/donorhive.png"
              alt=""
              className="rounded-2xl h-[190px] w-full"
            />
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold font-primary text-2xl">Donor Hive</h2>
              <div className=" top-4 right-0 flex gap-1">
                <Link
                  to="https://donor-hive.web.app/"
                  target="_blank"
                  className="   text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <HiOutlineLink className="text-white" />
                </Link>
                <Link
                  to="https://github.com/AktherHosen/donorhive-client"
                  target="_blank"
                  className="  text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <FaGithub className="text-white" />
                </Link>
              </div>
            </div>
            <p className="text-[0.8rem] lg:text-[0.8rem] text-gray-100 lg:text-justify">
              Donor Hive is an innovative platform designed to connect blood
              donors with recipients in need. This user-friendly web application
              allows individuals to create profiles, track donation history, and
              receive real-time notifications about nearby donation
              opportunities. By fostering a supportive community, Donor Hive
              aims to save lives through seamless blood donation platform.
            </p>
            <div className="flex flex-wrap text-xs gap-x-2 gap-y-2 font-semibold">
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                React
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                TailwindCSS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Node.js
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                ExpressJS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                MongoDB
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Firebase
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{ duration: "3" }}
          whileInView={{ y: 0 }}
          className="min-h-[400px] bg-secondary text-white p-4 rounded-2xl"
        >
          <div className="">
            <img
              src="https://i.ibb.co.com/8x69ZJb/blognest.png"
              alt=""
              className="rounded-2xl h-[190px] w-full"
            />
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">Blog Nest</h2>
              <div className=" top-4 right-0 flex gap-1">
                <Link
                  to="https://blog-nest-9b582.web.app/"
                  target="_blank"
                  className="text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <HiOutlineLink className="text-white" />
                </Link>
                <Link
                  to="https://github.com/aktherHosen/blogNest-client/"
                  target="_blank"
                  className="text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <FaGithub className="text-white" />
                </Link>
              </div>
            </div>
            <p className="text-[0.8rem] lg:text-[0.8rem] text-gray-200 lg:text-justify">
              BlogNest is a dynamic blogging platform that empowers users to
              create, share, and discover engaging content. With a user-friendly
              interface, it allows authors to publish posts easily, interact
              with readers through comments, and manage their profiles. The
              platform fosters community engagement by enabling users to follow
              each other and receive personalized updates.
            </p>
            <div className="flex flex-wrap text-xs gap-2 font-semibold">
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                React
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                TailwindCSS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Node.js
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                ExpressJS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                MongoDB
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Firebase
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          transition={{ duration: "4" }}
          whileInView={{ y: 0 }}
          className="min-h-[400px] bg-secondary text-white p-4 rounded-2xl"
        >
          <div className="">
            <img
              src="https://i.ibb.co.com/hRMb0swX/project4.png"
              alt=""
              className="rounded-2xl h-[190px] w-full"
            />
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">E-Restaurant</h2>
              <div className=" top-4 right-0 flex gap-1">
                <Link
                  to="https://restaurant-beige-zeta.vercel.app/"
                  target="_blank"
                  className="text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <HiOutlineLink className="text-white" />
                </Link>
                <Link
                  to="https://github.com/AktherHosen/Restaurant"
                  target="_blank"
                  className="text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <FaGithub className="text-white" />
                </Link>
              </div>
            </div>
            <p className="text-[0.8rem] lg:text-[0.8rem] text-gray-200 lg:text-justify">
              A modern, responsive restaurant landing page featuring smooth
              navigation and engaging visuals. The design showcases featured
              dishes, promotes key offerings, and includes a functional booking
              form to reserve tables directly from the site. Optimized for both
              performance and user experience.
            </p>
            <div className="flex flex-wrap text-xs gap-2 font-semibold">
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                React
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                TailwindCSS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                JavaScript
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Swiper.js
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{ duration: "4" }}
          whileInView={{ y: 0 }}
          className="min-h-[400px] bg-secondary text-white p-4 rounded-2xl"
        >
          <div className="">
            <img
              src="https://i.ibb.co.com/yX92KRN/artcraft.png"
              alt=""
              className="rounded-2xl h-[190px] w-full"
            />
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">Art Craft</h2>
              <div className=" top-4 right-0 flex gap-1">
                <Link
                  to="https://artcraft-54e63.web.app/"
                  target="_blank"
                  className="text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <HiOutlineLink className="text-white" />
                </Link>
                <Link
                  to="https://github.com/AktherHosen/artCraft-client"
                  target="_blank"
                  className="text-[1.1rem] bg-gray-900 p-2 hover:bg-primary transition-all duration-300 rounded-full"
                >
                  <FaGithub className="text-white" />
                </Link>
              </div>
            </div>
            <p className="text-[0.8rem] lg:text-[0.8rem] text-gray-200 lg:text-justify">
              ArtCraft is a fully responsive online marketplace for artists and
              crafters, optimized for all devices. Users can register, log in,
              and authenticate via email or third-party services like Google and
              GitHub. They can add, update, or delete craft items, browse
              categories, filter by customization options, and switch themes for
              a personalized experience.
            </p>
            <div className="flex flex-wrap text-xs gap-2 font-semibold">
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                React
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                TailwindCSS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Node.js
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                ExpressJS
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                MongoDB
              </p>
              <p className="text-gray-300 border rounded-full px-2 py-[0.1rem] border-gray-600">
                Firebase
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Projects;
