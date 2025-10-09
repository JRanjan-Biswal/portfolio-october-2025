import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Schbang Digital Solutions",
    role: "Frontend Lead",
    period: "Nov. 2022 – Present",
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
    period: "2022",
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
    period: "2022",
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

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="p-6 md:p-8 bg-card border-border hover:border-primary/40 transition-all duration-300 hover-lift">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground font-medium">{exp.period}</div>
              </div>

                <ul className="space-y-3 ml-14">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
