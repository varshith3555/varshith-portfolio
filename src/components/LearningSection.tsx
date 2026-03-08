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
      <div className="section-container !py-12">
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
              transition={{ delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsla(217,92%,60%,0.15)] group"
            >
              <item.icon size={20} className={`${item.color} mb-3 group-hover:scale-110 transition-transform duration-200`} />
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
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
