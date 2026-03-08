import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, Users } from "lucide-react";

const experiences = [
  {
    title: "Vice President",
    org: "Mind Over Matter – Analytical Club, LPU",
    period: "Apr 2025 – Present",
    responsibilities: [
      "Leading analytical initiatives",
      "Organizing workshops",
      "Mentoring students",
      "Coordinating with faculty and club members",
    ],
    icon: Award,
  },
  {
    title: "Event Coordinator",
    org: "Mind Over Matter – Analytical Club, LPU",
    period: "Sep 2024 – Mar 2025",
    responsibilities: [
      "Coordinated academic events",
      "Managed participant communication",
      "Handled event logistics",
    ],
    icon: Users,
  },
  {
    title: "NSS Volunteer",
    org: "National Service Scheme",
    period: "Jan 2024 – Present",
    responsibilities: [
      "Participated in community outreach programs",
      "Promoted social awareness initiatives",
    ],
    icon: Users,
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
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="grid gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="sm:pl-12 relative"
              >
                {/* Dot */}
                <div className="hidden sm:block absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <exp.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-display">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.org}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-primary mt-1">
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <ul className="mt-3 space-y-1.5">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
