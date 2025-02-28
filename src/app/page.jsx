import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import ContactSection from "@/components/views/ContactSection";
import HeroSection from "@/components/views/HeroSection";
import SkillSection from "@/components/views/SkillSection";
import WorkSection from "@/components/views/WorkSection";
import { WorldMapSection } from "@/components/views/WorldMapSection";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pb-12">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam>
          <HeroSection />
          <WorkSection />
          <SkillSection />
          {/* <WorldMapSection /> */}
          <ContactSection />
        </TracingBeam>
      </div>
    </main>
  );
}
