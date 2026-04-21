import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const Experience = () => {
  const roles = [
    {
      title: "Research Assistant - Intrusion Detection Systems",
      company: "Kingston University",
      period: "Jan 2025 – Present",
      location: "Kingston, UK",
      label: "Current Role",
      achievements: [
        "Processed 16M+ network flow records from the CICIDS2018 dataset - data cleaning, normalization, and feature engineering across 80+ features",
        "Tackled severe class imbalance with SMOTE and undersampling, significantly improving minority-class detection",
        "Trained and evaluated Random Forest and XGBoost models (binary and multi-class) with GridSearchCV hyperparameter tuning and cross-validation",
        "Built reproducible end-to-end ML pipelines in Python (Pandas, NumPy, Scikit-learn) with results documented for academic publication",
        "Visualized findings via confusion matrices, ROC curves, and feature-importance plots (Matplotlib, Seaborn)",
      ],
      tech: ["Python", "Scikit-learn", "XGBoost", "SMOTE", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "API Developer",
      company: "Allied Globetech",
      period: "Jul 2021 – Aug 2024 · 3 years 2 months",
      location: "Mumbai, India · Clients: HDFC, TransUnion CIBIL",
      label: "Previous Role",
      achievements: [
        "Led API migration from CA Layer7 to Apigee Edge and Kong Gateway for HDFC and TransUnion CIBIL, improving scalability and governance",
        "Developed RESTful and SOAP services handling 5M+ transactions with 99% uptime across the full API lifecycle - design, testing, CI/CD deployment",
        "Implemented OAuth 2.0, JWT, IP whitelisting, and cryptographic protections for sensitive financial data and regulatory compliance",
        "Applied rate limiting and traffic-control policies to manage high-volume workloads on fintech APIs",
        "Monitored production APIs with Splunk and Dynatrace, cutting incident response time through proactive alerting",
        "Worked in Agile teams with Backend, QA, and Product Managers; mentored junior developers and led knowledge-sharing sessions",
      ],
      tech: ["RESTful APIs", "Apigee", "Kong", "OAuth 2.0", "JWT", "Splunk", "Dynatrace", "Jenkins", "CI/CD", "Postman", "Jira"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {roles.map((role, roleIndex) => (
            <AnimatedSection key={role.company} delay={roleIndex * 0.1}>
              <Card className="p-8 md:p-12 bg-card border-border hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-primary/80 font-semibold uppercase tracking-wider mb-1">
                      {role.label}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{role.title}</h3>
                    <p className="text-xl text-primary font-semibold mb-2">
                      {role.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {role.period}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {role.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <h4 className="text-lg font-bold mb-4">Key Achievements:</h4>
                  {role.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <CheckCircle2
                        className="text-primary mt-1 flex-shrink-0"
                        size={20}
                      />
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-bold mb-4">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;