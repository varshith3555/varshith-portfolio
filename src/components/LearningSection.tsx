import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Cpu, Cloud, Code2 } from "lucide-react";

const learningItems = [
  { icon: Cpu, text: "Building scalable ASP.NET Core APIs", color: "text-primary" },
  { icon: Cloud, text: "Learning AWS cloud deployment and infrastructure", color: "text-accent" },
  { icon: Code2, text: "Practicing Data Structures and Algorithms", color: "text-primary" },
];

const LearningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>
      <div className="section-container !py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
            <BookOpen size={22} className="text-primary" />
            Currently <span className="gradient-text">Learning</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {learningItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass-card p-5 group cursor-default"
              style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 0 30px hsla(217,92%,60%,0.2)";
                e.currentTarget.style.borderColor = "hsla(217,92%,60%,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "";
              }}
            >
              <item.icon size={20} className={`${item.color} mb-3 group-hover:scale-110 transition-transform duration-150`} />
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-150 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
