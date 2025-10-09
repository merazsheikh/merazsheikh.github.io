import { Download } from "lucide-react";

const CVSection = () => {
  return (
    <section id="cv" className="py-16 bg-muted/20 dark:bg-gray-900 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          📄 Download My <span className="gradient-text">CV</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Get a full overview of my skills, experience, and projects.
        </p>
        <a
          href="/Meraz_Sheikh_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default CVSection;
