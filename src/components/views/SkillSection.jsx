"use client";

import React from "react";
import { motion } from "motion/react";
import { CodeBlockDemo } from "./CodeBlockDemo";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-start gap-6 w-full mt-10 lg:mt-16"
    >
      {/* header */}
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white font-jetBrains">
          Skills and{" "}
          <span className="text-purple">
            {"Expertise".split("").map((word, idx) => (
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

      {/* tech stack and code blocks */}
      <div className="flex flex-col lg:flex-row items-start w-full gap-10">

        <div className="w-full lg:w-1/2 flex-1">
          <AnimatedTooltipPreview/>
        </div>

        <div className="w-full lg:w-1/2 flex-1 ">
          <CodeBlockDemo />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
