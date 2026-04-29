import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const projects = [
  {
    title: "MedAI: Advanced Medical Report Analyzer",
    problem: "Lack of automated and smart medical report analysis with interactive health queries.",
    solution: "Sophisticated platform extracting data via OCR/Gemini to provide predictive lab insights & AI doctor chat.",
    stack: ["Python", "Flask", "Gemini Pro", "OpenRouter", "Scikit-Learn"],
    impact: "Automates lab extraction and offers specialized predictions for CBC, Liver, CKD.",
    links: { github: "https://github.com/amr-ai/Medical-Ai" },
    featured: true,
  },
  {
    title: "ARGUS AI - Smart Exam Monitoring",
    problem: "Manual invigilation is error-prone, inconsistent, and inefficient in large-scale exams.",
    solution: "Real-time system using YOLOv8, FaceNet and LangChain to detect cheating/phones and verify identities.",
    stack: ["Python", "YOLOv8", "FaceNet", "LangChain", "Django"],
    impact: "Achieved 94% YOLOv8 accuracy and 30+ FPS real-time speed on GPU.",
    links: { github: "https://github.com/amr-ai/Monitoring-Student-Cheating-detetion" },
    featured: true,
  },
  {
    title: "Character Simulator RAG",
    problem: "Need for engaging digital characters possessing consistent background knowledge.",
    solution: "AI system combining pretrained LLMs and RAG to simulate context-aware digital action characters.",
    stack: ["FastAPI", "LangChain", "FAISS", "Python", "Local Models"],
    impact: "Provides intelligent, multi-persona chat with customized document retrieval.",
    links: { github: "https://github.com/amr-ai/character-simulator-RAG" },
    featured: false,
  },
  {
    title: "Egyptian Currency Classification",
    problem: "Image classification for regional currency recognition needed a robust model.",
    solution: "Built a PyTorch Convolutional Neural Network utilizing the ResNet50 architecture to classify currencies.",
    stack: ["PyTorch", "ResNet50", "Python", "Computer Vision"],
    impact: "Effectively categorizes 9 distinct classes of Egyptian currency.",
    links: { github: "https://github.com/amr-ai/CNN-Classification-Project-using-pytorch" },
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              AI Systems Built for{" "}
              <span className="gradient-text">Production</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real projects with measurable impact. Not demos—deployed systems serving real users.
            </p>
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {/* Featured Projects */}
          <RevealOnScroll delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} featured />
                ))}
            </div>
          </RevealOnScroll>

          {/* Regular Projects */}
          <RevealOnScroll delay={0.4}>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index + 2} />
                ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  return (
    <div
      className={`group relative p-6 sm:p-8 rounded-2xl gradient-border hover:bg-primary/5 transition-all duration-500 ${featured ? "lg:p-10" : ""
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>

      {/* Problem/Solution */}
      <div className="space-y-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Problem</span>
          <p className="text-muted-foreground mt-1">{project.problem}</p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-primary">Solution</span>
          <p className="text-foreground/90 mt-1">{project.solution}</p>
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Impact */}
      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-6">
        <span className="text-xs uppercase tracking-wider text-primary block mb-1">Impact</span>
        <p className="text-sm text-foreground">{project.impact}</p>
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.links.demo && (
          <Button variant="glow" size="sm" asChild>
            <a href={project.links.demo}>
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        )}
        {project.links.github && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.links.github}>
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        )}
        {project.links.case && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.links.case}>Case Study</a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Projects;
