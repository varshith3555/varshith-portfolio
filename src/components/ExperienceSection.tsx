import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, Users, Heart, Star, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Vice President",
    org: "Mind Over Matter – Analytical Club, LPU",
    period: "Apr 2025 – Present",
    responsibilities: [
      "Leading analytical initiatives across the university",
      "Organizing workshops and hackathons",
      "Mentoring 50+ students in problem-solving",
      "Coordinating with faculty and club members",
    ],
    icon: Award,
    highlight: "Current Role",
    color: "from-primary to-accent",
  },
  {
    title: "Event Coordinator",
    org: "Mind Over Matter – Analytical Club, LPU",
    period: "Sep 2024 – Mar 2025",
    responsibilities: [
      "Coordinated 10+ academic events",
      "Managed participant communication for 200+ attendees",
      "Handled event logistics and planning",
    ],
    icon: Star,
    highlight: "10+ Events",
    color: "from-[hsl(30,80%,50%)] to-[hsl(15,90%,55%)]",
  },
  {
    title: "NSS Volunteer",
    org: "National Service Scheme",
    period: "Jan 2024 – Present",
    responsibilities: [
      "Participated in community outreach programs",
      "Promoted social awareness initiatives",
    ],
    icon: Heart,
    highlight: "Community Service",
    color: "from-[hsl(340,70%,50%)] to-[hsl(320,60%,55%)]",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Leadership & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mb-12">Roles where I've made an impact.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden sm:block" />

          <div className="grid gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2 }}
                className="sm:pl-14 relative"
              >
                {/* Timeline dot with glow */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
                  className={`hidden sm:flex absolute left-1 top-6 w-[22px] h-[22px] rounded-full bg-gradient-to-br ${exp.color} items-center justify-center shadow-[0_0_15px_hsla(217,92%,60%,0.3)]`}
                >
                  <div className="w-2 h-2 rounded-full bg-background" />
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shrink-0`}>
                      <exp.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold font-display text-lg">{exp.title}</h3>
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.color} text-primary-foreground font-medium`}>
                          {exp.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.org}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-primary mt-1">
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="text-sm text-muted-foreground flex items-start gap-2 group/item">
                            <ChevronRight size={14} className="text-primary mt-0.5 shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
