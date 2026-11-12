import { useState } from "react";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const email = "Amrkhalafalla607@gmail.com";
const emailHref = `mailto:${email}`;

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/amr-ai",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/amr-mohamed8545/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: emailHref,
    label: "Email",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}

Reply to ${formData.email}`);
    window.location.href = `${emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have an AI challenge that needs solving? I'm always excited to discuss
              interesting problems and potential collaborations.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <RevealOnScroll delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Whether you have a project in mind, want to discuss AI systems architecture,
                  or just want to say hi—I'd love to hear from you.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Connect
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <address className="grid gap-3 not-italic text-muted-foreground">
                <span>Cairo, Egypt</span>
                <a href={emailHref} className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
                <a href="tel:+201026036443" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Phone className="w-4 h-4" />
                  +20 102 603 6443
                </a>
              </address>
            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                Open Email Draft
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
