import React from "react";
import Container from "../Container";
import Profile from "../../assets/profile.jpg";
import Skils from "../Skils/Skils";
import { motion } from "framer-motion";
const About = () => {
  return (
    <Container>
      <div
        id="about"
        className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between p-0 "
      >
        <div className="relative flex justify-center lg:justify-start w-full">
          <div className="relative h-80 w-72">
            <div className="bg-primary opacity-90 rounded-xl absolute inset-0 -z-10 transform translate-x-4 -translate-y-4 h-[350px]"></div>
            <img
              src={Profile}
              alt="image"
              className="h-full w-full z-10 rounded-xl shadow-sm"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <motion.h4
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: "1" }}
            className="uppercase font-semibold text-xl mb-2"
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
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "1" }}
                className="uppercase font-semibold text-xl mb-2"
              >
                education
              </motion.h4>
              <h5>BSc. (Hons.) in CSE</h5>
              <h5 className="uppercase">BGC Trust University Bangladesh</h5>
              <span>2020-2023</span>
            </div>
            <div>
              <motion.h4
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "1" }}
                className="uppercase font-semibold text-xl mb-2"
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
