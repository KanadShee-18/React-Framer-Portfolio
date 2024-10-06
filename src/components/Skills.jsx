import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { category: "Languages", description: "C, C++, Java, Python" },
  {
    category: "Web Technologies",
    description:
      "Having expertise in HTML5, CSS, Tailwind, Bootstrap, JavaScript",
  },
  {
    category: "Tech Stack",
    description:
      "Skilled teck stacks like React JS, Node JS, Express JS, MongoDB",
  },
  //   { category: "Languages", description: "C++, Java, Python, JavaScript" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ x: "-100vw", y: "100vh", opacity: 0 }} // Starts from bottom-left
      animate={{ x: 0, y: 0, opacity: 1 }} // Moves to the center
      exit={{ x: "-100vw", y: "-100vh", opacity: 0 }} // Exits towards top-left
      transition={{ duration: 1 }} // Adjust speed as needed
      className="container px-4 py-12 mx-auto mb-36"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="pb-2 mt-20 mb-10 text-5xl tracking-tight text-center text-transparent bg-gradient-to-r from-blue-800 via-blue-300 to-blue-200 bg-clip-text"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col w-full m-4 md:w-1/2 lg:w-1/4"
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300, y: 400 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div className="flex-grow p-6 text-gray-400 transition-all duration-300 ease-in-out rounded-md shadow-lg cursor-pointer bg-[#1e2233] shadow-[#2d3b68] hover:bg-[#2c3250]">
              <h3 className="mb-2 text-xl font-semibold text-pink-500">
                {skill.category}
              </h3>
              <p className="text-blue-300">{skill.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
