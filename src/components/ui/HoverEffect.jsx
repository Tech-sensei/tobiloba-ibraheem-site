"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiVuedotjs, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple/10 block rounded-2xl blur-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            {/* Card Image */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-3 mt-4">
              {item.techStack.includes("Tailwind") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiTailwindcss className="text-cyan-400 text-xl" />
                </div>
              )}
              {item.techStack.includes("JavaScript") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiJavascript className="text-yellow-400 text-xl" />
                </div>
              )}
              {item.techStack.includes("TypeScript") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiTypescript className="text-blue-500 text-xl" />
                </div>
              )}
              {item.techStack.includes("React") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiReact className="text-cyan-400 text-xl" />
                </div>
              )}
              {item.techStack.includes("Next") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiNextdotjs className="text-white text-xl" />
                </div>
              )}
              {item.techStack.includes("Vue") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiVuedotjs className="text-green-500 text-xl" />
                </div>
              )}
              {item.techStack.includes("Nuxt") && (
                <div className="p-2 bg-neutral-800/50 rounded-lg hover:bg-purple/20 transition-colors duration-300">
                  <SiNuxtdotjs className="text-green-400 text-xl" />
                </div>
              )}
            </div>

            {/* View Source Button */}
            <div className="mt-6">
              <Link
                href={item?.link}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple/20 hover:bg-purple text-purple hover:text-white border border-purple/40 hover:border-purple rounded-full text-sm font-jetBrains font-semibold transition-all duration-300 group-hover:scale-105"
              >
                View Live Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 group-hover:border-purple/50 relative z-20 transition-all duration-300 hover:shadow-xl hover:shadow-purple/10",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return <h4 className={cn("text-white font-bold text-xl font-jetBrains group-hover:text-purple transition-colors duration-300", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }) => {
  return <p className={cn("mt-3 text-neutral-400 leading-relaxed text-sm font-geist line-clamp-3", className)}>{children}</p>;
};
