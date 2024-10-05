import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { category: "Web Development", description: "Developing Web Applications" },
  {
    category: "MERN Stack",
    description:
      "Having expertise in HTML, CSS (Tailwind, Bootstrap), NextJs, NodeJs, ExpressJs, SQL, MongoDB",
  },
  {
    category: "DSA",
    description: "Solving DSA Problems in LeetCode, GeekForGeeks, CodingNinja",
  },
  //   { category: "Languages", description: "C++, Java, Python, JavaScript" },
];

const Skills = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="pb-2 my-20 text-5xl tracking-tight text-center text-transparent bg-gradient-to-r from-blue-800 via-blue-300 to-blue-200 bg-clip-text"
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
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.3 }}
            key={index}
            className="flex flex-col w-full m-4 md:w-1/2 lg:w-1/4"
          >
            <div className="flex-grow p-6 text-gray-400 transition-all duration-300 ease-in-out rounded-lg shadow-lg cursor-pointer bg-[#1e2233] shadow-[#242e50] hover:-translate-y-2 hover:bg-[#262b44]">
              <h3 className="mb-2 text-xl font-semibold text-pink-500">
                {skill.category}
              </h3>
              <p className="text-blue-300">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
