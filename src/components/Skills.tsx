import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Sparkles, Boxes, Terminal, Database, Cpu } from "lucide-react";
import React from "react";

const FloatingObject = ({ 
  children, 
  basePosition,
  motionMultiplier = 1,
  className = ""
}: {
  children: React.ReactNode;
  basePosition: { x: number; y: number };
  motionMultiplier?: number;
  className?: string;
}) => {
  const mouseRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) return;
      
      const rect = mouseRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to object center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Calculate angle and distance
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 100);
      
      // Move towards mouse with easing
      const targetX = Math.cos(angle) * distance * motionMultiplier * 0.2;
      const targetY = Math.sin(angle) * distance * motionMultiplier * 0.2;
      
      setPosition({
        x: basePosition.x + targetX,
        y: basePosition.y + targetY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [basePosition, motionMultiplier]);

  return (
    <motion.div
      ref={mouseRef}
      className={`absolute ${className}`}
      animate={{
        x: position.x,
        y: position.y,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }
      }}
      initial={{ opacity: 0, scale: 0, x: basePosition.x, y: basePosition.y }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

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
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Desktop Floating Objects */}
      <div className="absolute top-12 right-8 md:right-12 lg:right-40">
        <FloatingObject 
          basePosition={{ x: 0, y: 0 }}
          className="hidden md:block"
        >
          <div className="p-4 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl">
            <Code className="w-6 h-6 text-primary/60" />
          </div>
        </FloatingObject>

        <FloatingObject 
          basePosition={{ x: -80, y: 20 }}
          motionMultiplier={1.2}
          className="hidden md:block"
        >
          <div className="p-3 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-full">
            <Terminal className="w-5 h-5 text-primary/60" />
          </div>
        </FloatingObject>

        <FloatingObject 
          basePosition={{ x: 60, y: 60 }}
          motionMultiplier={0.8}
          className="hidden md:block"
        >
          <div className="p-4 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl rotate-12">
            <Database className="w-6 h-6 text-primary/60" />
          </div>
        </FloatingObject>
      </div>

      {/* Mobile Floating Objects */}
      <div className="absolute top-8 right-4">
        <FloatingObject 
          basePosition={{ x: 0, y: 0 }}
          className="md:hidden"
        >
          <div className="p-3 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl">
            <Code className="w-4 h-4 text-primary/60" />
          </div>
        </FloatingObject>

        <FloatingObject 
          basePosition={{ x: -40, y: 30 }}
          motionMultiplier={1.2}
          className="md:hidden"
        >
          <div className="p-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-full">
            <Terminal className="w-4 h-4 text-primary/60" />
          </div>
        </FloatingObject>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
