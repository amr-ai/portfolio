import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const projects = [
  {
    title: "Enterprise RAG Platform",
    problem: "Large organizations struggled to find relevant information across thousands of documents.",
    solution: "Built a production RAG system with hybrid search, semantic chunking, and intelligent query routing.",
    stack: ["LangChain", "OpenAI", "Pinecone", "FastAPI", "AWS"],
    impact: "Reduced document search time by 85%, serving 10K+ queries daily.",
    links: { demo: "#", github: "#", case: "#" },
    featured: true,
  },
  {
    title: "Multi-Modal AI Agent",
    problem: "Customer support teams spent hours manually processing mixed-format requests.",
    solution: "Created an agentic system that understands text, images, and documents to automate ticket resolution.",
    stack: ["GPT-4V", "LangGraph", "PostgreSQL", "Redis", "Docker"],
    impact: "Automated 40% of tier-1 support tickets with 94% accuracy.",
    links: { demo: "#", github: "#" },
    featured: true,
  },
  {
    title: "Real-Time ML Pipeline",
    problem: "ML models degraded over time due to data drift, causing prediction accuracy to drop.",
    solution: "Designed an end-to-end MLOps pipeline with automated monitoring, retraining, and deployment.",
    stack: ["PyTorch", "MLflow", "Kubernetes", "Grafana", "Airflow"],
    impact: "Maintained 99.5% model accuracy with zero-downtime deployments.",
    links: { github: "#", case: "#" },
    featured: false,
  },
  {
    title: "Code Review AI Assistant",
    problem: "Engineering teams spent excessive time on routine code reviews.",
    solution: "Fine-tuned an LLM to provide contextual code reviews based on team conventions.",
    stack: ["CodeLlama", "PEFT", "HuggingFace", "GitHub API", "GCP"],
    impact: "Reduced code review time by 50% across 200+ weekly PRs.",
    links: { demo: "#", github: "#" },
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
