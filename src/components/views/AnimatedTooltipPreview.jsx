"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
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

const techStack = [
  {
    id: 1,
    name: "JavaScript",
    designation: "Programming Language",
    image: javascript,
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Typed Superset of JavaScript",
    image: typescript,
  },
  {
    id: 3,
    name: "React",
    designation: "JavaScript Library",
    image: reactjs,
  },
  {
    id: 4,
    name: "Next.js",
    designation: "React Framework",
    image: next, 
  },
  { id: 15, name: "Vue", designation: "Javascript Framework", image: vue },
  { id: 14, name: "Vite", designation: "Build Tool", image: vite },
  // {
  //   id: 5,
  //   name: "Node.js",
  //   designation: "Backend Runtime",
  //   image: nodejs,
  // },
  // {
  //   id: 6,
  //   name: "MongoDB",
  //   designation: "NoSQL Database",
  //   image: mongodb,
  // },
  {
    id: 7,
    name: "Tailwind CSS",
    designation: "Utility-First CSS Framework",
    image: tailwind,
  },
  {
    id: 8,
    name: "Redux",
    designation: "State Management",
    image: redux,
  },
  // {
  //   id: 9,
  //   name: "Docker",
  //   designation: "Containerization",
  //   image: docker,
  // },
  {
    id: 10,
    name: "Git",
    designation: "Version Control",
    image: git,
  },
  {
    id: 11,
    name: "Figma",
    designation: "UI/UX Design Tool",
    image: figma,
  },
  {
    id: 12,
    name: "HTML",
    designation: "Markup Language",
    image: html,
  },
  {
    id: 13,
    name: "CSS",
    designation: "Styling Language",
    image: css,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center">
      <AnimatedTooltip items={techStack} />
    </div>
  );
}
