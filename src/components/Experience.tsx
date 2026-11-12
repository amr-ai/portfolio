import { Briefcase, GraduationCap } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const experiences = [
  {
    title: "AI Engineering Trainee",
    company: "Sprints",
    period: "Oct 2026 – Nov 2026",
    description: [
      "Completed project-based training in Generative AI and Agentic AI.",
      "Built a task recommendation agent that uses learner assessments, skill requirements, and task dependencies to explain its recommendations.",
      "Built a real-time AI meeting assistant with voice processing, conversational AI, and agent orchestration.",
    ],
  },
  {
    title: "AI & Data Science Trainee",
    company: "Digilians Initiative",
    period: "Dec 2025 – Aug 2026",
    description: [
      "Completed project-based training in Machine Learning, Deep Learning, Generative AI, and Data Science.",
      "Built predictive models, RAG applications, and multi-agent systems.",
      "Collaborated with cross-functional teams to design, implement, and evaluate AI solutions.",
    ],
  },
  {
    title: "Artificial Intelligence Trainee",
    company: "National Telecommunication Institute (NTI)",
    period: "Jun 2022 – Aug 2022",
    description: [
      "Completed 90 hours of technical AI training covering machine learning and neural networks.",
      "Completed 30 hours of professional skills training.",
    ],
  },
];

const education = {
  title: "Bachelor of Science in Artificial Intelligence",
  company: "Menoufia University",
  period: "Jul 2025",
  description: ["Faculty of Artificial Intelligence"],
};

const certifications = [
  { title: "AWS Certified Machine Learning Engineer – Associate", date: "Sep 2026" },
  { title: "Huawei HCIA-AI", date: "Sep 2026" },
  { title: "IBM AI Engineering Professional Certificate", date: "Apr 2026" },
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
              Experience &amp; <span className="gradient-text">Education</span>
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
                <h3 className="text-xl font-semibold">Professional Experience</h3>
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
                  <TimelineItem item={education} />
                </div>
              </div>
              <h3 className="mt-10 mb-4 text-xl font-semibold">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map(({ title, date }) => (
                  <li key={title} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl gradient-border p-4">
                    <span className="font-medium">{title}</span>
                    <span className="text-sm text-muted-foreground">{date}</span>
                  </li>
                ))}
              </ul>
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
