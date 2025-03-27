"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { IoCalendarOutline, IoChevronForward } from "react-icons/io5";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-start items-center flex-col mx-auto md:px-10 px-4 max-w-[90rem]">
      <section className=" mx-auto mt-10  max-w-7xl flex flex-col md:flex-row items-start gap-4 md:gap-20 py-16 md:py-28 relative w-full ">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>

        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>
        {/* Profile Card */}
        <div className="w-full md:w-[30%] md:sticky md:top-16 flex flex-col items-center text-center gap-4">
          <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-xl self-center">
            <Image src="/Tobiloba_Ibraheem_png.png" alt="Profile Picture" fill className="object-cover" priority />
          </div>

          <div className="text-white text-base font-jetBrains  flex items-center gap-2">
            <span>🌏</span>
            Africa/Nigeria
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center space-x-2 px-4 py-0.5  rounded-xl w-fit backdrop-blur-md bg-[#08a97c1a] border border-[#08a97c4d]">
              <span className="text-white text-base font-normal font-jetBrains">English</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-0.5  rounded-xl w-fit backdrop-blur-md bg-[#08a97c1a] border border-[#08a97c4d]">
              <span className="text-white text-base font-normal font-jetBrains">Yoruba</span>
            </button>
          </div>

          <Link
            href="/Tobiloba_Ibraheem_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-3 rounded-full bg-[#08a97c1a] border border-[#08a97c4d] shadow-md backdrop-blur-md px-4 py-1 transition-all duration-500 ease-in-out group cursor-pointer hover:shadow-md mb-4 md:mb-8"
          >
            <span className="font-jetBrains font-semibold text-sm md:text-base text-white">Download CV</span>
            <FiDownload
              size={18}
              className="text-white group-hover:transform group-hover:translate-y-[2px] transition-all duration-500 ease-in-out"
            />
          </Link>
        </div>

        {/* main profile */}
        <div className="h-auto md:w-[70%] flex flex-col items-center md:items-start gap-14">
          {/* introduction */}
          <div className="md:max-w-[90%] mx-auto flex flex-col items-center md:items-start">
            {/* schedule a call  */}
            <div className="w-fit flex items-center gap-2 rounded-full bg-[#08a97c1a] border border-[#08a97c4d] shadow-md backdrop-blur-md px-2 py-1 transition-all duration-500 ease-in-out group cursor-pointer hover:scale-[1.02] hover:shadow-md mb-4 md:mb-8">
              <IoCalendarOutline size={28} className="text-[#08a97c] pl-2" />
              <p className="text-white text-sm md:text-base font-jetBrains ">Schedule a call</p>
              <Link href="https://cal.com/" className="flex items-center justify-center gap-2.5 rounded-full w-8 h-8 bg-black-100 ">
                <IoChevronForward className="text-white group-hover:transform group-hover:translate-x-1 transition-all duration-500 ease-in-out " />
              </Link>
            </div>

            {/* about me */}
            <div className="flex flex-col items-center md:items-start">
              <motion.h1 className="text-white text-3xl md:text-6xl font-bold font-jetBrains leading capitalize">
                {" Tobiloba Ibraheem".split(" ").map((word, index) => {
                  // const isSpecial = ["Technical", "Knowledge"];
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                      className={`mr-2 inline-block `}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.h1>
              <motion.p className="text-2xl md:text-3xl text-neutral-400 font-normal md:ml-2 font-geist leading-normal">
                {"Frontend Engineer".split(" ").map((word, index) => {
                  // const isSpecial = ["Technical", "Knowledge"];
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1, ease: "easeInOut" }}
                      className={`mr-2 inline-block `}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.p>

              <div className="flex items-center gap-2 mt-6">
                <Link
                  href="/https://github.com/Tech-sensei"
                  className="flex items-center space-x-2 mx-0.5 px-2 py-1 transition-all duration-500 rounded-xl w-fit backdrop-blur-md bg-[##9595951a] border border-[#9595954d]  hover:bg-[#3f3f3f] "
                >
                  <FaGithub size={20} className="" />
                  <span className="hidden md:block text-white text-sm font-semibold font-geist">GitHub</span>
                </Link>

                <Link
                  href="/https://www.linkedin.com/in/tobiloba-ibraheem"
                  className="flex items-center space-x-2 mx-0.5 px-2 py-1 transition-all duration-500 rounded-xl w-fit backdrop-blur-md bg-[#9595951a] border border-[#9595954d]  hover:bg-[#3f3f3f] "
                >
                  <FaLinkedinIn size={20} className="" />
                  <span className="hidden md:block text-white text-sm font-semibold font-geist">LinkedIn</span>
                </Link>

                <Link
                  href="/https://x.com/Im_Tobilobah"
                  className="flex items-center space-x-2 mx-0.5 px-2 py-1 transition-all duration-500 rounded-xl w-fit backdrop-blur-md bg-[##9595951a] border border-[#9595954d]  hover:bg-[#3f3f3f] "
                >
                  <FaTwitter size={20} className="" />
                  <span className="hidden md:block text-white text-sm font-semibold font-geist">Twitter</span>
                </Link>
              </div>
            </div>

            <p className="text-sm text-center md:text-left md:text-base text-neutral-400 font-geist md:font-medium mt-6 leading-8 ">
              I am a frontend Engineer with a passion for creating beautiful and functional user interfaces. I specialize in React, Next.js,
              and Tailwind CSS. My work involves transforming complex challenges into simple, elegant design solutions. I enjoy working on
              digital interfaces, interactive experiences, and the convergence of design and technology.
            </p>
            <p className="text-sm text-center md:text-left md:text-base text-neutral-400 font-geist md:font-medium mt-6 leading-8 ">
              When I'm not busy slaying bugs and writing code, I'm usually busy indulging in my two favorite hobbies: playing video game and
              tinkering with gadgets to bring them back to life. I firmly believe that playing video game increases your creativity by 5%.
            </p>
          </div>

          {/* Work experience */}
          <div className="flex flex-col items-start gap-2 w-full md:max-w-[90%] mx-auto ">
            <h2 className="text-white text-3xl font-bold font-jetBrains capitalize leading-tight">Work Experience</h2>

            {/* work1 */}
            <div className="flex flex-col items-start gap-4 w-full mt-6">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-base font-semibold uppercase font-jetBrains">upwork freelancer</h3>
                  <span className="text-sm text-[#08a97c] font-geist">Senior Frontend Developer</span>
                </div>

                <p className="text-white/50 text-sm font-jetBrains">2023 - Present</p>
              </div>

              <ul className="flex flex-col gap-2 items-start w-full">
                <li className="ml-6  list-disc">
                  <span className="text-neutral-400 text-sm md:text-base font-geist">
                    Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.
                  </span>
                </li>

                <li className="ml-6  list-disc">
                  <span className="text-neutral-400 text-sm md:text-base font-geist">
                    Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.
                  </span>
                </li>
              </ul>
            </div>

            {/* work2 */}
            <div className="flex flex-col items-start gap-4 w-full mt-6">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-base font-semibold uppercase font-jetBrains">RADIKSEZ NIG.LG</h3>
                  <span className="text-sm text-[#08a97c] font-geist">Senior Frontend Developer</span>
                </div>

                <p className="text-white/50 text-sm font-jetBrains">2023 - 2024</p>
              </div>

              <ul className="flex flex-col gap-2 items-start w-full">
                <li className="ml-6 text-neutral-400 text-sm md:text-base font-geist list-disc">
                  Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.
                </li>

                <li className="ml-6 text-neutral-400 text-sm md:text-base font-geist list-disc">
                  Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.
                </li>

                <li className="ml-6 text-neutral-400 text-sm md:text-base font-geist list-disc">
                  Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.
                </li>
              </ul>
            </div>
          </div>

          {/* Education*/}
          <div className="flex flex-col items-start gap-2 w-full md:max-w-[90%] mx-auto ">
            <h2 className="text-white text-3xl font-bold font-jetBrains capitalize leading-tight">Education</h2>

            {/* education1 */}
            <div className="flex flex-col items-start gap-4 w-full mt-6">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-base font-semibold uppercase font-jetBrains">Obafemi Awolowo University</h3>
                  <span className="text-sm text-[#08a97c] font-geist">Bsc. Biochemistry</span>
                </div>

                <p className="text-white/50 text-sm font-jetBrains">2019 - 2024</p>
              </div>
            </div>

            {/* education2 */}
            <div className="flex flex-col items-start gap-4 w-full mt-6">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-base font-semibold uppercase font-jetBrains">AltSchool Africa</h3>
                  <span className="text-sm text-[#08a97c] font-geist">Frontend Engineering</span>
                </div>

                <p className="text-white/50 text-sm font-jetBrains">2022 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
