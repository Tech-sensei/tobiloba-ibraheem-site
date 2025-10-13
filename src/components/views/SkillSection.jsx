"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  vue,
  vite,
  next,
} from "../../../public/assets";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 95, image: javascript, color: "from-yellow-500 to-yellow-600" },
      { name: "TypeScript", level: 90, image: typescript, color: "from-blue-500 to-blue-600" },
      { name: "React", level: 95, image: reactjs, color: "from-cyan-500 to-cyan-600" },
      { name: "Next.js", level: 90, image: next, color: "from-gray-700 to-gray-800" },
      { name: "Vue.js", level: 85, image: vue, color: "from-green-500 to-green-600" },
      { name: "HTML5", level: 98, image: html, color: "from-orange-500 to-orange-600" },
      { name: "CSS3", level: 95, image: css, color: "from-blue-400 to-blue-500" },
    ],
  },
  {
    category: "Styling & UI",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS", level: 95, image: tailwind, color: "from-teal-400 to-teal-500" },
      { name: "Redux", level: 85, image: redux, color: "from-purple-500 to-purple-600" },
      { name: "Framer Motion", level: 88, image: null, color: "from-pink-500 to-pink-600" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, image: git, color: "from-red-500 to-red-600" },
      { name: "Vite", level: 88, image: vite, color: "from-purple-400 to-purple-500" },
      { name: "Figma", level: 85, image: figma, color: "from-pink-400 to-pink-500" },
    ],
  },
];

const SkillCard = ({ skill, index, categoryIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 hover:border-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple/10">
        <div className="flex items-center gap-4 mb-3">
          {skill.image ? (
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-neutral-800/50 p-2 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
              {skill.name.charAt(0)}
            </div>
          )}
          
          <div className="flex-1">
            <h4 className="text-white font-semibold text-base font-jetBrains">
              {skill.name}
            </h4>
            <p className="text-neutral-400 text-sm font-geist">
              {skill.level}% Proficiency
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`} />
      </div>
    </motion.div>
  );
};

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative mx-auto mt-10 md:mt-20 flex max-w-7xl flex-col items-center justify-center w-full">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="px-4 md:px-20 md:py-4 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <h2 className="font-bold text-3xl md:text-5xl text-white font-jetBrains mb-4">
            Skills & <span className="text-purple">Expertise</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-geist">
            A comprehensive toolkit of modern technologies and frameworks I use to craft exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-jetBrains font-semibold text-sm transition-all duration-300 ${
                activeCategory === index
                  ? "bg-purple text-white shadow-lg shadow-purple/30"
                  : "bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-purple/50 hover:text-white"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeCategory === categoryIndex ? 1 : 0,
                height: activeCategory === categoryIndex ? "auto" : 0,
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {activeCategory === categoryIndex && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {[
            { label: "Years Experience", value: "3+", icon: "📅" },
            { label: "Projects Completed", value: "50+", icon: "🚀" },
            { label: "Technologies", value: "15+", icon: "⚡" },
            { label: "Happy Clients", value: "30+", icon: "😊" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 text-center hover:border-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple/10"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-purple font-jetBrains mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400 font-geist">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
