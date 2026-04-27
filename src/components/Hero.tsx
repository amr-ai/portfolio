import { ArrowRight, Calendar, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import cvFile from "@/assets/Amr_Khalafalla.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 opacity-0 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Available July 2025 (Post-Graduation)
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 opacity-0 animate-slide-up stagger-1">
              I'm{" "}
              <span className="gradient-text">Amr Khalafalla</span>
              <br />
              AI Engineer
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-slide-up stagger-2">
              Specializing in Generative AI and RAG-based systems, building scalable ML & DL solutions that bridge research and practical deployment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0 animate-slide-up stagger-3">
              <Button variant="hero" size="lg" asChild>
                <a href={cvFile} target="_blank" rel="noopener noreferrer">
                  My Resume
                  <FileDown className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-effect">
                <img
                  src={profilePhoto}
                  alt="AI Engineer Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-lg bg-card border border-border text-xs font-mono text-primary"
              >
                GPT-4 • Claude • Gemini
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg bg-card border border-border text-xs font-mono text-muted-foreground"
              >
                PyTorch • LangChain • RAG
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


