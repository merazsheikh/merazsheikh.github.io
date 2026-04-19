import { Card } from "@/components/ui/card";
import { Server, Brain, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Data Science & Machine Learning",
      description:
        "End-to-end ML pipelines — from EDA and feature engineering to model training, evaluation, and deployment. Experienced across computer vision, time-series forecasting, and classical ML with production-grade reproducibility.",
      features: [
        "Predictive Modeling & Classification",
        "Computer Vision & Deep Learning",
        "Feature Engineering & EDA",
        "Model Evaluation & Interpretability",
      ],
      color: "text-primary",
    },
    {
      icon: Server,
      title: "API Development & Integration",
      description:
        "Secure, scalable RESTful APIs for high-volume production environments. Proven at fintech scale — OAuth 2.0, JWT, rate limiting, Apigee/Kong gateways, and full CI/CD deployment pipelines.",
      features: [
        "RESTful API Design",
        "Security & Authentication",
        "Performance Optimization",
        "CI/CD Deployment & Monitoring",
      ],
      color: "text-secondary",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two disciplines, one engineer — research-grade ML and production-grade APIs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="p-8 bg-card border-border group h-full flex flex-col">
                  <motion.div
                    className="p-4 bg-muted rounded-lg inline-block mb-6 self-start"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className={service.color} size={36} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ArrowRight className={service.color} size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border mt-auto">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.querySelector("#contact");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Get in touch
                      <ArrowRight size={16} />
                    </button>
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

export default Services;