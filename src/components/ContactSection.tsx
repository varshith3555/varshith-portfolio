import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "+91 9347910680", href: "tel:+919347910680" },
  { icon: Mail, label: "varshithreddy661@gmail.com", href: "mailto:varshithreddy661@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/varshithreddy3", href: "https://linkedin.com/in/varshithreddy3/" },
  { icon: Github, label: "github.com/varshith3555", href: "https://github.com/varshith3555" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:varshithreddy661@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" ref={ref} className="relative">
      {/* Background depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-4">Let's connect and build something great together.</p>
          
          {/* Availability status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-12 text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-muted-foreground">Open to full-time roles & freelance projects</span>
          </motion.div>
        </motion.div>

        {/* Quick action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://linkedin.com/in/varshithreddy3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(210,80%,45%)] text-primary-foreground text-sm font-medium hover:shadow-[0_0_25px_hsla(210,80%,45%,0.3)] transition-all duration-300"
          >
            <Linkedin size={16} /> Connect on LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/varshith3555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-300"
          >
            <Github size={16} /> Follow on GitHub
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(217,92%,60%,0.15)] transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(217,92%,60%,0.15)] transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(217,92%,60%,0.15)] transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <Send size={16} /> Send Message
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group hover:shadow-[var(--shadow-glow)]"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <info.icon size={20} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {info.label}
                </span>
              </motion.a>
            ))}

            {/* Location & availability */}
            <div className="glass-card p-4 mt-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <MapPin size={16} className="text-primary" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock size={16} className="text-primary" />
                <span>IST (UTC +5:30) • Typically responds within 24hrs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
