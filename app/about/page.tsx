import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import AboutContactClient from "./AboutContactClient";

export const metadata: Metadata = {
  title: "About & Persona | Inapakolla Sai",
  description:
    "Explore Inapakolla Sai's journey, engineering philosophy, timeline, and technical specializations in Full-Stack Web Engineering and AI/ML.",
};

export default async function AboutPage() {
  const bio = await prisma.bio.findFirst();
  const achievements = await prisma.achievement.findMany().catch(() => []);
  const certifications = await prisma.certification.findMany().catch(() => []);

  return (
    <main className="project-page">
      {/* ── Back navigation ── */}
      <div className="project-back-bar">
        <Link href="/" className="project-back-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back Home
        </Link>
      </div>

      {/* ── Hero header ── */}
      <section className="project-hero">
        <div
          className="project-hero-glow"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(167,139,250,0.14), transparent 70%)",
          }}
        />
        <div className="project-hero-grid" />

        <div className="project-hero-content" style={{ textAlign: "center" }}>
          <p className="section-label">Persona · Journey · Philosophy</p>
          <h1
            className="project-title font-display"
            style={{ marginBottom: 12 }}
          >
            About &amp; Story
          </h1>
          <div
            className="project-accent-bar"
            style={{
              background:
                "linear-gradient(90deg, var(--purple), var(--cyan))",
              margin: "0 auto 20px",
            }}
          />
          <p
            className="project-subtitle"
            style={{ maxWidth: 580, margin: "0 auto" }}
          >
            An inside look into my story, engineering values, learning timeline, and full-stack development journey.
          </p>
        </div>
      </section>

      {/* Client-side interactive sections */}
      <AboutContactClient
        bio={bio}
        achievements={achievements}
        certifications={certifications}
      />
    </main>
  );
}

