import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

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
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = `/Meraz_Sheikh_CV.pdf?v=${new Date().getTime()}`;
    link.download = "Meraz_Sheikh_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <button
              type="button"
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-bold gradient-text"
            >
              MJS
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              ))}

              <ThemeToggle />

              <Button
                variant="outline"
                onClick={handleResumeDownload}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
              >
                <FileText size={16} />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
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
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
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
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-lg text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={handleResumeDownload}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex justify-center items-center gap-2 mt-2"
              >
                <FileText size={16} />
                Download Resume
              </Button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navigation;