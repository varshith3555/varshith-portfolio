import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, ExternalLink, GitCommit, Star, Code } from "lucide-react";

interface GitHubData {
  publicRepos: number;
  followers: number;
  totalCommits: string;
}

const GitHubSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [ghData, setGhData] = useState<GitHubData>({ publicRepos: 0, followers: 0, totalCommits: "200+" });

  useEffect(() => {
    fetch("https://api.github.com/users/varshith3555")
      .then((r) => r.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setGhData({
            publicRepos: data.public_repos,
            followers: data.followers,
            totalCommits: "200+",
          });
        }
      })
      .catch(() => {});
  }, []);

  const stats = [
    { icon: GitCommit, label: "Total Commits", value: ghData.totalCommits },
    { icon: Star, label: "Public Repos", value: String(ghData.publicRepos || "10+") },
  ];

  return (
    <section id="github" ref={ref} className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
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

        {/* Row 1: Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 text-center cursor-default"
            >
              <stat.icon size={28} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold font-display gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid gap-6"
        >
          {/* Row 2: Contribution graph */}
          <div className="glass-card p-6 overflow-hidden cursor-default">
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

          {/* Row 3: Stats + Languages */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card p-5 overflow-hidden cursor-default">
              <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Star size={14} className="text-primary" /> GitHub Stats
              </h4>
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=varshith3555&theme=tokyonight"
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="glass-card p-5 overflow-hidden cursor-default">
              <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Code size={14} className="text-primary" /> Top Languages
              </h4>
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=varshith3555&theme=tokyonight"
                alt="Top Languages"
                className="w-full rounded-lg"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm hover:bg-secondary hover:border-primary/30 hover:scale-105 active:scale-[0.98]"
              style={{ transition: "all 0.15s ease" }}
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
