import Profile from "../../assets/profile.jpg";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-6 mb-6">
      <div className="bg-secondary w-full min-h-[310px] rounded-2xl px-6 py-8 flex flex-col justify-between">
        <div>
          <h4 className="text-gray-300 text-sm uppercase font-semibold mb-2">
            Contact Us
          </h4>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 lg:max-w-xl leading-tight">
              Let's <span className="text-white">Discuss</span> your vision{" "}
              <span className="text-white">with us!</span>
            </h1>

            <div className="text-gray-300 text-sm lg:text-right space-y-1">
              <p>
                Karnaphuli, Chittagong <br /> Bangladesh
              </p>
              <p>+880 161 094 5101</p>
              <a
                href="mailto:mdaktherhosen16@gmail.com"
                className="hover:underline block"
                target="_blank"
                rel="noopener noreferrer"
              >
                mdaktherhosen@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-white flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 border-t border-gray-600 pt-4 gap-4">
          <h4 className="font-caratte font-semibold text-lg tracking-widest">
            Md. Akther Hosen.
          </h4>

          <div className="flex gap-4">
            <Link to="https://github.com/AktherHosen/" target="_blank">
              <FaGithub
                size={20}
                className="hover:-translate-y-1 transition-transform"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/md-akther-hosen"
              target="_blank"
            >
              <BsLinkedin
                size={20}
                className="hover:-translate-y-1 transition-transform"
              />
            </Link>
            <Link
              to="https://www.facebook.com/nirjhor.nowshad/"
              target="_blank"
            >
              <FaFacebookSquare
                size={20}
                className="hover:-translate-y-1 transition-transform"
              />
            </Link>
            <Link to="https://x.com/AktherHosen165" target="_blank">
              <FaXTwitter
                size={20}
                className="hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
