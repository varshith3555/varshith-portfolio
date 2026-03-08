import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Database, Wrench, Users } from "lucide-react";

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
    <section id="skills" ref={ref} className="relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.05 }}
              className="glass-card p-6 group cursor-default"
              style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 0 40px hsla(217,92%,60%,0.2)";
                e.currentTarget.style.borderColor = "hsla(217,92%,60%,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "";
              }}
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
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 cursor-default"
                    style={{ transition: "transform 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
                      e.currentTarget.style.borderColor = "hsla(217,92%,60%,0.4)";
                      e.currentTarget.style.color = "hsl(217,92%,60%)";
                      e.currentTarget.style.boxShadow = "0 0 12px hsla(217,92%,60%,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) translateY(0)";
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.boxShadow = "none";
                    }}
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
