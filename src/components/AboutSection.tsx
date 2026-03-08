import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    grade: "CGPA: 7.47",
    period: "2022 – 2026",
    location: "Jalandhar, Punjab",
  },
  {
    school: "Prathibha Junior College",
    degree: "Intermediate",
    grade: "83%",
    period: "2020 – 2022",
    location: "Mahbubnagar, Telangana",
  },
  {
    school: "Narayana Olympiad School",
    degree: "Matriculation",
    grade: "95.5%",
    period: "2019 – 2020",
    location: "Hyderabad, Telangana",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            I'm a final-year Computer Science Engineering student at Lovely Professional University,
            skilled in full-stack development with hands-on experience in React, Node.js, ASP.NET Core,
            and modern databases. I'm passionate about building scalable applications and solving
            real-world problems through clean, efficient code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-primary" /> Education
          </h3>
          <div className="grid gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="glass-card p-5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-muted-foreground">{edu.degree} — {edu.grade}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} />{edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
