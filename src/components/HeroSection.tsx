import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Available for Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm{" "}
          <span className="gradient-text">Adisangaran MP</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 fade-up" style={{ animationDelay: '0.3s' }}>
          Machine Learning Enthusiast | ECE Undergraduate
        </p>
        
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 fade-up" style={{ animationDelay: '0.4s' }}>
          Final-year Electronics and Communication Engineering student passionate about 
          building intelligent systems and solving real-world problems with AI/ML.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up" style={{ animationDelay: '0.5s' }}>
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:adisangaran18@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/adhi18" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              View LinkedIn
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <div className="mt-16 fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground mb-4">Expected Graduation</p>
          <p className="text-lg font-semibold">May 2026</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
