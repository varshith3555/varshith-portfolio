import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";
import chatAppPreview from "@/assets/chat-app-preview.jpg";
import recipeAppPreview from "@/assets/recipe-app-preview.jpg";

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
  {
    title: "Recipe Platform",
    description:
      "Built a scalable recipe management platform where users can browse, add, and save recipes dynamically. Optimized rendering using React Hooks and implemented lazy loading for improved performance.",
    tech: ["HTML", "CSS", "React.js"],
    features: ["Recipe browsing", "Search and filtering", "Responsive UI", "Lazy loading optimization"],
    metrics: ["60% faster rendering", "Optimized performance", "Responsive design"],
    timeline: "Nov 2024 – Dec 2024",
    image: recipeAppPreview,
    github: "https://github.com/varshith3555",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref}>
      <div className="section-container">
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
              className="glass-card overflow-hidden group"
              style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 0 60px hsla(217,92%,60%,0.25)";
                e.currentTarget.style.borderColor = "hsla(217,92%,60%,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "";
              }}
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 md:bg-gradient-to-r md:from-background md:via-background/50 md:to-background/10" />
                  
                  {/* Metrics overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span key={m} className="text-[10px] px-2.5 py-1 rounded-full bg-background/80 text-primary backdrop-blur-md border border-primary/30 flex items-center gap-1 font-medium shadow-lg">
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
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-1.5 mb-4">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300"
                    >
                      <Github size={16} /> View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
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
