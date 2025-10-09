import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 bg-card border-border">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <a
                href="mailto:jranjan2018@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>jranjan2018@gmail.com</span>
              </a>
              <a
                href="tel:+919560501909"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+91 9560501909</span>
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Social Links</h3>
              <a
                href="https://github.com/JRanjan-Biswal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/jyoti-ranjan-biswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect font-semibold"
              asChild
            >
              <a href="mailto:jranjan2018@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </Card>
        </motion.div>

        <motion.div 
          className="text-center mt-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>© 2025 Jyoti Ranjan Biswal.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
