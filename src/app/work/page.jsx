import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HoverEffect } from "@/components/ui/HoverEffect";

export const projects = [
  {
    title: "Microsoft",
    description: "A company that develops software, personal computers, and related services.",
    link: "https://microsoft.com",
    image: "/img1.png",
    techStack: ["JavaScript", "Next.js", "React", "Tailwind"],
  },
  {
    title: "Google",
    description: "A multinational technology company specializing in Internet-related services and products .",
    link: "https://google.com",
    image: "/img2.png",
    techStack: ["Go", "JavaScript", "React", "Material UI"],
  },
  {
    title: "Netflix",
    description: "A streaming service offering a wide variety of TV shows, movies, anime, and documentaries.",
    link: "https://netflix.com",
    image: "/img3.png",
    techStack: ["TypeScript", "React", "Tailwind"],
  },
  {
    title: "Amazon",
    description: "A multinational technology company focusing on e-commerce, cloud computing, and AI.",
    link: "https://amazon.com",
    image: "/img2.png",
    techStack: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Meta",
    description: "A technology company that focuses on building products to bring the world closer together.",
    link: "https://meta.com",
    image: "/img1.png",
    techStack: ["React", "Tailwind"],
  },
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/img3.png",
    techStack: ["React", "Tailwind", "JavaScript"],
  },
];

const Work = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 pb-12 max-w-[90rem] ">
      <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="px-4 md:px-20 pt-16 md:pt-28">
          {/* header */}
          <div className="self-start max-w-3xl text-center md:text-left">
            <p className="font-bold text-xl md:text-4xl text-white font-jetBrains !leading-[150%]">
              I've been <span className="text-purple">building </span> alot of things
            </p>
            <p className="text-sm md:text-base text-neutral-400 max-w-2xl py-4 font-geist leading-normal">
              Come explore the fruits of my labor, from small experiments to full-blown web applications, each project showcases my love for
              coding and design.
            </p>
          </div>

          <HoverEffect items={projects} />
        </div>
      </section>
    </main>
  );
};

export default Work;
