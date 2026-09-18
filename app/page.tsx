
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const bio = await prisma.bio.findFirst();

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh" }}>
        <HeroSection resumeUrl={bio?.resumeUrl || undefined} />

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


