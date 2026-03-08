import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  { title: "Programming Languages", icon: Code2, skills: ["Java", "C#"] },
  { title: "Frontend", icon: Layout, skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Backend", icon: Server, skills: ["ASP.NET Core MVC", "ASP.NET Core Web API", "Entity Framework Core", "ADO.NET", "LINQ", "Node.js", "Express.js"] },
  { title: "Databases", icon: Database, skills: ["SQL Server", "MongoDB"] },
  { title: "Tools & Platforms", icon: Wrench, skills: ["Git", "GitHub", "Swagger", "AWS", "Jira"] },
  { title: "Soft Skills", icon: Users, skills: ["Problem Solving", "Communication", "Leadership", "Teamwork"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[160px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mb-12">Technologies and tools I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.05 }}
              className="glass-card p-7 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-150">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold font-display text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 cursor-default hover:scale-[1.08] hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_12px_hsla(217,92%,60%,0.25)]"
                    style={{ transition: "transform 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease" }}
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
