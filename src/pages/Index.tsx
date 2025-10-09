import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CVSection from "@/components/CVSection";  // ✅ Add this line
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CVSection /> {/* ✅ Add section here */}
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
