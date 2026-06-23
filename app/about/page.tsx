import Link from "next/link";
import type { Metadata } from "next";
import AboutContactClient from "./AboutContactClient";

export const metadata: Metadata = {
  title: "About & Contact | Portfolio",
  description:
    "Learn more about Inapakolla Sai — a B.Tech CSE (AI & ML) student passionate about full-stack development. Get in touch via email, GitHub, or LinkedIn.",
};

export default function AboutPage() {
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
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(167,139,250,0.12), transparent 70%)",
          }}
        />
        <div className="project-hero-grid" />

        <div className="project-hero-content" style={{ textAlign: "center" }}>
          <p className="section-label">Personal</p>
          <h1
            className="project-title font-display"
            style={{ marginBottom: 12 }}
          >
            About & Contact
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
            style={{ maxWidth: 520, margin: "0 auto" }}
          >
            Who I am, where I&apos;m based, how I work, and how to reach me.
          </p>
        </div>
      </section>

      {/* Client-side interactive sections */}
      <AboutContactClient />
    </main>
  );
}
