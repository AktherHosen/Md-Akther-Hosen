import React from "react";
import Container from "../Container";
import Profile from "../../assets/profile.jpg";
import Skils from "../Skils/Skils";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
const About = () => {
  return (
    <Container>
      <SectionTitle title="About Me" />
      <div
        id="about"
        className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between p-0"
      >
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start  relative">
          <img src={Profile} alt="image" className="h-80 w-72 z-10" />
          <div className="bg-gray-100 opacity-100 h-80 w-72 shadow-sm absolute  translate-x-4 translate-y-4"></div>
        </div>

        <div className="w-full lg:w-2/3">
          <motion.h4
            initial={{ y: -10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: "1" }}
            className="uppercase font-semibold text-xl"
          >
            introduction
          </motion.h4>
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            I'm a skilled Web Developer with experience in JavaScript, and
            expertise in framworks like React, Node.js. I'm a quick learner and
            collaborate-closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problem. <br />
            Let's work together to bring your ideas life!
          </motion.p>
          <Skils />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <motion.h4
                initial={{ y: -10 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "1" }}
                className="uppercase font-semibold text-xl"
              >
                education
              </motion.h4>
              <h5>BSc. (Hons.) in CSE</h5>
              <h5 className="uppercase">BGC Trust University Bangladesh</h5>
              <span>2020-2023</span>
            </div>
            <div>
              <motion.h4
                initial={{ y: -10 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "1" }}
                className="uppercase font-semibold text-xl"
              >
                Experience
              </motion.h4>
              <h5>NA</h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
