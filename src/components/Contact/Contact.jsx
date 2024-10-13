import React from "react";
import SectionTitle from "../SectionTitle";
import Container from "../Container";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <Container>
        <SectionTitle title="Contact" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          <div className="space-y-3">
            <motion.h4
              initial={{ y: -10 }}
              whileInView={{ y: 0 }}
              transition={{ duration: "1" }}
              className="text-3xl font-semibold font-primary"
            >
              Let's Work Together Today!
            </motion.h4>
            <motion.p
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              transition={{ duration: "1" }}
              className="text-lg font-primary"
            >
              Reach out today to discuss your project needs and start
              collaborating on something amazing!
            </motion.p>
            <div className="flex gap-4">
              <Link to="https://github.com/AktherHosen/" target="_blank">
                <FaGithub
                  size={20}
                  className="hover:text-primary transition-all duration-300 hover:-translate-y-1 "
                />
              </Link>

              <Link
                to="https://www.linkedin.com/in/md-akther-hosen"
                target="_blank"
              >
                <BsLinkedin
                  size={20}
                  className="hover:text-primary transition-all  duration-300 hover:-translate-y-1"
                />
              </Link>
              <Link
                to="https://www.facebook.com/nirjhor.nowshad/"
                target="_blank"
              >
                <FaFacebookSquare
                  size={20}
                  className="hover:text-primary transition-all  duration-300 hover:-translate-y-1"
                />
              </Link>
              <Link to="https://x.com/AktherHosen165" target="_blank">
                {" "}
                <FaXTwitter
                  size={20}
                  className="hover:text-primary transition-all  duration-300 hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
          <div className="bg-primary min-h-[200px] rounded-2xl p-6">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-2"
            >
              <input
                type="hidden"
                name="access_key"
                value="32621581-e9cf-449e-bf84-2252566a6d6b"
              ></input>
              <div className="flex justify-between gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="text-white block text-xs mb-1 font-semibold"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name "
                    className="px-2 py-1 rounded-md w-full outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="text-white block text-xs mb-1 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email "
                    required
                    className="px-2 py-1 rounded-md w-full outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-white block text-xs mb-1 font-semibold"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  className="resize-none px-2 h-20 rounded-md w-full outline-none decoration-black"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white flex items-center gap-2 text-sm font-bold text-primary w-fit rounded-md px-2 py-1"
              >
                Start <FiSend className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
