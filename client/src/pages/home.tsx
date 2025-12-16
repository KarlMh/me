import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <CursorFollower />
      <ScrollProgress />
      <Navigation activeSection={activeSection} onNavClick={setActiveSection} />
      <main className="relative z-10">
        <HeroSection onViewProjects={() => setActiveSection("projects")} />
        <FeaturedProject onLearnMore={() => console.log("Learn more")} />
        <ExperienceTimeline />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
