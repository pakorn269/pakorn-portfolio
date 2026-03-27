import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Code2, Server, Zap } from "lucide-react";

/**
 * Pakorn's Professional Portfolio
 * Design: Modern Minimalist with Technical Precision
 * - Deep charcoal background (#1a1a1a) with cyan accents (#00d9ff)
 * - IBM Plex Mono for headings (technical, precise)
 * - Inter for body text (readable, professional)
 * - Asymmetric layouts, generous whitespace, smooth animations
 */

export default function Home() {
  const skills = {
    infrastructure: [
      "Active Directory",
      "SCCM",
      "Windows Server",
      "Zabbix",
      "Power BI",
    ],
    development: [
      "ASP.NET Core",
      "Blazor",
      "C#",
      "React",
      "TypeScript",
      "PostgreSQL",
      "SQLite",
      "SignalR",
      "PowerShell",
    ],
    ai: ["Cursor", "GitHub Copilot", "Claude"],
  };

  const projects = [
    {
      title: "HardwareInfoWeb",
      subtitle: "Enterprise Hardware Inventory System",
      description:
        "A distributed hardware inventory platform for Windows domain environments. Collects local hardware data via WMI and visualizes inventory with real-time agent health monitoring via SignalR.",
      tech: [
        "ASP.NET Core 8",
        "Blazor Server",
        "SignalR",
        "SQLite",
        "WMI",
        "MudBlazor",
      ],
      icon: Server,
    },
    {
      title: "ADManager & AD Access Control Portal",
      subtitle: "Active Directory Management Suite",
      description:
        "Internal web tools for managing PEA's AD infrastructure across 30,000+ users. Covers user management, account unlocking, password resets, and department-based access delegation.",
      tech: ["ASP.NET", "C#", "Active Directory", "LDAP"],
      icon: Code2,
    },
    {
      title: "Ping / ITSM Monitoring Dashboard",
      subtitle: "Network Monitoring & Incident Response",
      description:
        "Real-time dashboard for endpoint and server connectivity monitoring across PEA's distributed infrastructure with integrated ITSM workflows.",
      tech: ["Network Monitoring", "ITSM Integration"],
      icon: Zap,
    },
    {
      title: "Security Guard HRM SaaS",
      subtitle: "HR Management Platform",
      description:
        "Full-featured HR management SaaS for security guard workforce operations including attendance, shift scheduling, and access control.",
      tech: ["React", "TypeScript", "PostgreSQL"],
      icon: Code2,
    },
    {
      title: "Barber Shop Management System",
      subtitle: "Business Operations Platform",
      description:
        "End-to-end business management system for barber shops featuring appointment booking, queue management, and customer records.",
      tech: ["React", "TypeScript", "PostgreSQL", "Python"],
      link: "https://shopthai.work",
      icon: Code2,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="font-mono font-bold text-xl text-accent">Pakorn</div>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm font-mono hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-mono hover:text-accent transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-mono hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-mono hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663026824247/nDtDDxn82YfGkG4QXiD6UX/hero-bg-CoXvbVrBPgUkSJunwdEUVC.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-secondary border border-border rounded mb-6 font-mono text-sm text-accent">
              IT System Administrator & Software Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Pakorn</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Managing enterprise IT infrastructure for 30,000+ users at the
              Provincial Electricity Authority (PEA) — and building internal
              tools to make that infrastructure easier to run. My stack spans{" "}
              <span className="text-accent font-mono">ASP.NET Core / Blazor</span>{" "}
              for enterprise tooling and{" "}
              <span className="text-accent font-mono">React / TypeScript</span>{" "}
              for web products, with AI-assisted workflows throughout.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-accent hover:text-accent"
              >
                <a
                  href="https://github.com/pakorn269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12">
              About Me
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Based in Bangkok, Thailand 🇹🇭, I work as an IT System
                Administrator at the Provincial Electricity Authority (PEA),
                where I manage infrastructure serving over 30,000 users. My role
                spans network administration, system deployment, and helpdesk
                support.
              </p>
              <p>
                Beyond infrastructure management, I'm passionate about building
                software that solves real problems. I've developed multiple
                internal tools and SaaS products using modern web technologies,
                always focusing on user experience and system reliability.
              </p>
              <p>
                I leverage AI-assisted development workflows to accelerate
                delivery without sacrificing code quality. My approach combines
                traditional software engineering principles with contemporary
                development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 md:py-28 border-b border-border"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663026824247/nDtDDxn82YfGkG4QXiD6UX/skills-bg-WmNAcmubPtkPvjiSVdhJLs.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-16">
            What I Work With
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Infrastructure */}
            <div>
              <h3 className="text-xl font-mono font-bold mb-6 text-accent">
                Infrastructure & Systems
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.infrastructure.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div>
              <h3 className="text-xl font-mono font-bold mb-6 text-accent">
                Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.development.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div>
              <h3 className="text-xl font-mono font-bold mb-6 text-accent">
                AI-Assisted Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.ai.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28 border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-16">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  className="project-card group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-mono font-bold">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary border border-border rounded font-mono text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent font-mono text-sm"
                    >
                      Visit Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12">
            GitHub Activity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://github-readme-stats.vercel.app/api?username=pakorn269&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1a1a&title_color=00d9ff&text_color=f5f5f5"
              alt="Pakorn's GitHub Stats"
              className="w-full"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=pakorn269&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1a1a&title_color=00d9ff&text_color=f5f5f5"
              alt="Top Languages"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2"
                size="lg"
              >
                <Mail className="w-4 h-4" />
                <a href="mailto:pakorn269@gmail.com">Email Me</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-accent hover:text-accent flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/in/pakorn269"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-accent hover:text-accent flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <a
                  href="https://github.com/pakorn269"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © 2026 Pakorn. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Managing enterprise IT by day, shipping software by night — with a
              little help from AI 🤖
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
