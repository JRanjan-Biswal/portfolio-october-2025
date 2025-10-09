import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("#")}
              className="text-xl md:text-2xl font-bold hover:text-primary transition-colors"
            >
              JRB<span className="text-primary">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <span className="w-full group-hover:bg-primary" />
                <span className="w-2/3 ml-auto group-hover:w-full group-hover:bg-primary" />
                <span className="w-full group-hover:bg-primary" />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[75vw] bg-background/95 backdrop-blur-lg border-l border-border transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <div className="flex flex-col items-start gap-7 p-8 pt-24">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-xl text-muted-foreground hover:text-primary transition-all transform hover:scale-105 font-medium
                    w-full text-left opacity-0 ${isMobileMenuOpen ? 'animate-fadeSlideInRight' : ''}`}
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className={`mt-auto p-8 border-t border-border opacity-0 ${
              isMobileMenuOpen ? 'animate-fadeSlideInRight' : ''
            }`}
              style={{
                animationDelay: '0.7s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex flex-col gap-4">
                <Button 
                  variant="default" 
                  className="w-full gap-2 text-base font-medium"
                  onClick={() => scrollToSection("#contact")}
                >
                  <Send size={18} />
                  Get in Touch
                </Button>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 gap-2"
                    onClick={() => window.open('https://github.com/jyotiranjan97', '_blank')}
                  >
                    <Github size={18} />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 gap-2"
                    onClick={() => window.open('https://linkedin.com/in/jyotiranjan97', '_blank')}
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
