import { Briefcase, GraduationCap } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const experiences = [
  {
    type: "work",
    title: "AI & Data Science Trainee",
    company: "Digilians Initiative",
    period: "Dec 2025 – Aug 2026",
    description: [
      "Engineered end-to-end Machine Learning, Deep Learning, and NLP workflows spanning from data ingestion to model deployment.",
      "Architected production-ready RAG systems and NLP pipelines using LangChain and FAISS.",
      "Implemented diverse predictive modeling solutions using Scikit-Learn, TensorFlow, and PyTorch.",
    ],
  },
  {
    type: "work",
    title: "Public Relations Coordinator",
    company: "Event Management",
    period: "Previous Experience",
    description: [
      "Directed comprehensive event logistics and effectively managed stakeholder communications.",
      "Formulated strategic planning and execution initiatives.",
    ],
  },
];

const education = [
  {
    type: "education",
    title: "B.S. Artificial Intelligence",
    company: "Menoufia University",
    period: "Graduating 2025",
    description: [
      "Faculty of Artificial Intelligence",
      "Overall Grade: Good",
      "Focused on advanced AI concepts, machine learning, and deep learning architectures.",
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
