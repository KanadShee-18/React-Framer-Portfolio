import React from "react";
import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./project.css";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="pb-2 my-20 text-5xl tracking-tight text-center text-transparent bg-gradient-to-r from-blue-800 via-blue-300 to-neutral-200 bg-clip-text"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-12 lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="mb-6 duration-200 ease-in-out transform rounded hover:scale-105 projectImg"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-2xl font-semibold tracking-tight text-transparent cursor-pointer bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-slate-500 hover:to-pink-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent">
                {project.title}
              </h6>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-500 hover:text-pink-200"
              >
                <FaExternalLinkAlt />
                <span>Link</span>
              </a>

              <p className="mb-4 text-[#5e6dad]">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 mr-2 text-sm font-medium text-purple-400 border-2 border-purple-900 rounded-md bg-neutral-900 hover:cursor-pointer hover:bg-neutral-800 hover:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
