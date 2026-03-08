import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const GitHubSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">GitHub</span> Activity
          </h2>
          <p className="text-muted-foreground mb-12">My open source contributions and coding activity.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid gap-6"
        >
          {/* Contribution graph */}
          <div className="glass-card p-6 overflow-hidden">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Github size={16} className="text-primary" /> Contribution Graph
            </h3>
            <img
              src="https://ghchart.rshah.org/4f8cf5/varshith3555"
              alt="GitHub Contribution Graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Stats cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card p-2 overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api?username=varshith3555&show_icons=true&theme=transparent&hide_border=true&title_color=6B8AFF&text_color=9CA3AF&icon_color=A78BFA"
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="glass-card p-2 overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=varshith3555&layout=compact&theme=transparent&hide_border=true&title_color=6B8AFF&text_color=9CA3AF"
                alt="Top Languages"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Profile link */}
          <div className="text-center">
            <a
              href="https://github.com/varshith3555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm hover:bg-secondary transition-colors"
            >
              <Github size={18} /> View Full GitHub Profile <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
