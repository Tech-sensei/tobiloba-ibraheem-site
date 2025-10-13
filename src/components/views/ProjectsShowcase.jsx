"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Everything African",
    description: "A comprehensive e-commerce platform offering fresh produce and authentic African recipes with seamless shopping experience.",
    image: "/assets/everythingAfrican.png",
    tags: ["Vue", "Nuxt.js", "Tailwind CSS", "JavaScript"],
    category: "Web App",
    liveUrl: "https://www.everythingafrican.co.uk/",
  },
  {
    id: 2,
    title: "Customer Success Africa",
    description: "A platform dedicated to bridging the knowledge and skill gap for Customer Success Managers and Tech CEOs.",
    image: "/assets/cs.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "Web App",
    liveUrl: "https://customersuccessafrica.com/",
  },
  {
    id: 3,
    title: "Kulture Event Center",
    description: "Metro Atlanta's premier event venue, renowned for exceptional service, expert event planning, and warm hospitality.",
    image: "/assets/kulture.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    category: "Landing Page",
    liveUrl: "https://kultureevents.com/",
  },
  {
    id: 4,
    title: "BRS Floors",
    description: "A premium flooring solutions provider specializing in hardwood, luxury vinyl, and durable surfaces.",
    image: "/assets/brsfloors.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    category: "Business Site",
    liveUrl: "https://brsflooring.com/",
  },
];

const categories = ["All", "Web App", "Landing Page", "Business Site"];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple/10"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-center gap-4"
        >
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple hover:bg-purple/90 rounded-full text-white font-jetBrains text-sm transition-all duration-300 hover:scale-105"
          >
            <FiExternalLink size={16} />
            Live Demo
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white font-jetBrains group-hover:text-purple transition-colors duration-300">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-purple/20 text-purple text-xs font-semibold rounded-full font-geist">{project.category}</span>
        </div>

        <p className="text-neutral-400 text-sm font-geist mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-full font-geist border border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative mx-auto mt-20 md:mt-32 flex max-w-7xl flex-col items-center justify-center w-full">
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
            Featured <span className="text-purple">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-geist">
            A selection of my recent work showcasing expertise in modern web development and design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-jetBrains font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple text-white shadow-lg shadow-purple/30"
                  : "bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-purple/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-purple hover:bg-purple/90 rounded-full text-white font-jetBrains font-semibold shadow-lg shadow-purple/30 hover:shadow-purple/50 transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <FiExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
