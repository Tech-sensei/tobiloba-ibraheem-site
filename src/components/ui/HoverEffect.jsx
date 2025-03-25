"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            {/* Card Image */}
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>

            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-3 mt-4 text-zinc-400">
              {item.techStack.includes("Tailwind") && (
                <SiTailwindcss className="transition-all duration-500 ease-in-out text-gray-500 group-hover:text-blue-500 text-lg" />
              )}
              {item.techStack.includes("JavaScript") && (
                <SiJavascript className="transition-all duration-500 ease-in-out text-gray-500 group-hover:text-yellow-400 text-lg" />
              )}
              {item.techStack.includes("TypeScript") && (
                <SiTypescript className="transition-all duration-500 ease-in-out text-gray-500 group-hover:text-blue-500 text-lg" />
              )}
              {item.techStack.includes("React") && (
                <SiReact className="transition-all duration-500 ease-in-out text-gray-500 group-hover:text-blue-400 text-lg" />
              )}
              {item.techStack.includes("Next") && (
                <SiNextdotjs className="transition-all duration-500 ease-in-out text-gray-500 group-hover:text-slate-100 text-lg" />
              )}
            </div>

            {/* View Source Button */}
            <div className="mt-6">
              <Link
                href={item?.link}
                target="_blank"
                className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm group-hover:text-purple transition-all duration-500 ease-in-out"
              >
                View Live Demo
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }) => {
  return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};
