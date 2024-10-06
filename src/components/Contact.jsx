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
    <div id="contact" className="px-4 py-12 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start justify-between">
          <div className="w-full mb-8 md:w-1/2 md:mb-0">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-4xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text"
            >
              Contact Me
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <FaPaperPlane className="inline mr-2" /> kanadshee18@gmail.com
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
                className="w-full p-2 mb-4 text-purple-400 border border-purple-600 rounded bg-gradient-to-r from-[#161a30] to-[#1b1f33]"
              />
              <motion.input
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full p-2 mb-4 text-purple-400 border border-purple-600 rounded bg-gradient-to-r from-[#161a30] to-[#1b1f33]"
              />
              <motion.textarea
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                name="Message"
                rows="6"
                placeholder="Your Message"
                className="w-full p-2 mb-4 text-purple-400 border border-purple-600 rounded bg-gradient-to-r from-[#161a30] to-[#1b1f33]"
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
      <div className="py-4 mt-8 text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="font-semibold tracking-tight text-transparent bg-gradient-to-r from-pink-600 via-slate-200 to-purple-800 bg-clip-text text-md"
        >
          Copyright &copy; Kanad. Made with{" "}
          <FaHeart className="inline text-red-500" />
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
