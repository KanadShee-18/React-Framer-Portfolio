import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B-Tech in Computer Science and Engineering",
    institution: "Budge Budge Institute of Technology",
    duration: "2022-2026",
    cgpa: "8.10",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Diamond Harbour Government Polytechnic",
    duration: "2020-2022",
    marks: "81.67%",
  },
  {
    degree: "Higher Secondary Education (West Bengal Board)",
    institution: "Sarisha Ramkrishna Mission Sikshamandir",
    duration: "2017-2019",
    marks: "84.28%",
  },
  {
    degree: "Secondary Education (West Bengal Board)",
    institution: "Sarisha Ramkrishna Mission Sikshamandir",
    duration: "2011-2017",
    marks: "84.28%",
  },
];

const Education = () => {
  return (
    <div id="education" className="w-full py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl bg-gradient-to-r from-blue-800 via-blue-300 to-neutral-200 bg-clip-text tracking-tight text-transparent pb-2"
        >
          Education
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-gray-950 to-gray-800 text-gray-400 rounded-3xl p-6 mx-auto w-full max-w-4xl shadow-md shadow-neutral-500/50"
        >
          {educationData.map((item, index) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              key={index}
              className="mb-6 border-b border-gray-600 pb-4 last:border-none"
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 via-slate-300 to-purple-700 bg-clip-text tracking-tight text-transparent">
                {item.degree}
              </h3>
              <p className="text-blue-200">{item.institution}</p>
              <p className="text-neutral-400">{item.duration}</p>
              {item.cgpa && <p>CGPA: {item.cgpa}</p>}
              {item.marks && <p>Marks: {item.marks}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
