import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, hsl(189 94% 43% / 0.15) 0%, transparent 50%)`,
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full text-sm font-medium text-primary">
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Meraz Jalaluddin{" "}
              <span className="gradient-text">Sheikh</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Aspiring Data Scientist | Data Engineer | API Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Transforming data into actionable insights with expertise in machine learning, 
              deep learning, and scalable API development. Based in London.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/merazsheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/merazsheikh-dataanalyst"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:merazsheikh27@gmail.com"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={profileImage}
                alt="Meraz Jalaluddin Sheikh"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
