import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavClick={setActiveSection} />
      <main>
        <HeroSection
          onViewProjects={() => setActiveSection("projects")}
          onDownloadCV={handleDownloadCV}
        />
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
