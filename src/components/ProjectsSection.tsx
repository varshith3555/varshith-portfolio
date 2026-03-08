import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import chatAppPreview from "@/assets/chat-app-preview.jpg";
import recipeAppPreview from "@/assets/recipe-app-preview.jpg";

const projects = [
  {
    title: "Real-Time Chat Application",
    description:
      "Architected a real-time messaging platform using WebSockets enabling scalable multi-user chat with minimal latency. Implemented group chats, dynamic file uploads with Cloudinary, and JWT authentication for secure messaging.",
    tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
    features: ["Real-time messaging", "Group chats", "Image sharing", "Secure authentication"],
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
              transition={{ delay: 0.2 + i * 0.2 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-1 mb-4">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                    >
                      <Github size={16} /> View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
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
