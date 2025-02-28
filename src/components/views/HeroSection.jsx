"use client";
import { motion } from "motion/react";
import Image from "next/image";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
const HeroSection = () => {
  return (
    <section id="about" className="pt-20 lg:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.02] absolute top-0 left-0 flex items-center justify-center"></div>

      <div className="flex justify-center items-center relative my-20 z-10 ">
        <div className="flex flex-col md:flex-row items-center justify-end w-full gap-10">
          {/* text section*/}
          <div className="flex flex-col gap-4 text-center lg:text-left w-full order-1 lg:order-none">
            <span className="text-sm md:text-base font-jetBrains">
              Frontend Developer
            </span>

            <h1 className="text-4xl lg:text-6xl text-white font-bold font-jetBrains leading-[150%]">
              Hello👋, I'm <br />
              <span className="text-purple">Tobiloba Ibraheem</span>
            </h1>

            <p className="text-base md:text-lg text-white-200 font-geist font-medium max-w-[600px] mx-auto lg:mx-0">
              I am a frontend developer with a passion for creating beautiful
              and functional user interfaces. I specialize in React, Next.js,
              and Tailwind CSS.
            </p>

            {/* Buttons & Social Links */}
            <div className="flex flex-col lg:flex-row md:gap-4 gap-6 items-center justify-center lg:justify-start mt-4 w-full">
              {/* Download Button */}
              <Link
                href="/Tobiloba_Ibraheem_CV.pdf"
                download="Tobiloba_Ibraheem_CV.pdf"
                target="_blank"
                className="w-[240px] md:w-fit relative rounded-full flex items-center gap-3 bg-slate-950 border border-transparent p-[1px] 
                bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] transition-all duration-300 ease-in-out hover:scale-101 
                hover:from-[#393BB2] hover:to-[#E2CBFF] hover:shadow-[0px_0px_12px_#E2CBFF]"
              >
                <span className="flex items-center justify-center gap-2 w-full h-full bg-slate-950 rounded-full px-4 py-3">
                  <span className="font-jetBrains font-semibold text-sm md:text-base text-white">
                    Download CV
                  </span>
                  <FiDownload size={18} className="text-white" />
                </span>
              </Link>

              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                {[
                  {
                    href: "https://github.com/Tech-sensei",
                    icon: <FaGithub size={20} />,
                  },
                  { href: "#", icon: <FaLinkedinIn size={20} /> },
                  {
                    href: "https://x.com/Im_Tobilobah",
                    icon: <FaTwitter size={20} />,
                  },
                ].map(({ href, icon }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className="relative flex items-center justify-center w-12 h-12 rounded-full p-[2px] 
               bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] transition-all duration-300 ease-in-out 
               hover:scale-101 hover:from-[#393BB2] hover:to-[#E2CBFF] hover:shadow-[0px_0px_12px_#E2CBFF]"
                  >
                    <span className="flex items-center justify-center w-full h-full bg-slate-950 rounded-full text-white">
                      {icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="w-full order-1 lg:order-none flex items-center justify-center self-end">
            {/* Image and Animated Circle */}
            <div className="relative w-[320px] lg:w-[600px] flex items-center justify-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1, duration: 0.5 },
                }}
                className="relative w-[260px] lg:w-[400px] h-[260px] lg:h-[400px]"
              >
                <Image
                  src="/Tobiloba_Ibraheem_png.png"
                  alt="Tobiloba Ibraheem"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-full shadow"
                />
              </motion.div>

              {/* Animated Circle */}
              <motion.svg
                className="absolute w-[280px] lg:w-[420px] h-[280px] lg:h-[420px]"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#CBACF9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="transparent"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
