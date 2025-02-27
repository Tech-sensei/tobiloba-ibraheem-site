import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import ContactSection from "@/components/views/Contact";
import HeroSection from "@/components/views/Hero";
import WorkSection from "@/components/views/Work";
import { WorldMapDemo } from "@/components/views/WorldMapDemo";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam>
          <HeroSection />
          <WorkSection />
          <ContactSection />
          <WorldMapDemo />
        </TracingBeam>
      </div>
    </main>
  );
}
