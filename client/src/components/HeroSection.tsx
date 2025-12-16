import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBackground from "@assets/generated_images/tech_hero_background_gradient.png";

interface HeroSectionProps {
  onViewProjects?: () => void;
  onDownloadCV?: () => void;
}

export default function HeroSection({ onViewProjects, onDownloadCV }: HeroSectionProps) {
  const scrollToProjects = () => {
    onViewProjects?.();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 gap-2">
              <Sparkles className="h-3 w-3" />
              <span className="font-mono text-xs">Open to Opportunities</span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          >
            Karl Mehanna
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-2"
          >
            Computer Engineer Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-sm text-primary mb-8"
          >
            AI & Machine Learning Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-muted-foreground mb-10 leading-relaxed"
          >
            I am passionate about artificial intelligence and emerging technologies.
            Currently studying at UTT in France, seeking internships in AI, software
            development, and information systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" onClick={scrollToProjects} data-testid="button-view-projects">
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onDownloadCV}
              data-testid="button-download-cv"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
