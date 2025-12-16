import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Eye, Brain, Camera } from "lucide-react";
import { motion } from "framer-motion";
import signLanguageImage from "@assets/generated_images/sign_language_ml_project_visual.png";

interface FeaturedProjectProps {
  onLearnMore?: () => void;
}

const techStack = [
  "Python",
  "TensorFlow",
  "OpenCV",
  "MediaPipe",
  "Computer Vision",
  "Deep Learning",
];

export default function FeaturedProject({ onLearnMore }: FeaturedProjectProps) {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge variant="outline" className="mb-4 font-mono text-xs">
            Featured Project
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Sign Language Translation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-video">
                <img
                  src={signLanguageImage}
                  alt="Sign Language Translation Project - Computer Vision and ML"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge className="gap-1">
                    <Brain className="h-3 w-3" />
                    ML
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Camera className="h-3 w-3" />
                    CV
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <p className="font-mono text-xs text-primary mb-2">Aubay Paris | Internship</p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Real-time Sign Language to Text
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed an innovative system that translates sign language gestures into
                written text in real-time using machine learning and computer vision
                technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The project leverages MediaPipe for hand tracking and custom-trained deep
                learning models to recognize and interpret sign language patterns with high
                accuracy.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-muted-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={onLearnMore} data-testid="button-learn-more">
                <Eye className="h-4 w-4 mr-2" />
                Learn More
              </Button>
              <Button variant="outline" data-testid="button-github">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
