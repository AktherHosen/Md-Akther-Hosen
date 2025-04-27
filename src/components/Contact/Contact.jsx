import Container from "../Container";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container>
        <div
          id="contact"
          className="flex flex-col justify-center items-center gap-y-4 min-h-[405px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="bg-primary rounded-full w-[100px] h-[100px] flex items-center justify-center text-white"
          >
            <FaHandshake size={60} className="px-1" />
          </motion.div>
          <h1 className="text-3xl font-semibold font-primary max-w-md text-center">
            Discuss me about your next Project
          </h1>
          <div className="flex gap-3">
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
              className="mailto flex items-center justify-between gap-x-2 bg-primary text-white border px-6 py-2.5 rounded-md"
            >
              <BiMailSend size={20} />
              Email
            </motion.a>

            <motion.a
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              href="https://wa.me/1610945101"
              target="_blank"
              className="flex items-center justify-between gap-x-1  border px-4  transition-colors duration-300 py-2.5 rounded-md"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </motion.a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
