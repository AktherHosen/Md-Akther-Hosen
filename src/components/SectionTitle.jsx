import React from "react";
import { motion } from "framer-motion";
const SectionTitle = ({ title, subTitle }) => {
  return (
    <motion.div
      initial={{ x: -20 }}
      whileInView={{ x: 0 }}
      transition={{ duration: "3" }}
      className="space-y-2 mt-10 mb-6"
    >
      <h1 className="text-xl font-bold uppercase underline underline-offset-4">
        {title}
      </h1>
      <h3 className="text-sm font-semibold capitalize">{subTitle}</h3>
    </motion.div>
  );
};

export default SectionTitle;
