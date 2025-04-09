import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import ProjectsSection from "@/components/projects-section";
import WorkSection from "@/components/work-section";
import SkillsSection from "@/components/skills-section";
import DataDashboardPreview from "@/components/data-dashboard-preview";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <WorkSection />
        <ProjectsSection />
        <DataDashboardPreview />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
