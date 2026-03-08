import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/varshith3555", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/varshithreddy3/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:varshithreddy661@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919347910680", label: "Phone" },
];

const titles = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "Backend Engineer",
];

const techStack = [
  { name: "React", color: "from-[hsl(195,100%,40%)] to-[hsl(195,80%,55%)]" },
  { name: "Node.js", color: "from-[hsl(120,40%,35%)] to-[hsl(120,50%,50%)]" },
  { name: "ASP.NET", color: "from-[hsl(270,60%,50%)] to-[hsl(270,70%,65%)]" },
  { name: "MongoDB", color: "from-[hsl(145,60%,35%)] to-[hsl(145,50%,50%)]" },
  { name: "SQL Server", color: "from-[hsl(0,70%,45%)] to-[hsl(0,60%,60%)]" },
  { name: "TypeScript", color: "from-[hsl(211,60%,45%)] to-[hsl(211,70%,60%)]" },
];

const useTypingEffect = (texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const HeroSection = () => {
  const typedTitle = useTypingEffect(titles);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(217,92%,60%,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_hsla(270,80%,65%,0.08),_transparent_50%)]" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsla(217,92%,60%,0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsla(270,80%,65%,0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, hsla(217,92%,60%,0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsla(217,92%,60%,0.06) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Very subtle grid */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{ left: `${15 + i * 18}%`, top: `${20 + i * 12}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* Floating code elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-primary">const</span> developer = <span className="text-accent">"Varshith"</span>;
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[8%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-accent">{"{ }"}</span> Full Stack Dev
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 12, -8], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[15%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-primary">async</span> <span className="text-accent">build</span>() {"{ }"}
        </div>
      </motion.div>

      <div className="section-container relative z-10 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 glass-card !transform-none px-4 py-2 mb-8 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-4"
        >
          Varshith <span className="gradient-text">Reddy</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-6 font-display h-9"
        >
          <span>{typedTitle}</span>
          <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse align-middle" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed"
        >
          Final-year Computer Science student passionate about building scalable web applications
          and solving complex problems.
        </motion.p>

        {/* Tech stack badges — instant hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06 }}
              className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.color} text-primary-foreground font-medium cursor-default shadow-lg hover:scale-[1.18] hover:-translate-y-1 hover:shadow-[0_0_24px_hsla(217,92%,60%,0.5)]`}
              style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:scale-105 active:scale-[0.98]"
            style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
          >
            View Projects
          </a>
          <a
            href="/Varshith_Reddy_FullStack_Developer_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-secondary hover:border-primary/30 hover:scale-105 active:scale-[0.98]"
            style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease" }}
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-secondary hover:border-primary/30 hover:scale-105 active:scale-[0.98]"
            style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease" }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.08 }}
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_25px_hsla(217,92%,60%,0.25)] hover:-translate-y-1 hover:scale-110"
              style={{ transition: "all 0.15s ease" }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
