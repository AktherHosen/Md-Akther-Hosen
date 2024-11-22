import React, { useEffect, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";

const Banner = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Developer",
    "Full Stack Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="w-full flex flex-col min-h-[500px] lg:min-h-[calc(100vh-50px)] items-center justify-center text-center lg:text-start space-y-4">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl md:max-w-xl lg:max-w-2xl font-extrabold font-caratte tracking-widest text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
        >
          <span className="text-primary">
            Crafting Digital Experiences That Make a Lasting Impact....
          </span>
        </motion.h1>
        <h3 className="text-lg">I'm your </h3>
        <span className="uppercase text-xl text-primary font-semibold">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRoleIndex}
              variants={roleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.8,
              }}
              className="inline-block"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
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
    </>
  );
};

export default Banner;
