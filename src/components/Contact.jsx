import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import resume from "../assets/My_Resume.pdf";

const Contact = () => {
  const [message, setMessage] = useState("");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyq1sATmm4VFbmerhth-5WKSwBNWVounWdkIj_ZbKipGZwwq3J87EyfC-twHn5ypqpZ/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setMessage("Message sent successfully.");
        setTimeout(() => setMessage(""), 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div id="contact" className="text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="font-semibold bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-6"
            >
              Contact Me
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <FaPaperPlane className="inline mr-2" /> codewizardkanad@gmail.com
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.2 }}
            >
              <a
                href={resume}
                download
                className="btn btn2 bg-neutral-900 text-purple-400 py-4 px-6 rounded text-[18px] border-2 border-purple-600 hover:text-neutral-900 hover:bg-purple-400 hover:font-semibold active:bg-neutral-900 active:text-purple-500"
              >
                Download RESUME
              </a>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <motion.input
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full mb-4 p-2 border border-purple-600 rounded bg-gradient-to-b from-gray-950 to-gray-900 text-purple-400"
              />
              <motion.input
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full mb-4 p-2 border border-purple-600 rounded bg-gradient-to-b from-gray-950 to-gray-900 text-purple-400"
              />
              <motion.textarea
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                name="Message"
                rows="6"
                placeholder="Your Message"
                className="w-full mb-4 p-2 border border-purple-600 rounded bg-gradient-to-b from-gray-950 to-gray-900 text-purple-400"
              ></motion.textarea>
              <motion.button
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 70 }}
                transition={{ duration: 1.2 }}
                type="submit"
                className="btn btn2 bg-neutral-900 text-purple-400 py-3 px-6 rounded text-[18px] border-2 border-purple-600 hover:text-neutral-900 hover:bg-purple-400 hover:font-semibold active:bg-neutral-900 active:text-purple-500"
              >
                Submit
              </motion.button>
            </form>
            <span id="msg" className="block mt-4 text-green-500">
              {message}
            </span>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-8">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="bg-gradient-to-r from-pink-600 via-slate-200 to-purple-800 bg-clip-text tracking-tight text-transparent text-md font-semibold"
        >
          Copyright &copy; Kanad. Made with{" "}
          <FaHeart className="inline text-red-500" /> for Educational Purpose
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
