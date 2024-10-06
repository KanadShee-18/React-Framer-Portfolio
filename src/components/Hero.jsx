import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kanadsheeProfile.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="relative pb-4 mt-56 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight text-blue-200 lg:mt-16 lg:text-8xl"
            >
              Kanad Shee
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 text-[18px] tracking-tighter text-transparent bg-gradient-to-r from-blue-300 via-slate-300 to-teal-300 bg-clip-text font-medium"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div className="relative flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Kanad Shee"
              className="relative z-30"
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute z-0 w-[70%] h-[90%] bg-[#2d3f77] left-14 rounded-3xl blur-[40px] -top-7"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
