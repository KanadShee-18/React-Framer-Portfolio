import logo from "../assets/kanadsheelogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed z-[1000] top-0 left-0 right-0 w-11/12 flex items-center py-3 mb-20 bg-opacity-80 rounded-3xl bg-[#1a1a24] justify-between md:px-8 px-2 mx-auto">
      {/* Logo section */}
      <div className="flex items-center flex-shrink-0">
        <img src={logo} className="h-10 mx-2" alt="logo" />
      </div>

      {/* Spacer to take up remaining width */}
      <div className="flex-grow"></div>

      {/* Social icons section */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        {[
          {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/kanad-shee-aa8606246/",
            delay: 1.5,
          },
          {
            icon: <FaGithub />,
            href: "https://github.com/KanadShee-18",
            delay: 0.7,
          },
          {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/kanadshee/",
            delay: 0.2,
          },
          {
            icon: <FaSquareXTwitter />,
            href: "https://twitter.com/Kanad_Shee",
            delay: 0,
          },
        ].map(({ icon, href, delay }, index) => (
          <motion.a
            key={index}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{
              opacity: 0,
              x: index === 3 ? 0 : index % 2 === 0 ? -200 : 70,
              y: index === 3 ? 0 : index % 2 !== 0 ? -30 : 0,
            }}
            transition={{ duration: index === 0 ? 0 : 0.5, delay }}
            href={href}
            className="transition navIcon duration-500 cursor-pointer text-[#6f89ff] hover:text-[#dd246b]"
            target="_blank"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
