import { Brain, Layers, Cloud, Code, Bot } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const skillCategories = [
  {
    icon: Brain,
    title: "Programming Skills",
    skills: [
      "Python",
      "NumPy / Pandas",
      "Scikit-learn",
      "PyTorch / TensorFlow",
      "SQL",
    ],
  },
  {
    icon: Layers,
    title: "ML & DL",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "CNNs (Computer Vision)",
      "RNNs / LSTMs (Time series & NLP)",
      "Transformers (BERT, GPT style models)",
    ],
  },
  {
    icon: Bot,
    title: "Generative AI",
    skills: [
      "LLMs",
      "RAG System",
      "LangChain",
      "LangGraph",
      "Agents",
    ],
  },
  {
    icon: Code,
    title: "Backend & APIs",
    skills: [
      "FastAPI / Flask",
      "Docker",
      "Huggingface",
      "AWS",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Full-stack AI capabilities—from research to production deployment.
            </p>
          </div>
        </RevealOnScroll>

        {/* Skills Grid */}
        <RevealOnScroll delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 rounded-2xl gradient-border hover:bg-primary/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:glow-primary-sm transition-all duration-300">
                  <category.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Additional Tools */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Also proficient with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OpenAI API",
                "Anthropic Claude",
                "Hugging Face",
                "Pinecone",
                "Weaviate",
                "Celery",
                "Airflow",
                "Grafana",
                "Prometheus",
                "GitHub Actions",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Skills;
