"use client";

import React from "react";
import { HeroSection } from "@/components/views/HeroSection";
import SkillSection from "@/components/views/SkillSection";
import { TimelineDemo } from "@/components/ui/TimelineDemo";

export default function Home() {
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-6 px-4 pb-12 max-w-[90rem] w-full">
      <HeroSection />
      <SkillSection />
      <TimelineDemo />
    </main>
  );
}
