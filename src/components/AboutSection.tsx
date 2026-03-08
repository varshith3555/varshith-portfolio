import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Code2, Layers, Clock, Rocket } from "lucide-react";

const stats = [
  { icon: Rocket, label: "Projects Built", value: "5+", color: "from-primary to-accent" },
  { icon: Layers, label: "Technologies", value: "15+", color: "from-[hsl(145,60%,40%)] to-[hsl(170,50%,50%)]" },
  { icon: Clock, label: "Years Coding", value: "3+", color: "from-[hsl(30,80%,50%)] to-[hsl(15,90%,55%)]" },
  { icon: Code2, label: "Lines of Code", value: "50K+", color: "from-[hsl(280,70%,55%)] to-[hsl(310,60%,60%)]" },
];

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
          <p className="text-muted-foreground mb-12 max-w-3xl leading-relaxed text-lg">
            I'm a final-year Computer Science Engineering student at Lovely Professional University,
            skilled in full-stack development with hands-on experience in React, Node.js, ASP.NET Core,
            and modern databases. I'm passionate about building scalable applications and solving
            real-world problems through clean, efficient code.
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass-card p-6 text-center group cursor-default"
              style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 0 40px hsla(217,92%,60%,0.2)";
                e.currentTarget.style.borderColor = "hsla(217,92%,60%,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "";
              }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-150`}>
                <stat.icon size={22} className="text-primary-foreground" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-display gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                transition={{ delay: 0.25 + i * 0.1 }}
                className="glass-card p-5 group cursor-default"
                style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.boxShadow = "0 0 30px hsla(217,92%,60%,0.15)";
                  e.currentTarget.style.borderColor = "hsla(217,92%,60%,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-150">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-muted-foreground">{edu.degree} — <span className="text-primary font-medium">{edu.grade}</span></p>
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
