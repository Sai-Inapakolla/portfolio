"use client";

import { useEffect, useRef } from "react";
import { Project } from "@prisma/client";

export default function ProjectsSectionClient({ projects }: { projects: Project[] }) {
  const FEATURED_PROJECTS = projects.slice(0, 3);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" style={{ padding: "112px 24px" }}>
      <div
        ref={sectionRef}
        className="section-container fade-section"
      >
        <div style={{ marginBottom: 40 }}>
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="proj-card"
              style={{
                borderRadius: 16,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: "var(--bg-card)",
                border: `1px solid ${project.image}18`,
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  width: 32,
                  height: 2,
                  borderRadius: 9999,
                  background: project.image,
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {(JSON.parse(project.tags) as string[]).map((tag) => (
                  <span
                    key={tag}
                    className="tech-tag"
                    style={{
                      background: `${project.image}08`,
                      color: `${project.image}90`,
                      border: `1px solid ${project.image}18`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <a href="/projects" className="pill-btn pill-btn--cyan">
            <span className="pill-btn-shine" />
            View All Projects{" "}
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
