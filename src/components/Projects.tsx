import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EComCart website",
    description: "A responsive e-commerce website for car sales built with React and Tailwind CSS. It features a clean design, smooth navigation, and a user-friendly interface for browsing and purchasing cars online.",
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://ecom-cart-fe.onrender.com/",
    github: "https://github.com/JRanjan-Biswal/ecom-cart-fe",
  },
  {
    title: "Tic Tac Toe Game Live Play",
    description: "A responsive tic tac toe game built with React and Tailwind CSS. It features a clean design, with real time game play and chat functionality.",
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Socket.io", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    link: "https://tic-tac-toe-game-fe.onrender.com/",
    github: "https://github.com/JRanjan-Biswal/tic-tac-toe-game-fe",
  },
  {
    title: "Next.js Template Generator",
    description: "Developed a Next.js template generator that reduces project setup time by 50% by automating configuration and dependency management, minimizing common setup errors and streamlining the development workflow.",
    tags: ["Next.js", "CLI Tool", "NPM Package", "TypeScript"],
    link: "https://www.npmjs.com/package/get-next-template",
    github: "https://github.com/JRanjan-Biswal",
  },
  {
    title: "XCamper",
    description: "A vehicle booking web application using Next.js for server-side rendering and optimized performance. Implemented Firebase Cloud Messaging (FCM) to enable real-time push notifications for booking updates and user alerts.",
    tags: ["Next.js", "Firebase", "FCM", "React", "Real-time"],
    link: "https://xcamper.com/",
  },
  {
    title: "Strapi Deep Populate",
    description: "A strapi plugin that allows you to deeply populate your data. It features a clean design, smooth navigation, and a user-friendly interface for browsing and purchasing cars online.",
    tags: ["Strapi", "Plugin", "JavaScript", "TypeScript"],
    link: "https://github.com/JRanjan-Biswal/strapi-deepopulate",
    github: "https://github.com/JRanjan-Biswal/strapi-deepopulate",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="p-6 md:p-8 bg-card border-border hover:border-primary/40 transition-all duration-300 hover-lift flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
                {project.github && (
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
