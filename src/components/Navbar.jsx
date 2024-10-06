import logo from "../assets/kanadsheelogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed z-[1000] top-0 left-0 right-0 w-11/12 flex items-center py-3 mb-20 bg-opacity-80 rounded-3xl bg-[#1a1a24] justify-between px-8 mx-auto">
      {/* Logo section */}
      <div className="flex items-center flex-shrink-0">
        <img src={logo} className="h-10 mx-2" alt="logo" />
      </div>

      {/* Spacer to take up remaining width */}
      <div className="flex-grow"></div>

      {/* Social icons section */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/kanad-shee-aa8606246/"
          className="transition duration-500 transform cursor-pointer hover:scale-125 text-[#6f89ff] hover:text-purple-500"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KanadShee-18"
          className="transition duration-500 transform cursor-pointer hover:scale-125 text-[#6f89ff] hover:text-purple-500"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kanadshee/"
          className="transition duration-500 transform cursor-pointer hover:scale-125 text-[#6f89ff] hover:text-purple-500"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/Kanad_Shee"
          className="transition duration-500 transform cursor-pointer hover:scale-125 text-[#6f89ff] hover:text-purple-500"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
