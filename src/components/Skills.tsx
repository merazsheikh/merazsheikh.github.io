import { Card } from "@/components/ui/card";
import { Code2, Database, BarChart3, Wrench, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Data Science",
      skills: [
        "Python",
        "SQL",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Time-Series Analysis",
        "Deep Learning",
        "Statistical Modeling",
      ],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Data Processing",
      skills: [
        "EDA",
        "ETL Pipelines",
        "Data Cleaning",
        "Feature Engineering",
        "PySpark",
        "Dask",
      ],
      color: "text-secondary",
    },
    {
      icon: BarChart3,
      title: "Visualization & BI",
      skills: ["Tableau", "Power BI", "Data Storytelling", "Dashboard Design"],
      color: "text-accent",
    },
    {
      icon: Wrench,
      title: "API Development",
      skills: [
        "RESTful APIs",
        "OAuth 2.0",
        "JWT",
        "Apigee",
        "CI/CD Pipelines",
        "Jira",
        "GitHub",
      ],
      color: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Analytical Thinking",
        "Technical Communication",
        "Team Collaboration",
      ],
      color: "text-secondary",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for data science, engineering, and API development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-card border-border group">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-muted rounded-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <category.icon className={category.color} size={24} />
                    </motion.div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
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

export default Skills;
