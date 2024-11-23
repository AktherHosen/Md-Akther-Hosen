import Profile from "../../assets/profile.jpg";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="min-h-[50px]  flex justify-between items-center   mt-2 py-2 mb-4 px-4 ">
      <div className="flex flex-row-reverse gap-4 items-center justify-center space-y-2 ">
        <h4 className="font-caratte font-semibold text-primary  text-xl tracking-widest">
          Md. Akther Hosen.
        </h4>
      </div>

      <div className="flex gap-4">
        <Link to="https://github.com/AktherHosen/" target="_blank">
          <FaGithub
            size={20}
            className="hover:text-primary transition-all hover:-translate-y-1"
          />
        </Link>

        <Link to="https://www.linkedin.com/in/md-akther-hosen" target="_blank">
          <BsLinkedin
            size={20}
            className="hover:text-primary transition-all hover:-translate-y-1"
          />
        </Link>
        <Link to="https://www.facebook.com/nirjhor.nowshad/" target="_blank">
          <FaFacebookSquare
            size={20}
            className="hover:text-primary transition-all hover:-translate-y-1"
          />
        </Link>
        <Link to="https://x.com/AktherHosen165" target="_blank">
          {" "}
          <FaXTwitter
            size={20}
            className="hover:text-primary transition-all hover:-translate-y-1"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
