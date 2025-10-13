"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/HoverEffect";

export const clientProjects = [
  {
    title: "EverythingAfrican",
    description:
      "A comprehensive e-commerce platform offering fresh produce and authentic African recipes. With a seamless shopping experience, EverythingAfrican ensures high-quality products are delivered directly to customers across the UK.",
    link: "https://www.everythingafrican.co.uk/",
    image: "/assets/everythingAfrican.png",
    techStack: ["JavaScript", "Nuxt.js", "Vue", "Tailwind"],
  },
  {
    title: "Brs Floors",
    description:
      "A premium flooring solutions provider specializing in hardwood, luxury vinyl, and durable surfaces. Serving Georgia, BRS Floors combines expert installation with top-tier materials to enhance residential and commercial spaces.",
    link: "https://brsflooring.com/",
    image: "/assets/brsfloors.png",
    techStack: ["JavaScript", "React", "Next", "Tailwind"],
  },
  {
    title: "Kulture Event Center",
    description:
      "Metro Atlanta’s premier event venue, renowned for exceptional service, expert event planning, and warm hospitality. Kulture Event Center is dedicated to creating unforgettable experiences for every occasion.",
    link: "https://kultureevents.com/",
    image: "/assets/kulture.png",
    techStack: ["Next", "Tailwind", "JavaScript"],
  },
  {
    title: "Customer Success Africa ",
    description:
      "A platform dedicated to bridging the knowledge and skill gap for Customer Success Managers (CSMs) and Tech CEOs. Customer Success Africa empowers businesses with the tools, strategies, and insights needed to deliver exceptional customer experiences (CX).",
    link: "https://customersuccessafrica.com/",
    image: "/assets/cs.png",
    techStack: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Lyvads",
    description:
      "A comprehensive digital marketing platform where I developed the admin dashboard and responsive landing page. The admin panel streamlines client management, campaign tracking, and content scheduling, while the landing page showcases the agency's services with an engaging, conversion-focused design. Part of a larger ecosystem that includes a mobile app developed by another team member.",
    link: "https://lyvads.com/",
    image: "/assets/lyvads.png",
    techStack: ["React", "Next", "Tailwind", "JavaScript"],
  },
  {
    title: "Kids In Tech",
    description:
      "A platform aimed at empowering the next generation of tech leaders through education and mentorship. Kids In Tech provides resources, workshops, and a community for young individuals to explore and excel in technology. Kids in Tech is more than a bootcamp—it’s a foundation for the future, nurturing the next generation of creators and innovators",
    link: "https://kidsintech.school",
    image: "/assets/kidsintech.png",
    techStack: ["React", "Next", "Tailwind", "JavaScript"],
  },
];

export const personalProjects = [
  {
    title: "Portfolio Website",
    description: "This is a portfolio website built for myself to show the world my works and to let people know about Tobiloba Ibraheem ",
    link: "https://tobiloba-ibraheem-site.vercel.app/",
    image: "/assets/portfolio.png",
    techStack: ["TypeScript", "React", "Next", "Tailwind"],
  },
  {
    title: "PrepWise - AI Interview Platform",
    description:
      "PrepWise is an AI-powered interview preparation platform that leverages advanced tools like VAPI to provide personalized feedback, skill assessments, and interactive simulations. It helps users excel in technical, behavioral, and mixed interviews with cutting-edge technology and tailored insights.",
    link: "https://prep-wise-bot.vercel.app/",
    image: "/assets/PrepWise-cover.png",
    techStack: ["React", "Next", "Tailwind", "TypeScript"],
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

        <div className="px-4 md:px-20 py-16 md:py-28">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start max-w-3xl text-center md:text-left mb-8"
          >
            <h1 className="font-bold text-3xl md:text-5xl text-white font-jetBrains mb-4">
              My <span className="text-purple">Projects</span>
            </h1>

            <p className="text-base md:text-lg text-neutral-400 max-w-2xl font-geist leading-relaxed">
              Come explore the fruits of my labor, from small experiments to full-blown web applications. Each project showcases my love for coding and design.
            </p>
          </motion.div>

          {/* Tabs for Client & Personal Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-3 mb-12"
          >
            <button
              className={`px-6 py-3 rounded-full font-jetBrains font-semibold text-sm transition-all duration-300 ${
                selectedTab === "client"
                  ? "bg-purple text-white shadow-lg shadow-purple/30"
                  : "bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-purple/50 hover:text-white"
              }`}
              onClick={() => setSelectedTab("client")}
            >
              <span className="mr-2">💼</span>
              Client Projects ({clientProjects.length})
            </button>
            <button
              className={`px-6 py-3 rounded-full font-jetBrains font-semibold text-sm transition-all duration-300 ${
                selectedTab === "personal"
                  ? "bg-purple text-white shadow-lg shadow-purple/30"
                  : "bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-purple/50 hover:text-white"
              }`}
              onClick={() => setSelectedTab("personal")}
            >
              <span className="mr-2">🚀</span>
              Personal Projects ({personalProjects.length})
            </button>
          </motion.div>

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
