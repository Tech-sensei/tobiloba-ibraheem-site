"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { motion } from "motion/react";
import { IoCalendarOutline, IoChevronForward } from "react-icons/io5";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the component is mounted before using document
  }, []);

  if (!isClient) return null; // Avoid rendering on the serve
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi({ namespace: "coffee-talk" });
  //     cal("ui", { cssVarsPerTheme: { light: { "cal-brand": "#000319" } }, hideEventTypeDetails: false, layout: "week_view" });
  //   })();
  // }, []);

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
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[30%] md:sticky md:top-16 flex flex-col items-center text-center gap-4"
        >
          <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl shadow-purple/20 self-center ring-4 ring-purple/20 hover:ring-purple/40 transition-all duration-300">
            <Image src="/Tobiloba_Ibraheem_png.png" alt="Profile Picture" fill className="object-cover" priority />
          </div>

          <div className="text-white text-base font-jetBrains flex items-center gap-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full px-4 py-2">
            <span>🌍</span>
            Lagos, Nigeria
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="flex items-center space-x-2 px-4 py-1.5 rounded-full w-fit backdrop-blur-md bg-purple/20 border border-purple/40">
              <span className="text-white text-sm font-normal font-jetBrains">English</span>
            </span>
            <span className="flex items-center space-x-2 px-4 py-1.5 rounded-full w-fit backdrop-blur-md bg-purple/20 border border-purple/40">
              <span className="text-white text-sm font-normal font-jetBrains">Yoruba</span>
            </span>
          </div>

          <a
            href="/Tobiloba-ibraheem_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-fit flex items-center gap-3 rounded-full bg-purple hover:bg-purple/90 shadow-lg shadow-purple/30 hover:shadow-purple/50 backdrop-blur-md px-6 py-3 transition-all duration-300 ease-in-out group cursor-pointer hover:scale-105 mb-4 md:mb-8"
          >
            <span className="font-jetBrains font-semibold text-sm text-white">Download CV</span>
            <FiDownload
              size={18}
              className="text-white group-hover:transform group-hover:translate-y-0.5 transition-all duration-300 ease-in-out"
            />
          </a>
        </motion.div>

        {/* main profile */}
        <div className="h-auto md:w-[70%] flex flex-col items-center md:items-start gap-14">
          {/* introduction */}
          <div className="md:max-w-[90%] mx-auto flex flex-col items-center md:items-start">
            {/* schedule a call  */}

            {isClient && (
              <div className="w-fit flex items-center gap-2 rounded-full bg-[#08a97c1a] border border-[#08a97c4d] shadow-md backdrop-blur-md px-2 py-1 transition-all duration-500 ease-in-out group cursor-pointer hover:scale-[1.02] hover:shadow-md mb-4 md:mb-8 outline-none">
                <PopupButton
                  url="https://calendly.com/ibraheemtobiloba15/coffee-chat-with-tobiloba"
                  rootElement={document.getElementById("root") || document.body}
                  text={
                    <div className="flex items-center gap-2">
                      <IoCalendarOutline size={28} className="text-[#08a97c] pl-2" />
                      <p className="text-white text-sm md:text-base font-jetBrains">Schedule a call</p>
                      <span className="flex items-center justify-center gap-2.5 rounded-full w-8 h-8 bg-black-100">
                        <IoChevronForward className="text-white group-hover:transform group-hover:translate-x-1 transition-all duration-500 ease-in-out" />
                      </span>
                    </div>
                  }
                />
              </div>
            )}

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
                {"Frontend Developer".split(" ").map((word, index) => {
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
                  href="https://github.com/Tech-sensei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mx-0.5 px-2 py-1 transition-all duration-500 rounded-xl w-fit backdrop-blur-md bg-[##9595951a] border border-[#9595954d]  hover:bg-[#3f3f3f] "
                >
                  <FaGithub size={20} className="" />
                  <span className="hidden md:block text-white text-sm font-semibold font-geist">GitHub</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/tobiloba-ibraheem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mx-0.5 px-2 py-1 transition-all duration-500 rounded-xl w-fit backdrop-blur-md bg-[#9595951a] border border-[#9595954d]  hover:bg-[#3f3f3f] "
                >
                  <FaLinkedinIn size={20} className="" />
                  <span className="hidden md:block text-white text-sm font-semibold font-geist">LinkedIn</span>
                </Link>

                <Link
                  href="https://x.com/Im_Tobilobah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mx-0.5 px-2 py-1 transition-all duration-500 rounded-xl w-fit backdrop-blur-md bg-[##9595951a] border border-[#9595954d]  hover:bg-[#3f3f3f] "
                >
                  <FaTwitter size={20} className="" />
                  <span className="hidden md:block text-white text-sm font-semibold font-geist">Twitter</span>
                </Link>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-center md:text-left md:text-base text-neutral-400 font-geist md:font-medium mt-6 leading-8"
            >
              I am a frontend Developer with a passion for creating beautiful and functional user interfaces. I specialize in React, Next.js,
              and Tailwind CSS. My work involves transforming complex challenges into simple, elegant design solutions. I enjoy working on
              digital interfaces, interactive experiences, and the convergence of design and technology.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-center md:text-left md:text-base text-neutral-400 font-geist md:font-medium mt-6 leading-8"
            >
              When I'm not busy slaying bugs and writing code, I'm usually busy indulging in my two favorite hobbies: playing video game and
              tinkering with gadgets to bring them back to life. I firmly believe that playing video game increases your creativity by 5%.
            </motion.p>
          </div>

          {/* Work experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-start gap-2 w-full md:max-w-[90%] mx-auto"
          >
            <h2 className="text-white text-3xl font-bold font-jetBrains capitalize leading-tight mb-4">
              Work <span className="text-purple">Experience</span>
            </h2>

            {/* work1 - Radiksez */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col items-start gap-4 w-full mt-6 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-lg font-semibold font-jetBrains">Frontend Engineer</h3>
                  <span className="text-base text-purple font-geist">Radiksez</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-neutral-400 text-xs font-geist">Full-time</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400 text-xs font-geist">Lagos State, Nigeria · Remote</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-neutral-400 text-sm font-jetBrains md:whitespace-nowrap">Nov 2025 - Present</p>
                  <p className="text-neutral-500 text-xs font-jetBrains">3 mos</p>
                </div>
              </div>

              <p className="text-neutral-300 text-sm md:text-base font-geist leading-relaxed">
                Spearheading the development of Radiksez's core web platform, improving page load time by 40% through code optimization and efficient image handling. Building scalable frontend solutions using modern React.js and TypeScript, ensuring maintainable and performant codebase.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">JavaScript</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">TypeScript</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">React.js</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">Next.js</span>
              </div>
            </motion.div>

            {/* work2 - EverythingAfrican */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col items-start gap-4 w-full mt-6 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-lg font-semibold font-jetBrains">Frontend Engineer</h3>
                  <span className="text-base text-purple font-geist">EVERYTHINGAFRICAN LTD.</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-neutral-400 text-xs font-geist">Contract</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400 text-xs font-geist">Manchester, England, United Kingdom · Remote</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-neutral-400 text-sm font-jetBrains md:whitespace-nowrap">Jun 2024 - Oct 2025</p>
                  <p className="text-neutral-500 text-xs font-jetBrains">1 yr 5 mos</p>
                </div>
              </div>

              <p className="text-neutral-300 text-sm md:text-base font-geist leading-relaxed">
                Developed and maintained core e-commerce features using React.js and Next.js, ensuring high performance and smooth user experience. Implemented responsive designs and optimized frontend performance, contributing to improved conversion rates and customer satisfaction.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">JavaScript</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">TypeScript</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">React.js</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">Next.js</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">Tailwind CSS</span>
              </div>
            </motion.div>

            {/* work3 - Lyvadsinc */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col items-start gap-4 w-full mt-6 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-lg font-semibold font-jetBrains">Frontend Engineer</h3>
                  <span className="text-base text-purple font-geist">Lyvadsinc.</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-neutral-400 text-xs font-geist">Contract</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400 text-xs font-geist">Lagos, Lagos State, Nigeria · Remote</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-neutral-400 text-sm font-jetBrains md:whitespace-nowrap">Mar 2024 - Aug 2025</p>
                  <p className="text-neutral-500 text-xs font-jetBrains">1 yr 6 mos</p>
                </div>
              </div>

              <p className="text-neutral-300 text-sm md:text-base font-geist leading-relaxed">
                Built and maintained the admin dashboard and marketing landing website using React.js, TypeScript, and Tailwind CSS, ensuring scalability and clean UI architecture. Collaborated with cross-functional teams to deliver high-quality features and improve user experience.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">Nuxt.js</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">Vue.js</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">React.js</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">TypeScript</span>
                <span className="px-3 py-1 bg-purple/20 text-purple border border-purple/40 rounded-full text-xs font-jetBrains">Tailwind CSS</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Education*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col items-start gap-2 w-full md:max-w-[90%] mx-auto"
          >
            <h2 className="text-white text-3xl font-bold font-jetBrains capitalize leading-tight mb-4">
              <span className="text-purple">Education</span>
            </h2>

            {/* education1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex flex-col items-start gap-4 w-full mt-6 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-base md:text-lg font-semibold font-jetBrains">Obafemi Awolowo University, Ile Ife, Osun State</h3>
                  <span className="text-sm md:text-base text-purple font-geist">B.Sc Biochemistry and Molecular Biology</span>
                </div>

                <p className="text-neutral-400 text-sm font-jetBrains md:whitespace-nowrap">Mar 2019 - Sept 2024</p>
              </div>
            </motion.div>

            {/* education2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex flex-col items-start gap-4 w-full mt-6 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                <div className="flex flex-col items-start">
                  <h3 className="text-white text-base md:text-lg font-semibold font-jetBrains">Altschool Africa, Lagos Nigeria</h3>
                  <span className="text-sm md:text-base text-purple font-geist">Diploma in Frontend Engineering</span>
                </div>

                <p className="text-neutral-400 text-sm font-jetBrains md:whitespace-nowrap">Jan 2022 - Dec 2023</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex flex-col items-start gap-2 w-full md:max-w-[90%] mx-auto"
          >
            <h2 className="text-white text-3xl font-bold font-jetBrains capitalize leading-tight mb-4">
              Skills & <span className="text-purple">Expertise</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="flex flex-col items-start gap-6 w-full mt-6 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300"
            >
              {/* Frontend Development */}
              <div className="w-full">
                <h3 className="text-white text-lg font-semibold font-jetBrains mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "HTML5", "CSS3"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple/20 text-purple border border-purple/40 rounded-full text-sm font-jetBrains font-semibold hover:bg-purple hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Styling & UI */}
              <div className="w-full">
                <h3 className="text-white text-lg font-semibold font-jetBrains mb-3">Styling & UI Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tailwind CSS", "Framer Motion", "Redux", "Styled Components", "SASS/SCSS"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple/20 text-purple border border-purple/40 rounded-full text-sm font-jetBrains font-semibold hover:bg-purple hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Workflow */}
              <div className="w-full">
                <h3 className="text-white text-lg font-semibold font-jetBrains mb-3">Tools & Workflow</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Vite", "Webpack", "Figma", "VS Code", "Vercel", "Netlify"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple/20 text-purple border border-purple/40 rounded-full text-sm font-jetBrains font-semibold hover:bg-purple hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="w-full">
                <h3 className="text-white text-lg font-semibold font-jetBrains mb-3">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Agile/Scrum", "Team Collaboration", "Code Review", "Mentoring", "Problem Solving", "UI/UX Design"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple/20 text-purple border border-purple/40 rounded-full text-sm font-jetBrains font-semibold hover:bg-purple hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex flex-col items-start gap-2 w-full md:max-w-[90%] mx-auto"
          >
            <h2 className="text-white text-3xl font-bold font-jetBrains capitalize leading-tight mb-4">
              Interests & <span className="text-purple">Hobbies</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6"
            >
              {/* Gaming */}
              <div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🎮</span>
                  <h3 className="text-white text-lg font-semibold font-jetBrains group-hover:text-purple transition-colors duration-300">
                    Gaming
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm font-geist leading-relaxed">
                  Passionate gamer who believes that playing video games increases creativity by 5%. I enjoy exploring virtual worlds and solving complex in-game challenges.
                </p>
              </div>

              {/* Tech Tinkering */}
              <div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🔧</span>
                  <h3 className="text-white text-lg font-semibold font-jetBrains group-hover:text-purple transition-colors duration-300">
                    Tech Tinkering
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm font-geist leading-relaxed">
                  Love tinkering with gadgets and bringing them back to life. There's something satisfying about understanding how things work and fixing them.
                </p>
              </div>

              {/* Learning */}
              <div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">📚</span>
                  <h3 className="text-white text-lg font-semibold font-jetBrains group-hover:text-purple transition-colors duration-300">
                    Continuous Learning
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm font-geist leading-relaxed">
                  Always exploring new technologies, frameworks, and best practices. I believe in staying updated with the ever-evolving tech landscape.
                </p>
              </div>

              {/* Community */}
              <div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-purple/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🤝</span>
                  <h3 className="text-white text-lg font-semibold font-jetBrains group-hover:text-purple transition-colors duration-300">
                    Community Building
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm font-geist leading-relaxed">
                  Enjoy sharing knowledge with fellow developers, mentoring juniors, and contributing to the tech community through collaboration.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
