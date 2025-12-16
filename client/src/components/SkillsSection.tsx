import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Database,
  Globe,
  Server,
  Smartphone,
  Cloud,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  id: string;
  name: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "Java", "TypeScript", "HTML/CSS", "SQL"],
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    icon: Brain,
    skills: ["TensorFlow", "Machine Learning", "Computer Vision", "Deep Learning", "MediaPipe"],
  },
  {
    id: "web",
    name: "Web Dev",
    icon: Globe,
    skills: ["React", "Flask", "Django", "Node.js", "REST APIs"],
  },
  {
    id: "cloud",
    name: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Cloud Applications", "Serverless"],
  },
  {
    id: "database",
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Mobile Development"],
  },
];

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: "aws",
    name: "AWS Academy Cloud Web Application Builder",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    skills: ["Cloud", "AWS"],
  },
  {
    id: "mlwp",
    name: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "Aug 2024",
    skills: ["Python", "ML"],
  },
  {
    id: "cs50p",
    name: "CS50P: Programming With Python",
    issuer: "CS50 / Harvard",
    date: "Mar 2023",
    skills: ["Python"],
  },
  {
    id: "cs50x",
    name: "CS50x: Computer Science",
    issuer: "Harvard University",
    date: "Jan 2023",
    skills: ["CS", "Web Dev", "AI"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono text-xs">
            Technical Expertise
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Skills & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full hover-elevate">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-mono text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
            Certifications
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="p-4 hover-elevate">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-accent">
                    <Layers className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground truncate">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="font-mono text-xs text-primary mt-1">{cert.date}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
