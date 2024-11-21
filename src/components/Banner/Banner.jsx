import React from "react";

import Profile from "../../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { RiSendPlaneLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Container from "../Container";

const Banner = () => {
  return (
    <Container>
      <div className="w-full flex flex-col min-h-[500px] items-center justify-center text-center lg:text-start space-y-4">
        <p>Hi there!</p>
        <h1 className="text-[40px]  sm:text-[60px] font-semibold sm:leading-[70px]">
          <span className="text-primary font-caratte font-bold">Akther</span> is
          here to be your assistance...
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
    </Container>
  );
};

export default Banner;
