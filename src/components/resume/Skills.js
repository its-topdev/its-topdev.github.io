import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaBootstrap,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiAntdesign,
  SiTailwindcss,
  SiMui,
  SiAdobephotoshop,
} from "react-icons/si";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Hard Skill</h2>
        </div>
        <div className="flex flex-col gap-0 md:gap-12 lgl:gap-0 xl:gap-12">
          <div className="w-full flex flex-col md:flex-row lgl:flex-col xl:flex-row gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Languages:</h3>
              <div className="flex flex-row gap-4">
                <span className="skillIcon">
                  <FaHtml5 />
                </span>
                <span className="skillIcon">
                  <FaCss3 />
                </span>
                <span className="skillIcon">
                  <FaJsSquare />
                </span>
                <span className="skillIcon">
                  <BiLogoTypescript />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">JS Libraries and Frameworks:</h3>
              <div className="flex flex-row gap-4">
                <span className="skillIcon">
                  <FaNodeJs />
                </span>
                <span className="skillIcon">
                  <FaReact />
                </span>
                <span className="skillIcon">
                  <FaVuejs />
                </span>
                <span className="skillIcon">
                  <FaAngular />
                </span>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="w-full flex flex-col md:flex-row lgl:flex-col xl:flex-row gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">UI Frameworks:</h3>
              <div className="flex flex-row gap-4">
                <span className="skillIcon">
                  <FaBootstrap />
                </span>
                <span className="skillIcon">
                  <SiAntdesign />
                </span>
                <span className="skillIcon">
                  <SiMui />
                </span>
                <span className="skillIcon">
                  <SiTailwindcss />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Toolkit</h3>
              <div className="flex flex-row gap-4">
                <span className="skillIcon">
                  <FaGithub />
                </span>
                <span className="skillIcon">
                  <FaDocker />
                </span>
                <span className="skillIcon">
                  <SiAdobephotoshop />
                </span>
                <span className="skillIcon">
                  <FaFigma />
                </span>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Soft Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-lg tracking-[1px]">Teamwork</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-lg tracking-[1px]">Communication ( English )</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-lg tracking-[1px]">Debugging</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-lg tracking-[1px]">Working under Pressure</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-lg tracking-[1px]">Creativity</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
