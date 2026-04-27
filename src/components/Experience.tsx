import { Briefcase, GraduationCap } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const experiences = [
  {
    type: "work",
    title: "ML Engineer Intern",
    company: "AI Startup (YC-backed)",
    period: "Summer 2024",
    description: [
      "Architected a RAG system serving 10K+ queries daily with sub-second latency",
      "Implemented semantic caching reducing API costs by 40%",
      "Designed evaluation pipelines for LLM output quality monitoring",
    ],
  },
  {
    type: "work",
    title: "Research Assistant",
    company: "University NLP Lab",
    period: "2023 – 2024",
    description: [
      "Published paper on efficient fine-tuning methods for domain-specific LLMs",
      "Developed annotation tools used by 50+ researchers",
      "Contributed to open-source NLP toolkit with 2K+ GitHub stars",
    ],
  },
  {
    type: "work",
    title: "AI Developer (Contract)",
    company: "Fortune 500 Consulting",
    period: "2023",
    description: [
      "Built document intelligence pipeline processing 100K+ pages monthly",
      "Delivered POC that secured $2M production contract",
      "Collaborated with enterprise architects on system integration",
    ],
  },
];

const education = [
  {
    type: "education",
    title: "M.S. Computer Science",
    company: "Stanford University",
    period: "2023 – 2025 (Expected)",
    description: [
      "Focus: Machine Learning & NLP",
      "Research: Large Language Models, Efficient Fine-tuning",
      "Teaching Assistant: CS229 Machine Learning",
    ],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "UC Berkeley",
    period: "2019 – 2023",
    description: [
      "Graduated with Highest Honors",
      "Minor in Data Science",
      "Published undergraduate thesis on neural text generation",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Where I've <span className="gradient-text">Built</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Work Experience */}
          <RevealOnScroll delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <TimelineItem key={index} item={exp} />
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll delay={0.4}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <TimelineItem key={index} item={edu} />
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  item: {
    title: string;
    company: string;
    period: string;
    description: string[];
  };
}

const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 group">
      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />

      <div className="p-5 rounded-xl gradient-border hover:bg-primary/5 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h4 className="font-semibold text-foreground">{item.title}</h4>
          <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-primary mb-3">{item.company}</p>
        <ul className="space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
