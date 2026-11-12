import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const projects = [
  {
    title: "Virtual Internship — Agentic AI System",
    context: "Sprints Project · Oct 2026 – Nov 2026",
    description: "An AI agent matches learners with project tasks based on skill assessments, requirements, and dependencies. LangGraph handles explainable scoring and automated review. A real-time meeting assistant supports voice activation and conversational turn-taking.",
    stack: ["Python", "LangGraph", "FastAPI", "Gemini Live", "LiveKit", "Recall.ai", "SQLite"],
    github: "https://github.com/amr-ai/Meeting-Agent.git",
  },
  {
    title: "DAAS — Data Analysis Automation System",
    context: "Digilians Graduation Project · Aug 2026",
    description: "A multi-agent platform ingests CSV and Excel files, Google Sheets, and external databases. It supports schema discovery, data cleaning, and human validation, then uses specialized agents for KPIs, visualization, sales forecasting, segmentation, and churn prediction. A LangGraph copilot routes questions to those agents.",
    stack: ["Python", "LangGraph", "FastAPI", "Next.js", "PostgreSQL", "Pandas", "Scikit-learn", "Prophet", "Plotly"],
    github: "https://github.com/amr-ai/Graduation-Project",
  },
  {
    title: "ARGUS AI — AI-Powered Exam Monitoring System",
    context: "University Graduation Project · Jun 2025",
    description: "A real-time exam monitoring system uses YOLOv8 and ByteTrack to track students and detect suspicious behaviors and unauthorized phones. FaceNet and MTCNN support identity verification and attendance, while a RAG assistant answers questions about attendance and flagged incidents.",
    stack: ["Python", "YOLOv8", "ByteTrack", "FaceNet", "MTCNN", "OpenCV", "LangChain", "FAISS"],
    github: "https://github.com/amr-ai/Monitoring-Student-Cheating-detetion",
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
              Selected <span className="gradient-text">Projects</span>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.title} className="flex flex-col p-6 sm:p-8 rounded-2xl gradient-border hover:bg-primary/5 transition-colors">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-4">{project.context}</p>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
