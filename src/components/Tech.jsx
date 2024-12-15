import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa"
import { TbSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";
import {motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4"> 
        <FaJava className="text-7xl text-blue-600" /> 
         </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbSql className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoSpringBoot className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className="text-7xl text-red-800" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;