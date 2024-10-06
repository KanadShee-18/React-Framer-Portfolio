import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./about.css";

const About = () => {
  return (
    <div className="pb-3 border-b-neutral-900">
      <h1 className="pb-2 my-20 text-5xl tracking-tight text-center text-transparent bg-gradient-to-r from-blue-800 via-blue-300 to-neutral-200 bg-clip-text">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="relative flex items-center justify-center">
            <img className="z-30 rounded-2xl" src={aboutImg} alt="about_img" />

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute z-0 w-[70%] h-[90%] bg-[#285d99] right-16 rounded-3xl blur-[40px] -top-3"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center md:h-[500px] h-[700px] lg:h-auto lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-[20px] tracking-tighter text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-pink-300 bg-clip-text font-medium">
              <TypeAnimation
                sequence={[ABOUT_TEXT, 1000, ""]}
                repeat={Infinity}
                cursor={true}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                omitDeletionAnimation={true}
              />
              {/* {ABOUT_TEXT} */}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
