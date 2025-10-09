import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Node.js", "Express.js", "React Native"],
  },
  {
    title: "CSS & UI",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "ShadCN", "Framer"],
  },
  {
    title: "State Management",
    skills: ["Redux", "Jotai", "Zustand", "Context API", "Vue Store"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Github Actions", "Figma", "Adobe XD", "Postman"],
  },
  {
    title: "Competencies",
    skills: ["GenAI", "OpenAI", "Team Leadership", "Product Development", "MVP Coordination"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/40 transition-all duration-300 hover-lift h-full">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-sm rounded-md border border-border hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
