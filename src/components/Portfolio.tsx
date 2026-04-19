import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Database, BarChart3, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      icon: Target,
      title: "Deepfake Detection using Image Augmentations",
      category: "Computer Vision · Dissertation",
      description:
        "Benchmarked 11 image augmentation methods across 5 deep learning architectures to measure their real effect on deepfake detection. Used Grad-CAM to visualize what each model actually focuses on when classifying. MS Data Science dissertation, Kingston University 2025.",
      result: "98.2% detection accuracy with an optimized augmentation pipeline",
      technologies: ["PyTorch", "Timm", "Grad-CAM", "Computer Vision", "Deep Learning"],
      color: "text-primary",
      repo: "https://github.com/merazsheikh/deepfake_detection_using_augmentations",
      pdf: "https://github.com/merazsheikh/deepfake_detection_using_augmentations/blob/main/Dissertation_Report_IEEE_K2453542.pdf",
    },
    {
      icon: TrendingUp,
      title: "GBP/USD Exchange Rate Forecasting",
      category: "Deep Learning · Time-Series",
      description:
        "Compared DNN, LSTM, GRU, CNN, and a custom feed-forward network on GBP/USD time-series forecasting. Full pipeline from data ingestion and feature engineering through model training and evaluation.",
      result: "LSTM outperformed baselines — 15% lower MAE at 94% directional accuracy",
      technologies: ["Python", "TensorFlow", "LSTM", "GRU", "Time-Series"],
      color: "text-secondary",
      repo: "https://github.com/merazsheikh/gbpusd-forecasting",
      pdf: "https://github.com/merazsheikh/deepfake_detection_using_augmentations/blob/main/Dissertation_Report_IEEE_K2453542.pdf",
    },
    {
      icon: BarChart3,
      title: "Binary Classification Comparative Study",
      category: "Machine Learning",
      description:
        "Systematically tested 8 ML algorithms with and without LDA preprocessing to measure when dimensionality reduction actually helps versus hurts performance. A useful counter to the \"always use deep learning\" default.",
      result: "KNN reached 98.3% accuracy — highest of the 8 models tested",
      technologies: ["Scikit-learn", "KNN", "LDA", "Python", "Statistical Analysis"],
      color: "text-accent",
      repo: "https://github.com/merazsheikh/gbpusd-forecasting",
      pdf: "https://github.com/merazsheikh/deepfake_detection_using_augmentations/blob/main/Dissertation_Report_IEEE_K2453542.pdf",
    },
    {
      icon: Database,
      title: "Global Shipping Logistics Database",
      category: "Database Design",
      description:
        "Designed and normalized a 15-table relational database for global shipping logistics, covering clients, reservations, shipments, and routing. Wrote complex SQL queries for operational reporting and analytics.",
      result: "Normalized schema with indexed queries for fast transactional reporting",
      technologies: ["PostgreSQL", "SQL", "ERD", "Database Normalization"],
      color: "text-primary",
      repo: "https://github.com/merazsheikh/gbpusd-forecasting",
      pdf: "https://github.com/merazsheikh/deepfake_detection_using_augmentations/blob/main/Dissertation_Report_IEEE_K2453542.pdf",
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const buttonClass =
    "inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors";

  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real projects — ML models, deep learning, production systems. Code and write-ups linked on each card.
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
                className="h-full"
              >
                <Card
                  className="p-8 bg-card border-border group relative overflow-hidden h-full flex flex-col"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "perspective(1000px) rotateY(5deg)"
                        : "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div
                      className="p-4 bg-muted rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <project.icon className={project.color} size={32} />
                    </motion.div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-primary mb-4 relative z-10 self-start">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                    {project.description}
                  </p>

                  {project.result && (
                    <div className="mb-6 p-3 bg-primary/5 border border-primary/20 rounded-lg relative z-10">
                      <p className="text-sm font-medium text-primary">
                        ✓ {project.result}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 relative z-10 mb-6">
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

                  <div className="flex gap-2 relative z-10 mt-auto pt-4 border-t border-border">
                    {project.repo && !project.repo.startsWith("TODO") && (
                      <button
                        type="button"
                        onClick={() => openLink(project.repo!)}
                        className={buttonClass}
                      >
                        <Github size={16} />
                        Code
                      </button>
                    )}
                    {project.pdf && (
                      <button
                        type="button"
                        onClick={() => openLink(project.pdf!)}
                        className={buttonClass}
                      >
                        <FileText size={16} />
                        Paper
                      </button>
                    )}
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