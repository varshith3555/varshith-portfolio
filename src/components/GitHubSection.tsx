import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, ExternalLink, GitCommit, Star, GitFork } from "lucide-react";

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
    { icon: GitFork, label: "Followers", value: String(ghData.followers || "5+") },
  ];

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

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(217,92%,60%,0.15)]"
            >
              <stat.icon size={20} className="text-primary mx-auto mb-2" />
              <div className="text-xl font-bold font-display gradient-text">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid gap-6"
        >
          {/* Contribution graph */}
          <div className="glass-card p-6 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(217,92%,60%,0.15)]">
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

          {/* Profile Summary Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -3 }} className="glass-card p-4 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(217,92%,60%,0.15)]">
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=varshith3555&theme=tokyonight"
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="glass-card p-4 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(217,92%,60%,0.15)]">
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=varshith3555&theme=tokyonight"
                alt="Top Languages"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Profile link */}
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/varshith3555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm hover:bg-secondary hover:border-primary/30 transition-all duration-300"
            >
              <Github size={18} /> View Full GitHub Profile <ExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
