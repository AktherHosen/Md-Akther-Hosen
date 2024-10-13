import React from "react";

import Profile from "../../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { RiSendPlaneLine } from "react-icons/ri";
import Container from "../Container";
const Banner = () => {
  return (
    <Container>
      <div className="w-full bg-[#fff] rounded-md relative min-h-[500px]">
        {/* header */}
        <header className="flex lg:flex-row flex-col-reverse items-center gap-12 lg:gap-0  lg:justify-between  mt-14">
          <div className="w-full lg:w-[45%] space-y-3">
            <p>Hi there!</p>
            <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
              <span className="text-[#DC0155] font-title">Akther</span> is here
              to be your assistance
            </h1>

            <h3 className="text-lg mb-3">
              I'm your{" "}
              <span className="uppercase text-xl text-primary font-semibold">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Backend Developer",
                    "MERN Developer",
                    "Full Stack Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <a href="https://mdaktherhosen@gmail.com" target="_blank">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100"></span>
                <span className="relative text-primary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Let's Talk <RiSendPlaneLine className="inline" />
                </span>
              </button>
            </a>
          </div>

          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
            <div className="bg-gray-100 opacity-100 h-80 w-72 shadow-sm absolute  -translate-x-4 -translate-y-4"></div>
            <img src={Profile} alt="image" className="h-80 w-72 z-10 " />
          </div>
        </header>

        {/* right blur shadow */}
        <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
      </div>
    </Container>
  );
};

export default Banner;
