import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  current?: boolean;
  skills: string[];
}

const educations: Education[] = [
  {
    id: "utt",
    institution: "Université de Technologie de Troyes",
    degree: "Engineer's Degree",
    field: "Computer Engineering (ISI)",
    location: "Troyes, France",
    period: "2024 - 2027",
    current: true,
    skills: ["Programming", "Computer Science", "Information Systems", "AI"],
  },
  {
    id: "usek",
    institution: "Holy Spirit University of Kaslik (USEK)",
    degree: "Engineer's Degree",
    field: "Computer Engineering",
    location: "Lebanon",
    period: "2022 - 2024",
    skills: ["Programming", "Computer Science"],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono text-xs">
            Academic Background
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 h-full hover-elevate ${edu.current ? "border-primary/50" : ""}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-md bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        {edu.institution}
                      </h3>
                      {edu.current && (
                        <Badge className="font-mono text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.field}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-mono text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
