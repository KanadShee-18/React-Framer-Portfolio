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
    <div className="container mx-auto py-12 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl bg-gradient-to-r from-blue-800 via-blue-300 to-blue-200 bg-clip-text tracking-tight text-transparent pb-2"
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
            className="m-4 w-full md:w-1/2 lg:w-1/4 flex flex-col"
          >
            <div className="flex-grow bg-gradient-to-b from-gray-800 to-gray-700 text-gray-400 rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer shadow-lg shadow-neutral-500/50">
              <h3 className="text-xl font-semibold text-pink-500 mb-2">
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
