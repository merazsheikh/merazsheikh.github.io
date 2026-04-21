import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Database, BarChart3, Brain, FileSpreadsheet, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const featuredProjects = [
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
      pdfLabel: "Paper",
    },
    {
      icon: Brain,
      title: "Clinical Outcomes EDA — SUPPORT2 Dataset",
      category: "Healthcare · EDA · Group Project",
      description:
        "Full exploratory analysis of the UCI SUPPORT2 dataset (9,105 seriously ill patients, 48 clinical and demographic variables) to identify predictors of in-hospital mortality. Variable-specific imputation, dual outlier detection (IQR + 3σ), and findings translated into 8 actionable recommendations.",
      result: "Identified PaO₂/FiO₂ ratio, mean blood pressure, and sodium as strong mortality signals",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Clinical Data"],
      color: "text-primary",
      repo: "TODO_SUPPORT2_REPO_URL",
      pdf: "TODO_SUPPORT2_SLIDES_URL",
      pdfLabel: "Slides",
    },
    {
      icon: BarChart3,
      title: "Multiclass Handwritten Digit Classification",
      category: "Machine Learning · Model Comparison",
      description:
        "End-to-end comparison of 8 classical ML algorithms on the scikit-learn Digits dataset (10-class multiclass). Full pipeline: StandardScaler preprocessing, 80/20 split, GridSearchCV tuning, and evaluation across accuracy, balanced accuracy, F1, macro-averaged ROC-AUC, confusion matrices, and learning curves. Tested LDA variants for Logistic Regression and SVM to measure when dimensionality reduction helps.",
      result: "KNN won at 98.33% after tuning; Gaussian Naive Bayes showed the largest gain (74.17% → 88.61%) from tuning var_smoothing",
      technologies: ["Python", "Scikit-learn", "GridSearchCV","LDA", "SVM", "KNN"],
      color: "text-accent",
      repo: "TODO_BINARY_CLASSIFICATION_REPO_URL",
    },
    {
      icon: TrendingUp,
      title: "GBP/USD Exchange Rate Forecasting — Deep Learning",
      category: "Deep Learning · Time-Series",
      description:
          "Built and compared deep learning models for daily GBP/USD forecasting on 1,200 NASDAQ samples (Aug 2020 - Jan 2025). Developed and evaluated the GRU model, co-designed a custom DNN, and unified across 4 model implementations. Built DNN, LSTM, GRU, a hybrid LSTM-GRU, and a regression feedforward and compared on RMSE, MAPE, and R².",
      result: "GRU achieved RMSE 0.0040, MAPE 0.22%, R² 0.9724 — comparable to LSTM. Found that the hybrid LSTM-GRU underperformed both base models (MAPE 0.39%).",
      technologies: ["Python", "TensorFlow", "Keras", "Time-Series", "GRU", "LSTM", "DNN", "RobustScaler"],
      color: "text-secondary",
      repo: "TODO_GBP_USD_REPO_URL",
    },
  ];

  const academicProjects = [
    {
      icon: BarChart3,
      title: "Montgomery County Crime Analysis",
      category: "EDA · Data Visualisation",
      description:
        "Analyzed 306K+ crime records (2016–2022) across location, time, season, and COVID-19 periods. 20 targeted visualizations and Spearman correlation analysis led to crime prevention recommendations.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      repo: "TODO_MONTGOMERY_REPO_URL",
    },
    {
      icon: TrendingUp,
      title: "SFO Airport Satisfaction — Logistic Regression",
     category: "Predictive Modeling · R",
      description:
        "Built a logistic regression model on 3,651 passenger survey records to identify drivers of airport satisfaction. Backward elimination with AIC comparison across 3 candidate models. Found cleanliness and wait time as significant predictors; flight destination and frequency were not.",
      technologies: ["R", "Logistic Regression", "AIC", "Statistical Modeling"],
      repo: "TODO_SFO_LOGREG_REPO_URL",
   },
    {
      icon: FileSpreadsheet,
      title: "Staff Performance Report (R)",
      category: "Statistical Analysis · R",
      description:
        "Descriptive statistics and cross-group comparisons on local government staff data (366 employees, 5 departments). Report structured for a non-technical audience.",
      technologies: ["R", "ggplot2", "Descriptive Statistics"],
      repo: "TODO_R_COURSEWORK_REPO_URL",
    },
    {
      icon: Database,
      title: "Royal Anchor Shipping — Database Design",
      category: "Data Modeling · SQL",
      description:
        "Translated a multi-page shipping industry brief into a normalized 15-table Oracle schema with 16 business-rule constraints, proper cardinalities, and junction tables for many-to-many relationships. Wrote 6 multi-table SQL queries (joins across 4+ tables, aggregations, ETA calculations) to validate system requirements.",
      technologies: ["Oracle SQL", "ERD", "Normalization", "Data Modeling", "DDL"],
      repo: "TODO_LOGISTICS_DB_REPO_URL",
    },
    {
      icon: BarChart3,
      title: "UK Flight Punctuality — Data Warehouse & Tableau",
      category: "Data Warehousing · BI · ELT",
      description:
        "End-to-end star-schema data warehouse built on 24 months of UK flight punctuality data. Designed fact + 5 dimension tables in Oracle APEX, built an ELT pipeline (Power Query consolidation → staging → transformed dimensional load with surrogate keys), and produced 4 Tableau dashboards surfacing cancellation hotspots, airline delay trends, and on-time performance by country.",
      technologies: ["Oracle APEX", "SQL", "Star Schema", "ELT", "Tableau", "Power Query"],
      repo: "TODO_FLIGHT_WAREHOUSE_REPO_URL",
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const buttonClass =
    "inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors";

  const smallButtonClass =
    "inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded text-xs font-medium transition-colors";

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

        {/* Featured Projects - large cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {featuredProjects.map((project, index) => (
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
                        ? "perspective(1000px) rotateY(3deg)"
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
                    {project.pdf && !project.pdf.startsWith("TODO") && (
                      <button
                        type="button"
                        onClick={() => openLink(project.pdf!)}
                        className={buttonClass}
                      >
                        <FileText size={16} />
                        {project.pdfLabel || "Paper"}
                      </button>
                    )}
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Academic / Supporting Projects - compact cards */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Academic <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Coursework across the MS Data Science programme at Kingston University.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="h-full">
                  <Card className="p-6 bg-card border-border h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <project.icon className="text-primary" size={20} />
                      </div>
                      <span className="text-xs font-medium text-primary">{project.category}</span>
                    </div>

                    <h4 className="text-base font-bold mb-2">{project.title}</h4>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-background/50 rounded text-[10px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.repo && !project.repo.startsWith("TODO") && (
                      <button
                        type="button"
                        onClick={() => openLink(project.repo!)}
                        className={smallButtonClass + " self-start mt-auto"}
                      >
                        <Github size={14} />
                        Code
                      </button>
                    )}
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;