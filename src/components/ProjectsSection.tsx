import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";
import chatAppPreview from "@/assets/chat-app-preview.jpg";

const projects = [
  {
    title: "Real-Time Chat Application",
    description:
      "Architected a real-time messaging platform using WebSockets enabling scalable multi-user chat with minimal latency. Implemented group chats, dynamic file uploads with Cloudinary, and JWT authentication for secure messaging.",
    tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
    features: ["Real-time messaging", "Group chats", "Image sharing", "Secure authentication"],
    metrics: ["< 50ms latency", "Multi-user scalable", "Secure JWT auth"],
    timeline: "Apr 2025 – May 2025",
    image: chatAppPreview,
    github: "https://github.com/varshith3555",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative">
      {/* Background depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-12">Projects I've built to solve real problems.</p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
              className="glass-card overflow-hidden group cursor-default max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110"
                      style={{ transition: "transform 0.5s ease" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20 md:bg-gradient-to-r md:from-background md:via-background/60 md:to-background/20" />

                  {/* Metrics overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span key={m} className="text-[10px] px-2.5 py-1 rounded-full bg-background/90 text-primary backdrop-blur-md border border-primary/30 flex items-center gap-1 font-medium shadow-lg">
                        <Zap size={8} /> {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary" style={{ transition: "color 0.15s ease" }}>{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <ul className="grid grid-cols-2 gap-1.5 mb-4">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/30 hover:text-primary cursor-default" style={{ transition: "all 0.15s ease" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-border hover:bg-secondary hover:border-primary/30 hover:scale-105 active:scale-[0.98]"
                      style={{ transition: "all 0.15s ease" }}
                    >
                      <Github size={16} /> View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:scale-105 active:scale-[0.98]"
                      style={{ transition: "all 0.15s ease" }}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
