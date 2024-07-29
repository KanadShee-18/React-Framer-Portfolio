import logo from "../assets/kanadsheeLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 h-10" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/kanad-shee-aa8606246/"
          className="cursor-pointer transform transition duration-500 hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KanadShee-18"
          className="cursor-pointer transform transition duration-500 hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kanadshee/"
          className="cursor-pointer transform transition duration-500 hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/Kanad_Shee"
          className="cursor-pointer transform transition duration-500 hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
