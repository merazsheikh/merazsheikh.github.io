import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Database, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      icon: TrendingUp,
      title: "GBP/USD Exchange Rate Forecasting",
      category: "Deep Learning",
      description:
        "Built and optimized DNN, LSTM, GRU, CNN, and custom FNN for financial time-series forecasting, achieving high accuracy in predicting currency exchange rates.",
      technologies: ["Python", "TensorFlow", "LSTM", "CNN", "Time-Series"],
      color: "text-primary",
    },
    {
      icon: Target,
      title: "Binary Classification Comparative Study",
      category: "Machine Learning",
      description:
        "Tested 8 ML models with and without LDA preprocessing. Achieved 98.3% accuracy with KNN algorithm, demonstrating the impact of dimensionality reduction.",
      technologies: ["Scikit-learn", "KNN", "LDA", "Python", "Statistical Analysis"],
      color: "text-secondary",
    },
    {
      icon: Database,
      title: "Global Shipping Logistics Database",
      category: "Database Design",
      description:
        "Designed and normalized 15+ table relational database with comprehensive SQL queries for clients, reservations, and shipping logistics management.",
      technologies: ["SQL", "Database Design", "ERD", "Normalization", "PostgreSQL"],
      color: "text-accent",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing data science and engineering projects with real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="p-8 bg-card border-border group cursor-pointer relative overflow-hidden"
                  style={{
                    transform: hoveredIndex === index ? "perspective(1000px) rotateY(5deg)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <motion.div
                      className="p-4 bg-muted rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <project.icon className={project.color} size={32} />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                        size={20}
                      />
                    </motion.div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-primary mb-4 relative z-10">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-background/50 rounded-full text-xs font-medium"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
