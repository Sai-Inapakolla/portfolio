
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>

      <Navbar />

      <main style={{ minHeight: "100vh" }}>
        <HeroSection />

        <div className="section-divider" />
        <ProjectsSection />

        <div className="section-divider" />
        <AboutSection />

        <div className="section-divider" />
        <EducationSection />

        <div className="section-divider" />
        <ContactSection />
      </main>
    </>
  );
}

