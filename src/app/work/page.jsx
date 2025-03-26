"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/HoverEffect";

export const clientProjects = [
  {
    title: "Microsoft",
    description: "A company that develops software, personal computers, and related services.",
    link: "https://microsoft.com",
    image: "/img1.png",
    techStack: ["JavaScript", "Next.js", "React", "Tailwind"],
  },
  {
    title: "Google",
    description: "A multinational technology company specializing in Internet-related services and products.",
    link: "https://google.com",
    image: "/img2.png",
    techStack: ["Go", "JavaScript", "React", "Material UI"],
  },
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/img3.png",
    techStack: ["React", "Tailwind", "JavaScript"],
  },
];

export const personalProjects = [
  {
    title: "Netflix Clone",
    description: "A streaming service clone built with modern web technologies.",
    link: "https://netflix.com",
    image: "/img3.png",
    techStack: ["TypeScript", "React", "Tailwind"],
  },
  {
    title: "Amazon UI",
    description: "A personal project replicating Amazon’s front-end experience.",
    link: "https://amazon.com",
    image: "/img2.png",
    techStack: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Meta Dashboard",
    description: "An experimental dashboard UI using Next.js & Tailwind.",
    link: "https://meta.com",
    image: "/img1.png",
    techStack: ["React", "Tailwind"],
  },
];

const Work = () => {
  const [selectedTab, setSelectedTab] = useState("client");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-6 px-4 pb-12 max-w-[90rem] w-full ">
      <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>

        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>

        <div className="px-1 md:px-20 py-16 md:py-28">
          {/* header */}
          <div className="self-start max-w-3xl text-center md:text-left">
            <motion.p className="font-bold text-xl md:text-4xl text-white font-jetBrains !leading-[150%]">
              {"I've been building a lot of things".split(" ").map((word, index) => {
                // Check if the word is "building" and wrap it in a <span>
                const isSpecial = word === "building";

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className={`mr-2 inline-block ${isSpecial ? "text-purple" : ""}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.p>
            <p className="text-sm md:text-base text-neutral-400 max-w-2xl py-4 font-geist leading-normal">
              Come explore the fruits of my labor, from small experiments to full-blown web applications, each project showcases my love for
              coding and design.
            </p>
          </div>

          {/* Tabs for Client & Personal Projects */}
          <div className="mt-6 flex justify-center gap-2 md:gap-6 rounded-2xl py-2 px-0.5 md:px-10 border border-[#3f3f3f] shadow-md backdrop-blur-md bg-[#0000004d] md:w-fit w-full mx-auto">
            <button
              className={`flex items-center space-x-2 mx-0.5 px-4 py-2 text-sm transition-all duration-300 border rounded-xl outline-none  ${
                selectedTab === "client"
                  ? "text-white bg-[#9595951a] border-[#9595954d]"
                  : "text-white/80 border-[#9595954d] hover:text-white hover:bg-transparent hover:border-[#9595954d]"
              }`}
              onClick={() => setSelectedTab("client")}
            >
              Client Projects
            </button>
            <button
              className={`flex items-center space-x-2 mx-0.5 px-4 py-2 text-sm transition-all duration-300 border rounded-xl outline-none  ${
                selectedTab === "personal"
                  ? "text-white bg-[#9595951a] border-[#9595954d]"
                  : "text-white/80 border-[#9595954d] hover:text-white hover:bg-transparent hover:border-[#9595954d]"
              }`}
              onClick={() => setSelectedTab("personal")}
            >
              Personal Projects
            </button>
          </div>

          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {selectedTab === "client" ? <HoverEffect items={clientProjects} /> : <HoverEffect items={personalProjects} />}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Work;
