import React from "react";
import Container from "../Container";
import Profile from "../../assets/profile.jpg";
import Skils from "../Skils/Skils";
import SplitText from "../../utils/SplitText";
const About = () => {
  return (
    <Container>
      <div
        id="about"
        className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between p-0 font-rubik"
      >
        <div className="relative flex justify-center lg:justify-start w-full">
          <div className="relative h-80 w-72">
            <div className="bg-secondary opacity-90 rounded-xl absolute inset-0 -z-10 transform translate-x-4 -translate-y-4 h-[350px]"></div>
            <img
              src={Profile}
              alt="image"
              className="h-full w-full z-10 rounded-xl shadow-sm "
            />
          </div>
        </div>

        <div className="w-full">
          <SplitText
            text="introduction"
            className="uppercase font-semibold text-xl mb-2"
          ></SplitText>

          <SplitText
            text={
              <>
                I'm a skilled Web Developer with experience in JavaScript, &
                expertise in frameworks like React, Node.js. I'm a quick learner
                & collaborate closely with clients to create efficient,
                scalable, & user-friendly solutions that solve real-world
                problems. Let's work together to bring your ideas to life!
              </>
            }
            className="text-sm md:text-lg text-wrap"
          />
          <Skils />
          <div className="flex justify-between">
            <div>
              <SplitText
                text="education"
                className="uppercase font-semibold text-xl mb-2"
              ></SplitText>

              <p className="text-sm md:text-lg">BSc. (Hons.) in CSE</p>
              <p className="text-sm md:text-lg ">
                BGC Trust University Bangladesh
              </p>
              <span className="text-sm md:text-lg">2020-2023</span>
            </div>
            <div>
              <SplitText
                text="Experience"
                className="uppercase font-semibold text-xl mb-2"
              ></SplitText>
              <p className="text-sm md:text-lg">Jr. Web Developer</p>
              <p className=" text-sm md:text-lg ">Devsbrain</p>
              <span className="text-sm md:text-lg">Dec 24 - Continue</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
