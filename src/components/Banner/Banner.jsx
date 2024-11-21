import React from "react";

import Profile from "../../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { RiSendPlaneLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Container from "../Container";

const Banner = () => {
  return (
    <Container>
      <div className="w-full bg-[#fff] rounded-md relative min-h-[500px]">
        {/* header */}
        <header className="flex lg:flex-row flex-col-reverse items-center gap-12 lg:gap-0  lg:justify-between  mt-14 px-2">
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <p>Hi there!</p>
            <h1 className="text-[30px]  sm:text-[60px] font-semibold sm:leading-[70px]">
              <span className="text-primary font-caratte font-bold">
                Akther
              </span>{" "}
              is here to be your assistance
            </h1>

            <h3 className="text-lg">
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
            <motion.a
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mdaktherhosen16@gmail.com"
              target="_blank"
              className="px-6 rounded-md bg-primary text-white py-2.5 flex items-center gap-1 w-fit"
            >
              Let's Talk <RiSendPlaneLine className="inline" />
            </motion.a>
          </div>

          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
            <div className="bg-gray-100 opacity-100 h-80 w-72 shadow-sm absolute  -translate-x-4 -translate-y-4"></div>
            <img src={Profile} alt="image" className="h-80 w-72 z-10 " />
          </div>
        </header>
      </div>
    </Container>
  );
};

export default Banner;
