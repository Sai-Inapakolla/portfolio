"use client";

import { useEffect, useRef, useState } from "react";

const EDUCATION_DATA = [
  {
    period: "2023 — 2027",
    degree: "B.Tech — CSE (AI & ML)",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    status: "Pursuing",
    gpa: null,
    highlights: [],
    tags: ["AI/ML", "Full Stack", "DSA", "Python", "Web Dev"],
    color: "#00d9ff",
  },
  {
    period: "2021 — 2023",
    degree: "Intermediate (XII)",
    institution: "Government Jr. College",
    location: "Cherla, Telangana",
    status: "Completed",
    gpa: null,
    highlights: [],
    tags: ["MPC", "Mathematics", "Physics"],
    color: "#a78bfa",
  },
  {
    period: "2020 — 2021",
    degree: "Secondary School (X)",
    institution: "Gurudev Vidyalayam",
    location: "Cherla, Telangana",
    status: "Completed",
    gpa: null,
    highlights: [],
    tags: [],
    color: "#f59e0b",
  },
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="education" style={{ padding: "112px 24px" }}>
        <div ref={sectionRef} className="section-container fade-section">
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <p className="section-label">Academic Journey</p>
            <h2 className="section-title">Education</h2>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical timeline line */}
            <div
              className="edu-timeline-line"
              style={{
                position: "absolute",
                left: 19,
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  "linear-gradient(to bottom, var(--cyan), rgba(167,139,250,0.4), rgba(245,158,11,0.3), transparent)",
              }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: 32 }}
            >
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    paddingLeft: 48,
                    cursor: "default",
                  }}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: 12,
                      top: 24,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background:
                        activeCard === idx ? edu.color : "var(--bg-card)",
                      border: `2px solid ${edu.color}`,
                      boxShadow:
                        activeCard === idx
                          ? `0 0 12px ${edu.color}80, 0 0 24px ${edu.color}40`
                          : `0 0 6px ${edu.color}30`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                    }}
                  >
                    {/* Inner pulse for current education */}
                    {idx === 0 && (
                      <div
                        className="edu-pulse"
                        style={{
                          position: "absolute",
                          inset: -4,
                          borderRadius: "50%",
                          border: `1.5px solid ${edu.color}`,
                          animation: "edu-pulse-ring 2.5s ease-out infinite",
                        }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: 0,
                      overflow: "hidden",
                      borderColor:
                        activeCard === idx
                          ? `${edu.color}40`
                          : "var(--border)",
                      transition:
                        "border-color 0.4s, transform 0.4s, box-shadow 0.4s",
                      transform:
                        activeCard === idx
                          ? "translateX(4px)"
                          : "translateX(0)",
                      boxShadow:
                        activeCard === idx
                          ? `0 8px 32px ${edu.color}12, 0 0 0 1px ${edu.color}15`
                          : "none",
                    }}
                  >
                    {/* Card accent top bar */}
                    <div
                      style={{
                        height: 2,
                        background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                        opacity: activeCard === idx ? 1 : 0.3,
                        transition: "opacity 0.4s",
                      }}
                    />

                    <div style={{ padding: "20px 24px" }}>
                      {/* Top row: date + status badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 10,
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.72rem",
                            color: `${edu.color}99`,
                            letterSpacing: "0.12em",
                          }}
                        >
                          {edu.period}
                        </span>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            padding: "3px 10px",
                            borderRadius: 100,
                            background:
                              edu.status === "Pursuing"
                                ? `${edu.color}18`
                                : "rgba(255,255,255,0.04)",
                            color:
                              edu.status === "Pursuing"
                                ? edu.color
                                : "var(--text-muted)",
                            border: `1px solid ${edu.status === "Pursuing"
                              ? `${edu.color}40`
                              : "var(--border)"
                              }`,
                          }}
                        >
                          {edu.status === "Pursuing" ? "● " : ""}
                          {edu.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Degree + Institution */}
                      <h3
                        className="font-display"
                        style={{
                          fontWeight: 700,
                          fontSize: "1.15rem",
                          marginBottom: 4,
                          lineHeight: 1.35,
                        }}
                      >
                        {edu.degree}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          marginBottom: 16,
                        }}
                      >
                        {/* Building icon */}
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={edu.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ opacity: 0.6, flexShrink: 0 }}
                        >
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                          <path d="M10 6h4" />
                          <path d="M10 10h4" />
                          <path d="M10 14h4" />
                          <path d="M10 18h4" />
                        </svg>
                        <span
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: `${edu.color}cc`,
                          }}
                        >
                          {edu.institution}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          · {edu.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          marginBottom: 18,
                          paddingLeft: 2,
                        }}
                      >
                        {edu.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                            }}
                          >
                            <div
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: edu.color,
                                marginTop: 7,
                                flexShrink: 0,
                                opacity: 0.5,
                              }}
                            />
                            <span
                              style={{
                                fontSize: "0.82rem",
                                color: "var(--text-secondary)",
                                lineHeight: 1.65,
                              }}
                            >
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                      >
                        {edu.tags.map((tag) => (
                          <span
                            key={tag}
                            className="tech-tag"
                            style={{
                              background: `${edu.color}0c`,
                              color: `${edu.color}99`,
                              border: `1px solid ${edu.color}20`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scoped animations */}
      <style>{`
        @keyframes edu-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 640px) {
          .edu-timeline-line { left: 11px !important; }
        }
      `}</style>
    </>
  );
}
