import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  { icon: Github, href: "https://github.com/varshith3555", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/varshithreddy3/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:varshithreddy661@gmail.com", label: "Email" },
];

const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "React Developer",
  "Backend Developer",
];

const techStack = [
  { name: "React", color: "from-[hsl(195,100%,40%)] to-[hsl(195,80%,55%)]", glow: "hsla(195,100%,50%,0.5)" },
  { name: "Node.js", color: "from-[hsl(120,40%,35%)] to-[hsl(120,50%,50%)]", glow: "hsla(120,50%,45%,0.5)" },
  { name: "ASP.NET", color: "from-[hsl(270,60%,50%)] to-[hsl(270,70%,65%)]", glow: "hsla(270,70%,60%,0.5)" },
  { name: "MongoDB", color: "from-[hsl(145,60%,35%)] to-[hsl(145,50%,50%)]", glow: "hsla(145,60%,45%,0.5)" },
  { name: "SQL Server", color: "from-[hsl(0,70%,45%)] to-[hsl(0,60%,60%)]", glow: "hsla(0,70%,55%,0.5)" },
  { name: "TypeScript", color: "from-[hsl(211,60%,45%)] to-[hsl(211,70%,60%)]", glow: "hsla(211,70%,55%,0.5)" },
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
              "radial-gradient(circle at 20% 50%, hsla(217,92%,60%,0.07) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsla(270,80%,65%,0.07) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, hsla(217,92%,60%,0.07) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsla(217,92%,60%,0.07) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        {/* Secondary slow-moving glow */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 70% 30%, hsla(270,80%,65%,0.04) 0%, transparent 40%)",
              "radial-gradient(circle at 30% 70%, hsla(217,92%,60%,0.04) 0%, transparent 40%)",
              "radial-gradient(circle at 70% 30%, hsla(270,80%,65%,0.04) 0%, transparent 40%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Very subtle grid */}
      <div className="absolute inset-0 opacity-[0.005]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Radial glow behind hero name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[400px] bg-[radial-gradient(ellipse,_hsla(217,92%,60%,0.08)_0%,_hsla(270,80%,65%,0.04)_40%,_transparent_70%)] pointer-events-none" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 3 === 0 ? 'w-1.5 h-1.5 bg-primary/15' : 'w-1 h-1 bg-accent/20'}`}
          style={{ left: `${10 + i * 11}%`, top: `${15 + (i * 17) % 60}%` }}
          animate={{ y: [-25, 25, -25], x: [-8, 8, -8], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Floating code elements */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-primary">const</span> developer = <span className="text-accent">"Varshith"</span>;
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [12, -12, 12], rotate: [1, -1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[8%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-accent">{"{ }"}</span> Full Stack Dev
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 14, -8], x: [-6, 6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[15%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-primary">async</span> <span className="text-accent">build</span>() {"{ }"}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], x: [4, -4, 4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-52 left-[12%] hidden lg:block"
      >
        <div className="glass-card !transform-none p-3 code-font text-xs text-muted-foreground">
          <span className="text-primary">import</span> <span className="text-accent">{"{ code }"}</span>
        </div>
      </motion.div>

      <div className="section-container relative z-10 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 glass-card !transform-none px-4 py-2 mb-8 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-4"
        >
          Varshith <span className="gradient-text">Reddy</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl sm:text-2xl text-muted-foreground mb-6 font-display h-9"
        >
          <span>{typedTitle}</span>
          <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse align-middle" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed"
        >
          Final-year Computer Science student passionate about building scalable web applications
          and solving complex problems.
        </motion.p>

        {/* Tech stack badges — staggered entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.color} text-primary-foreground font-medium cursor-default shadow-lg`}
              style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
              whileHover={{ scale: 1.12, y: -4, boxShadow: `0 0 24px ${tech.glow}` }}
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
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium text-sm bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-primary-foreground shadow-[0_4px_20px_hsla(217,92%,60%,0.25)] hover:shadow-[0_8px_35px_hsla(217,92%,60%,0.45)] hover:scale-105 hover:-translate-y-1.5 active:scale-[0.98] active:translate-y-0"
            style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
          >
            Explore Projects
          </a>
          <a
            href="/Varshith_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-secondary hover:border-primary/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_25px_hsla(217,92%,60%,0.15)] active:scale-[0.98] active:translate-y-0"
            style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease" }}
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-secondary hover:border-primary/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_25px_hsla(217,92%,60%,0.15)] active:scale-[0.98] active:translate-y-0"
            style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease" }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links with tooltips */}
        <TooltipProvider delayDuration={200}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social, i) => (
              <Tooltip key={social.label}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_25px_hsla(217,92%,60%,0.3)] hover:-translate-y-1.5 hover:scale-110"
                    style={{ transition: "all 0.15s ease" }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  {social.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>

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
