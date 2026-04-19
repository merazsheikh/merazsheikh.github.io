import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-muted/20 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Meraz Jalaluddin Sheikh
            </h3>
            <p className="text-muted-foreground text-sm">
              Data Scientist &amp; ML Engineer · Based in London
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => window.open("https://github.com/merazsheikh", "_blank", "noopener,noreferrer")}
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </button>
            <button
              type="button"
              onClick={() => window.open("https://linkedin.com/in/merazsheikh-dataanalyst", "_blank", "noopener,noreferrer")}
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </button>
            <button
              type="button"
              onClick={() => window.open("mailto:merazsheikh27@gmail.com", "_self")}
              className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Meraz Jalaluddin Sheikh · Built with
            <Heart size={16} className="text-primary fill-primary" />
            using React &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;