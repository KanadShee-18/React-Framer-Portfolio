import logo from "../assets/kanadsheelogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} className="h-10 mx-2" alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/kanad-shee-aa8606246/"
          className="transition duration-500 transform cursor-pointer hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KanadShee-18"
          className="transition duration-500 transform cursor-pointer hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kanadshee/"
          className="transition duration-500 transform cursor-pointer hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/Kanad_Shee"
          className="transition duration-500 transform cursor-pointer hover:scale-125 hover:text-purple-500"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
