import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatedSection delay={0}>
            <Card className="p-8 bg-card hover-lift border-border">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Location</h3>
            </div>
            <p className="text-muted-foreground mb-6">Hounslow, London</p>
            
            <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
            <p className="font-medium text-primary mb-3">Data Scientist, AI & ML Engineer</p>
            <p className="text-muted-foreground leading-relaxed">
              Data Scientist with strong expertise in machine learning, computer vision, and deep learning. 
              I build end-to-end ML systems and APIs that solve real problems—from research-grade models to 
              production deployment. Passionate about turning data into actionable insights and driving innovation 
              in fast-paced tech environments.
            </p>
          </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="p-8 bg-card hover-lift border-border">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-secondary" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  Master in Data Science
                </h4>
                <p className="text-muted-foreground font-medium mb-1">
                  Kingston University
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Sep 2024 – Sep 2025 · Distinction
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Dissertation: Deepfake Detection using Image Augmentation
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-bold text-primary mb-2">
                  Bachelor in Information Technology
                </h4>
                <p className="text-muted-foreground font-medium mb-1">
                  Arunodaya University
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Aug 2017 – Jul 2020
                </p>
                <p className="text-sm text-muted-foreground italic">
                  First Class Honours
                </p>
              </div>
            </div>
          </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
