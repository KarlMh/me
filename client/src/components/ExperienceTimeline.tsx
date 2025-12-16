import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Building2, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: "work" | "volunteer";
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: "aubay",
    role: "ML/CV Engineer Intern",
    company: "Aubay",
    location: "Paris, France",
    period: "2024",
    description:
      "Developed a real-time sign language to text translation system using machine learning and computer vision. Worked with TensorFlow, OpenCV, and MediaPipe for gesture recognition.",
    type: "work",
    current: true,
  },
  {
    id: "gamma",
    role: "Engineer Intern",
    company: "Gamma Computer",
    location: "Beirut, Lebanon",
    period: "Jun 2024 - Jul 2024",
    description:
      "2-month internship gaining hands-on experience in computer engineering, working on various technical projects and system implementations.",
    type: "work",
  },
  {
    id: "malta",
    role: "Volunteer",
    company: "Order of Malta Lebanon",
    location: "Lebanon",
    period: "Dec 2021 - Feb 2024",
    description:
      "Dedicated 2+ years to social services, helping communities in need and organizing charitable events.",
    type: "volunteer",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono text-xs">
            Career Path
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-8 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                </div>

                <div className="flex-1 pl-10 md:pl-0" />

                <div className="flex-1 pl-10 md:pl-0">
                  <Card className="p-6 hover-elevate">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-md bg-primary/10">
                        {exp.type === "volunteer" ? (
                          <Heart className="h-5 w-5 text-primary" />
                        ) : (
                          <Building2 className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg text-foreground">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <Badge className="font-mono text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
