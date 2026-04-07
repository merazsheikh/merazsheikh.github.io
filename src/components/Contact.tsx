import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageStatus, setMessageStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageStatus("sending");

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessageStatus("success");
          setErrorMessage("");
          form.current?.reset();
          setTimeout(() => setMessageStatus("idle"), 5000);
        },
        (error) => {
          setMessageStatus("error");
          setErrorMessage("Failed to send message. Please try again or contact directly.");
          console.error(error);
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Hounslow, London",
      color: "text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "merazsheikh27@gmail.com",
      href: "mailto:merazsheikh27@gmail.com",
      color: "text-secondary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "07776782429",
      href: "tel:07776782429",
      color: "text-accent",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/merazsheikh-dataanalyst",
      username: "merazsheikh-dataanalyst",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/merazsheikh",
      username: "merazsheikh",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a data scientist or API developer? Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-card border-border text-center">
                    <div className="p-4 bg-muted rounded-full inline-block mb-4">
                      <info.icon className={info.color} size={24} />
                    </div>
                    <h3 className="font-bold mb-2">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    )}
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact form */}
          <AnimatedSection delay={0.4}>
            <Card className="p-8 md:p-12 bg-card border-border text-center">
              <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
              
              {messageStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/40 rounded-lg">
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {messageStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/40 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    ✗ {errorMessage}
                  </p>
                </div>
              )}
              <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="John Doe"
                    required
                    className="w-full p-3 border rounded bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full p-3 border rounded bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full p-3 border rounded bg-background text-foreground placeholder:text-muted-foreground"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={messageStatus === "sending"}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail className="mr-2" size={20} />
                  {messageStatus === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Social links */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <link.icon size={20} />
                      <span>{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
