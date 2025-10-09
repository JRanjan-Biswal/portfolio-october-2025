import { Card } from "@/components/ui/card";
import { Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company: "Schbang Digital Solutions",
    role: "Frontend Lead",
    period: "Dec. 2024 – Present",
    highlights: [
      "Led training sessions on core concepts, best practices, and advanced features for the development team",
      "Efficiently managed & resolved complex escalation issues, ensuring timely solutions and maintaining high quality standards",
      "Implemented feedback and performance review processes, boosting team communication and efficiency by 40%",
      "Led front-end development projects, ensuring timely delivery and adherence to client specifications",
    ],
  },
  {
    company: "Schbang Digital Solutions",
    role: "Senior Engineer",
    period: "Jan. 2024 - Dec. 2024",
    highlights: [
      "Conducted thorough code reviews to ensure adherence to best practices, coding standards, and project requirements",
      "Improved the efficiency of legacy codebase, increasing page performance by 30%",
      "Implemented CI/CD for effortless and faster deployment, decreasing deployment time by 60%",
      "Collaborated with cross-functional teams to optimize system performance and resolve technical challenges",
    ],
  },
  {
    company: "Schbang Digital Solutions",
    role: "Junior Engineer",
    period: "Nov. 2022 - Jan. 2024",
    highlights: [
      "Provided guidance to fellow developers navigating the transition from React to Next.js projects",
      "Developed Progressive Web Applications (PWAs) using PWA Studio and Magento",
      "Enhanced user experience and performance across multiple projects",
    ],
  },
  {
    company: "Crio.Do",
    role: "Junior Developer",
    period: "Sep. 2021 – Oct. 2022",
    highlights: [
      "Worked collaboratively with cross-functional teams to develop and refine educational tools",
      "Engaged in ongoing professional development by staying updated with the latest JavaScript trends",
      "Contributed to innovative solutions in educational technology projects",
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey in frontend development and leadership
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className={`p-6 md:p-8 bg-card border-border transition-all duration-300 
                ${expandedIndex === index ? 'max-md:border-primary md:hover:border-primary/40' : 'hover:border-primary/40'}
                ${index === 0 ? '' : 'md:hover-lift'}`}
              >
                <button 
                  className="w-full text-left"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6 md:mb-0 relative">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 md:hidden
                            ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </div>
                      <div className="mt-2 md:mt-1 md:ms-12">
                        <span className="text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {(expandedIndex === index || !('ontouchstart' in window)) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.ul 
                        className="space-y-3 md:ml-14 md:mt-6"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1">{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
