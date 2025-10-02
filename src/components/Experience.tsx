import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const Experience = () => {
  const achievements = [
    "Migrated 100+ APIs from CA Layer7 to Apigee for HDFC and TransUnion CIBIL clients",
    "Developed RESTful APIs handling 5M+ requests with 99% uptime",
    "Implemented OAuth 2.0 & JWT for financial data security",
    "Collaborated with QA teams, deployed using CI/CD pipelines",
    "Monitored API performance using Splunk & Dynatrace, optimizing performance",
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

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Card className="p-8 md:p-12 bg-card border-border hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">API Developer</h3>
                <p className="text-xl text-primary font-semibold mb-2">
                  Allied Globetech
                </p>
                <p className="text-muted-foreground">
                  Jul 2021 – Aug 2024 • 3 years 2 months
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h4 className="text-lg font-bold mb-4">Key Achievements:</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
                {["RESTful APIs", "Apigee", "OAuth 2.0", "JWT", "Splunk", "Dynatrace", "CI/CD", "Jira", "GitHub"].map((tech) => (
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
