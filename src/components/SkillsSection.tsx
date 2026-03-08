import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Layout, Server, Database, Wrench, Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "C#"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["ASP.NET Core MVC", "ASP.NET Core Web API", "Entity Framework Core", "ADO.NET", "LINQ", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Swagger", "AWS", "Jira"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Leadership", "Teamwork"],
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
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold font-display text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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
