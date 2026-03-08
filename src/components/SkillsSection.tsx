import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 85 },
      { name: "C#", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "ASP.NET Core MVC", level: 80 },
      { name: "ASP.NET Core Web API", level: 82 },
      { name: "Entity Framework Core", level: 78 },
      { name: "ADO.NET", level: 75 },
      { name: "LINQ", level: 76 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 80 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Swagger", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Jira", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Leadership", level: 85 },
      { name: "Teamwork", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mb-12">Technologies and tools I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                >
                  <cat.icon size={20} />
                </motion.div>
                <h3 className="font-semibold font-display text-sm">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
