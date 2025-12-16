import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      onViewProjects={() => console.log("View projects clicked")}
    />
  );
}
