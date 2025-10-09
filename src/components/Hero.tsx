import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative section-padding md:overflow-auto overflow-hidden">
      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl w-full">
        <div className="space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-muted-foreground text-lg md:text-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi there, I'm
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className="absolute bottom-0 -z-10 right-0 origin-left w-full h-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-60"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              Jyoti Ranjan <span className="text-gradient">Biswal</span>
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Frontend Lead
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            With a proven track record of developing interactive web applications and mentoring development teams,
            I've driven a 50% increase in user satisfaction and 80% improvement in product efficiency through
            cutting-edge technologies and exceptional UI/UX design.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect font-semibold md:w-auto w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
              asChild
            >
              <a href="https://github.com/JRanjan-Biswal" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 hover:border-primary/40"
              asChild
            >
              <a href="https://linkedin.com/in/jyoti-ranjan-biswal/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
