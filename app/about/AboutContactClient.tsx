"use client";

import { useEffect, useRef, useState } from "react";
import type { Bio, Achievement, Certification } from "@prisma/client";

interface Props {
  bio: Bio | null;
  achievements?: Achievement[];
  certifications?: Certification[];
}

/* ── Specializations ── */
const SPECIALIZATIONS = [
  {
    title: "Full-Stack Web Engineering",
    description:
      "Architecting end-to-end web apps with Next.js App Router, React 19, TypeScript, Prisma ORM, and high-performance RESTful APIs.",
    tags: ["Next.js", "React 19", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "MongoDB"],
    color: "var(--cyan)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description:
      "Leveraging Python, data manipulation, deep learning architectures, and generative AI pipelines to build smart, data-driven features.",
    tags: ["Python", "Machine Learning", "Neural Networks", "Pandas", "Scikit-Learn", "AI Integration"],
    color: "var(--purple)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" x2="12" y1="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Creative Frontend & 3D Web",
    description:
      "Crafting immersive visual experiences using Three.js shaders, GSAP micro-animations, glassmorphism design systems, and particle effects.",
    tags: ["Three.js", "GSAP", "Canvas", "Micro-Interactions", "Responsive Design", "UI/UX"],
    color: "var(--amber)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
];

/* ── Journey Milestones ── */
const MILESTONES = [
  {
    year: "2023 — Present",
    title: "B.Tech in CSE (AI & ML)",
    subtitle: "Parul University · Vadodara, Gujarat",
    description:
      "Deepening core computer science expertise, data structures & algorithms, machine learning algorithms, and modern cloud/web systems engineering.",
    color: "var(--cyan)",
    status: "Active",
    tags: ["AI & ML", "Data Structures", "Full Stack", "Software Engineering"],
  },
  {
    year: "2023 — 2024",
    title: "Modern Web & Product Development",
    subtitle: "Self-Driven Exploration & Building",
    description:
      "Engineered real-world applications using Next.js App Router, TypeScript, Three.js 3D animations, and robust database architectures.",
    color: "var(--purple)",
    status: "Completed",
    tags: ["Next.js 16", "React 19", "Prisma", "Three.js", "GSAP"],
  },
  {
    year: "2021 — 2023",
    title: "Intermediate / Higher Secondary (MPC)",
    subtitle: "Government Jr. College · Cherla, Telangana",
    description:
      "Formed a strong analytical and quantitative foundation in Mathematics, Physics, and logical problem-solving.",
    color: "var(--amber)",
    status: "Completed",
    tags: ["Mathematics", "Physics", "Analytical Problem Solving"],
  },
  {
    year: "2020 — 2021",
    title: "Secondary School Certificate",
    subtitle: "Gurudev Vidyalayam · Cherla, Telangana",
    description:
      "Completed secondary education with top honors and developed an initial passion for computers and coding.",
    color: "var(--emerald)",
    status: "Completed",
    tags: ["Foundations", "Science", "Academics"],
  },
];

/* ── Daily Tech Stack ── */
const TECH_STACK_CATEGORIES = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libs",
    items: ["Next.js 16", "React 19", "Node.js", "Express", "Three.js", "GSAP", "Prisma ORM"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "PostgreSQL", "Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export default function AboutContactClient({
  bio,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Section observer for scroll fades
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const emailText = bio?.email || "inapakolla.sai1@gmail.com";
  const resumeDownloadUrl = bio?.resumeUrl || "/Sai_Inapakolla_Resume.pdf";

  // Dynamic Contact Links
  const contactLinks = [
    {
      label: "Mail",
      href: `mailto:${emailText}`,
      color: "#ea4335",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: bio?.githubUrl || "https://github.com/Sai-Inapakolla",
      color: "#e2e8f0",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: bio?.linkedinUrl || "https://www.linkedin.com/in/saiinapakolla576/",
      color: "#0a66c2",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: bio?.instagramUrl || "https://www.instagram.com/inapakolla.sai",
      color: "#e1306c",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>
      ),
    },
  ];

  // Dynamic Story Chapters
  const storyChapters = [
    {
      number: "01",
      tag: "ORIGIN & CURIOSITY",
      title: "How It All Started",
      description:
        bio?.originStory ||
        "My passion for technology began with an insatiable curiosity about how software shapes the everyday world. What started with tinkering and curiosity quickly grew into solving algorithms, structuring robust databases, and building full-scale web applications from scratch.",
      color: "var(--cyan)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      number: "02",
      tag: "PRESENT FOCUS",
      title: "Full-Stack & AI/ML Fusion",
      description:
        bio?.currentFocus ||
        "Currently pursuing B.Tech in CSE with a specialization in AI & Machine Learning at Parul University. I bridge modern full-stack web engineering (Next.js, TypeScript, Prisma, React 19) with intelligent AI/ML workflows to create responsive, intelligent user experiences.",
      color: "var(--purple)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 3.37 2.07 6.27 5 7.45V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.55c2.93-1.18 5-4.08 5-7.45a8 8 0 0 0-8-8z" />
          <path d="M10 9h4" />
          <path d="M12 7v4" />
        </svg>
      ),
    },
    {
      number: "03",
      tag: "PHILOSOPHY",
      title: "Engineering Principles",
      description:
        bio?.philosophy ||
        "I believe great software is built at the intersection of aesthetic beauty, clean architecture, and uncompromising performance. From micro-interactions to scalable database queries, every layer deserves craftsmanship and intentional design.",
      color: "var(--amber)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResumeDownload = () => {
    setDownloading(true);
    if (resumeDownloadUrl.startsWith("http")) {
      window.open(resumeDownloadUrl, "_blank", "noopener,noreferrer");
    } else {
      const link = document.createElement("a");
      link.href = resumeDownloadUrl;
      link.download = resumeDownloadUrl.split("/").pop() || "Sai_Inapakolla_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <div ref={sectionsRef}>
      {/* ═══════════════════════════════════════════
          HERO IDENTITY & QUICK ACTION BAR
          ═══════════════════════════════════════════ */}
      <section className="project-section" style={{ paddingTop: 32 }}>
        <div className="project-section-inner fade-section">
          <div
            className="glass-card"
            style={{
              padding: "32px 28px",
              position: "relative",
              overflow: "hidden",
              marginBottom: 32,
            }}
          >
            {/* Background glow & subtle grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.04) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-30%",
                right: "-10%",
                width: 320,
                height: 320,
                background: "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Top row: Status pill & Location tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 100,
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    color: "var(--emerald)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--emerald)",
                      boxShadow: "0 0 10px var(--emerald)",
                    }}
                  />
                  {bio?.statusText || "Open to Opportunities & Collaborations"}
                </div>

                <div
                  className="font-mono"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{bio?.location || "Vadodara, Gujarat, India"}</span>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>{bio?.latitude ?? 22.30716}° N, {bio?.longitude ?? 73.18122}° E</span>
                </div>
              </div>

              {/* Bio summary paragraph */}
              <div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                    fontWeight: 700,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  Inapakolla Sai
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.85,
                    maxWidth: 760,
                  }}
                >
                  {bio?.longBio ||
                    bio?.content ||
                    "Hi, I’m Inapakolla Sai, a B.Tech CSE (AI & ML) student at Parul University passionate about Full Stack Development and AI/ML. I enjoy building scalable web applications, solving DSA problems, and creating projects that combine technology with real-world impact."}
                </p>
              </div>

              {/* Tagline quote */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.02)",
                  borderLeft: "3px solid var(--purple)",
                }}
              >
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--purple)",
                    fontStyle: "italic",
                  }}
                >
                  &quot;{bio?.tagline || "Where curiosity meets passion"}&quot;
                </p>
              </div>

              {/* Action Buttons: Resume & Contact */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                  paddingTop: 8,
                }}
              >
                <button
                  onClick={handleResumeDownload}
                  className="pill-btn pill-btn--cyan"
                  style={{ padding: "12px 24px", fontSize: "0.82rem" }}
                >
                  <span className="pill-btn-shine" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  {downloading ? "Preparing Resume..." : "Download Resume (PDF)"}
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="pill-btn pill-btn--ghost"
                  style={{
                    padding: "12px 22px",
                    fontSize: "0.82rem",
                    borderColor: copied ? "rgba(16, 185, 129, 0.4)" : undefined,
                    color: copied ? "var(--emerald)" : undefined,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {copied ? (
                      <path d="M20 6L9 17l-5-5" />
                    ) : (
                      <>
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </>
                    )}
                  </svg>
                  {copied ? "Email Copied!" : "Copy Email"}
                </button>

                <a
                  href="#contact-section"
                  className="pill-btn pill-btn--ghost"
                  style={{ padding: "12px 22px", fontSize: "0.82rem" }}
                >
                  Get In Touch ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE STORY — NARRATIVE CHAPTERS
          ═══════════════════════════════════════════ */}
      <section className="project-section">
        <div className="project-section-inner fade-section">
          <p className="section-label">Narrative · Background</p>
          <h2 className="project-section-title font-display">The Story Behind The Code</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {storyChapters.map((chapter) => (
              <div
                key={chapter.number}
                className="glass-card"
                style={{
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent top border */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${chapter.color}, transparent)`,
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.72rem",
                        color: chapter.color,
                        letterSpacing: "0.15em",
                        fontWeight: 700,
                      }}
                    >
                      {chapter.tag}
                    </span>
                    <span
                      className="font-display"
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        opacity: 0.4,
                      }}
                    >
                      {chapter.number}
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: 12,
                      color: "var(--text-primary)",
                    }}
                  >
                    {chapter.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {chapter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE SPECIALIZATIONS
          ═══════════════════════════════════════════ */}
      <section className="project-section">
        <div className="project-section-inner fade-section">
          <p className="section-label">Capabilities · Skill Domains</p>
          <h2 className="project-section-title font-display">What I Bring to the Table</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {SPECIALIZATIONS.map((spec) => (
              <div
                key={spec.title}
                className="glass-card"
                style={{
                  padding: "26px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 20,
                  position: "relative",
                  borderColor: "rgba(255,255,255,0.09)",
                }}
              >
                <div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${spec.color}15`,
                      color: spec.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      border: `1px solid ${spec.color}30`,
                    }}
                  >
                    {spec.icon}
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: 10,
                      color: "var(--text-primary)",
                    }}
                  >
                    {spec.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {spec.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                        fontSize: "0.72rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          JOURNEY & MILESTONE TIMELINE
          ═══════════════════════════════════════════ */}
      <section className="project-section">
        <div className="project-section-inner fade-section">
          <p className="section-label">Milestones · Growth</p>
          <h2 className="project-section-title font-display">Journey Timeline</h2>

          <div style={{ position: "relative", paddingLeft: 24 }}>
            {/* Vertical timeline line */}
            <div
              style={{
                position: "absolute",
                left: 7,
                top: 8,
                bottom: 8,
                width: 2,
                background:
                  "linear-gradient(to bottom, var(--cyan), var(--purple), var(--amber), transparent)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {MILESTONES.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    paddingLeft: 28,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -24,
                      top: 6,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "var(--bg)",
                      border: `2.5px solid ${m.color}`,
                      boxShadow: `0 0 10px ${m.color}80`,
                      zIndex: 2,
                    }}
                  />

                  <div
                    className="glass-card"
                    style={{
                      padding: "20px 24px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.75rem",
                          color: m.color,
                          letterSpacing: "0.1em",
                          fontWeight: 700,
                        }}
                      >
                        {m.year}
                      </span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.65rem",
                          padding: "3px 9px",
                          borderRadius: 99,
                          background: `${m.color}15`,
                          color: m.color,
                          border: `1px solid ${m.color}30`,
                        }}
                      >
                        {m.status.toUpperCase()}
                      </span>
                    </div>

                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        marginBottom: 2,
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        marginBottom: 10,
                      }}
                    >
                      {m.subtitle}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: 14,
                      }}
                    >
                      {m.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tech-tag"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border)",
                            fontSize: "0.7rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DAILY DRIVERS / TECH RADAR
          ═══════════════════════════════════════════ */}
      <section className="project-section">
        <div className="project-section-inner fade-section">
          <p className="section-label">Toolkit · Daily Drivers</p>
          <h2 className="project-section-title font-display">Technologies &amp; Tools</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            {TECH_STACK_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                className="glass-card"
                style={{ padding: "22px 20px" }}
              >
                <h3
                  className="font-mono"
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 14,
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 8,
                  }}
                >
                  {cat.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="tech-tag"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                        fontSize: "0.78rem",
                        padding: "4px 10px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONNECT & REACH OUT HUB
          ═══════════════════════════════════════════ */}
      <section className="project-section" id="contact-section">
        <div className="project-section-inner fade-section">
          <p className="section-label">Let&apos;s Build Together</p>
          <h2 className="project-section-title font-display">Get In Touch</h2>

          <div
            className="glass-card"
            style={{
              padding: "36px 28px",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)",
              }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                Have an idea, project, or opportunity?
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                I am always excited to discuss software engineering roles, open source collaborations, or innovative full-stack / AI products.
              </p>

              {/* Contact link pills */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 28,
                }}
              >
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="pill-btn"
                    style={{
                      padding: "10px 22px",
                      fontSize: "0.78rem",
                      border: `1px solid ${link.color}38`,
                      background: `${link.color}0e`,
                      color: `${link.color}d9`,
                    }}
                  >
                    <span className="pill-btn-shine" />
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Direct email display with copy */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 16px",
                  borderRadius: 100,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                }}
              >
                <span className="font-mono">{emailText}</span>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    color: copied ? "var(--emerald)" : "var(--cyan)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer
            style={{
              textAlign: "center",
              padding: "48px 0 24px",
            }}
          >
            <p
              className="font-mono"
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              Built with Next.js 16 &amp; React 19 · Designed for Sai Inapakolla
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                marginTop: 4,
                opacity: 0.5,
              }}
            >
              © {new Date().getFullYear()} Sai Inapakolla. All rights reserved.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
