import React from "react";
import { motion } from "framer-motion";
import UniversityCard from "./UniversityCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="w-full flex flex-col gap-10">
          <UniversityCard
            name="Hong Kong University of Science and Technology"
            address="Clear Water Bay, Hong Kong"
            phone="+852 2358 6000"
            degree="Bachelor's Degree in Computer Science"
            period="September 2014 - August 2018"
            coursework="I majored professional subjects of Information Technology and extended area of knowledge as a software engineer when I was an undergraduate"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
