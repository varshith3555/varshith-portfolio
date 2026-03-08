import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import LearningSection from "@/components/LearningSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <SkillsSection />
      <LearningSection />
      <div className="section-divider" />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
