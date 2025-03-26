"use client";

import React from "react";
import { motion } from "motion/react";
import { CodeBlockDemo } from "./CodeBlockDemo";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

const SkillSection = () => {
  return (
    <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="px-1 md:px-20 md:py-4 w-full ">
        {/* header */}
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl text-white font-jetBrains">
            Skills and <span className="text-purple">Expertise</span>
          </p>
          <p className="text-sm md:text-lg text-white-200 max-w-2xl mx-auto py-4 font-geist">
            Tools and technologies I use to build modern, responsive, and scalable web applications.
          </p>
        </div>

        {/* tech stack and code blocks */}
        <div className="flex flex-col lg:flex-row items-start w-full gap-10">
          <div className="w-full lg:w-1/2 flex-1">
            <AnimatedTooltipPreview />
          </div>

          <div className="w-full lg:w-1/2 flex-1 ">
            <CodeBlockDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
