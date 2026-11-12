import { Bot, ChartNoAxesCombined, ScanEye } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const highlights = [
  {
    icon: Bot,
    title: "Generative AI & Agentic Systems",
    description: "Building intelligent applications with LLMs, RAG pipelines, autonomous agents, and multi-agent orchestration.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Machine Learning & Data Science",
    description: "Developing predictive models and data-driven solutions through statistical analysis, feature engineering, and machine learning techniques.",
  },
  {
    icon: ScanEye,
    title: "Computer Vision & Deep Learning",
    description: "Applying deep learning to image and video understanding, including object detection, tracking, and visual recognition.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Generative AI &amp; <span className="gradient-text">Agentic Systems</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI Engineer based in Cairo, Egypt, with a strong focus on Generative AI,
                Agentic Systems, and Machine Learning. I enjoy turning complex AI concepts into
                practical solutions that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans developing intelligent agents, working with large language models,
                building machine learning solutions, and applying deep learning to real-world challenges.
                I focus on combining AI capabilities with solid software engineering to create reliable,
                efficient, and scalable applications.
              </p>
            </div>
          </RevealOnScroll>

          {/* Highlight Cards */}
          <RevealOnScroll delay={0.4}>
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl gradient-border hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-primary-sm transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};

export default About;
