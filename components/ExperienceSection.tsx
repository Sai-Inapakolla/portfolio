"use client";

import { useEffect, useRef } from "react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" style={{ padding: "112px 24px" }}>
      <div ref={sectionRef} className="section-container fade-section">
        <div style={{ marginBottom: 40 }}>
          <p className="section-label">Education & Work</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {/* Education column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Timeline entry */}
            <div
              style={{
                position: "relative",
                paddingLeft: 20,
                borderLeft: "1px solid var(--border)",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: -5,
                  top: 6,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--cyan)",
                  boxShadow: "0 0 8px rgba(0,217,255,0.5)",
                }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(0,217,255,0.6)",
                  letterSpacing: "0.1em",
                }}
              >
                2020 — 2024
              </span>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  marginTop: 4,
                }}
              >
                Bachelor of Science
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                Computer Science & Engineering
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                Your University
              </p>
            </div>

            {/* Campus image placeholder */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                height: 148,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "var(--bg-card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(0,217,255,0.05) 0%, rgba(167,139,250,0.05) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <span
                className="font-mono"
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                }}
              >
                CAMPUS
              </span>
            </div>
          </div>

          {/* Work experience card */}
          <div
            className="glass-card"
            style={{
              padding: 24,
              borderColor: "rgba(245,158,11,0.18)",
              height: "fit-content",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(245,158,11,0.55)",
                    letterSpacing: "0.1em",
                  }}
                >
                  JAN 2024 — PRESENT
                </span>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    marginTop: 6,
                    lineHeight: 1.3,
                  }}
                >
                  Full-Stack Developer
                </h3>
              </div>

              {/* Briefcase icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.18)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(245,158,11,0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "rgba(245,158,11,0.8)",
                marginBottom: 16,
              }}
            >
              Your Company
            </p>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Working on full-stack architecture, API design, and system
              engineering for scalable web applications. Building performant
              front-ends and robust backend services.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {[
                "Node.js",
                "REST APIs",
                "React",
                "System Design",
                "TypeScript",
                "PostgreSQL",
              ].map((tag) => (
                <span
                  key={tag}
                  className="tech-tag"
                  style={{
                    background: "rgba(245,158,11,0.07)",
                    color: "rgba(245,158,11,0.65)",
                    border: "1px solid rgba(245,158,11,0.14)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
