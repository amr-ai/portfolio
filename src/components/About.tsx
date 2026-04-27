import { Brain, Cpu, Sparkles } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const highlights = [
  {
    icon: Brain,
    title: "RAG & NLP Systems",
    description: "Building RAG pipelines, Search systems, and conversational AI applications using LangChain and vector databases.",
  },
  {
    icon: Cpu,
    title: "Computer Vision Systems",
    description: "Developing real-time vision solutions using deep learning for detection, recognition, and video-based AI applications.",
  },
  {
    icon: Sparkles,
    title: "Applied Machine Learning",
    description: "Designing machine learning solutions from data preprocessing and modeling to APIs and production-ready applications.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Turning Complex AI Into{" "}
              <span className="gradient-text">Simple Products</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <RevealOnScroll delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Amr, an AI engineer obsessed with building systems that actually work
                in the real world. While many focus on chasing benchmarks, I focus on
                shipping products that solve real problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started with a fascination for how machines can understand
                language. Today, I specialize in building LLM-powered applications—from
                RAG systems that make enterprise knowledge accessible, to intelligent
                agents that automate complex workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe the best AI systems are invisible. Users shouldn't marvel
                at the technology—they should marvel at how effortless their work has become.
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

        {/* Stats */}
        <RevealOnScroll delay={0.6}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-border">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "12+", label: "Projects Shipped" },
              { value: "5M+", label: "API Calls/Month" },
              { value: "99.9%", label: "System Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
