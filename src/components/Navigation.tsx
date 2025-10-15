import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "CV", href: "#cv" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold gradient-text"
            >
              MJS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-muted-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    link.name === "CV" ? "flex items-center gap-1" : ""
                  }`}
                >
                  {link.name === "CV" && <FileText size={16} />}
                  {link.name}
                </a>
              ))}

              <Button
                variant="default"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Rendered via Portal */}
      {isMobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur animate-fade-in"
            style={{ WebkitBackdropFilter: "blur(16px)" }}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col gap-6 p-6 pt-20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2 flex items-center gap-2 text-lg"
                >
                  {link.name === "CV" && <FileText size={18} />}
                  {link.name}
                </a>
              ))}
              <Button
                variant="default"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full mt-4"
              >
                Get In Touch
              </Button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navigation;
