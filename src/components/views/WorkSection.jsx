"use client";

import React from "react";
import { motion } from "motion/react";

const WorkSection = () => {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-start gap-6 w-full mt-10 lg:mt-16"
    >
      {/* header */}
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white font-jetBrains">
          Featured and{" "}
          <span className="text-purple">
            {"Projects".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-white-200 max-w-2xl mx-auto py-4 font-geist">
          Tools and technologies I use to build modern, responsive, and scalable
          web applications.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
