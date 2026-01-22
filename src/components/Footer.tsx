import { Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="gradient-text">Adisangaran MP</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Transforming data into intelligent solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:adisangaran18@gmail.com"
              className="p-3 rounded-xl bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/adhi18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
