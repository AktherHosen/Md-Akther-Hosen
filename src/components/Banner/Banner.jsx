import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMailSend } from "react-icons/bi";
import SplitText from "../../utils/SplitText";

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
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="w-full flex flex-col min-h-[calc(100vh-72px)] justify-center lg:text-start space-y-4 px-6">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-lucker">
          Hi, I'm Akther
        </h1>
        <SplitText
          text={
            <>
              I'm Crafting Digital Experiences <br /> That Make a Lasting
              Impact.
            </>
          }
          className="text-lg md:text-xl lg:text-2xl md:max-w-xl lg:max-w-2xl font-raleway tracking-widest"
        />

        <span className="uppercase text-sm  font-semibold">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRoleIndex}
              variants={roleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 1.2,
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
          title="mdaktherhosen16@gmail.com"
          href="mailto:mdaktherhosen16@gmail.com"
          target="_blank"
          className="mailto px-6 rounded-md bg-primary text-white py-2.5 flex items-center justify-center gap-1 w-fit"
        >
          Let's Talk <BiMailSend size={20} />
        </motion.a>
      </div>
    </>
  );
};

export default Banner;
