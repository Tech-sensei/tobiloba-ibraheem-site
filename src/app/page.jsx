"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import { TracingBeam } from "@/components/ui/TracingBeam";
import ContactSection from "@/components/views/ContactSection";
import { HeroSection } from "@/components/views/HeroSection";
import SkillSection from "@/components/views/SkillSection";
import WorkSection from "@/components/views/WorkSection";
import { WorldMapSection } from "@/components/views/WorldMapSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-6 px-4 pb-12 max-w-[90rem] w-full">
      {/* <TracingBeam> */}
        <HeroSection />
        {/* introduction */}
        {/* <section className="flex flex-col md:flex-row items-start gap-8 md:gap-16 lg:gap-20 py-10 md:py-20 lg:py-28 w-full">
          <div className="flex flex-col items-start w-full md:w-3/5 ">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-jetBrains leading-[125%] tracking-wide capitalize">
              Frontend Engineer <br /> and builder
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 leading-normal font-geist max-w-[640px] mt-4">
              I'm Tobiloba, a Frontend engineer at
              <span className="ml-1 bg-[#9595951a] border border-[#9595954d] px-2 py-0.5 rounded-xl">Radiksez</span>, where I craft
              intuitive user experiences. After hours, I build my own projects.
            </p>

            <Link
              href="/Tobiloba_Ibraheem_CV.pdf"
              download="Tobiloba_Ibraheem_CV.pdf"
              target="_blank"
              className="mt-6 inline-flex items-center rounded-full bg-[#151515] border border-[#3f3f3f] shadow-md backdrop-blur-md px-4 py-2 transition-all duration-300 ease-in-out group hover:shadow-lg"
            >
              <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-xl mr-2">
                <Image
                  src="/Tobiloba_Ibraheem_png.png"
                  alt="Profile Picture"
                  width={28}
                  height={28}
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
              <span className="font-jetBrains font-semibold text-sm text-white">About Me</span>
              <IoIosArrowRoundForward
                size={20}
                className="ml-1 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </div>
        </section> */}

        <SkillSection />
        <ContactSection />
      {/* </TracingBeam> */}
    </main>
  );
}
