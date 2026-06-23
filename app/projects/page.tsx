import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "All Projects | Portfolio",
  description:
    "Explore my featured projects — full-stack platforms, AI-powered tools, and creative engineering work.",
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return (
    <main className="project-page">
      {/* ── Back navigation ── */}
      <div className="project-back-bar">
        <Link href="/#projects" className="project-back-btn">
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
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,217,255,0.12), transparent 70%)",
          }}
        />
        <div className="project-hero-grid" />

        <div className="project-hero-content" style={{ textAlign: "center" }}>
          <p className="section-label">Portfolio</p>
          <h1
            className="project-title font-display"
            style={{ marginBottom: 12 }}
          >
            All Projects
          </h1>
          <div
            className="project-accent-bar"
            style={{
              background: "linear-gradient(90deg, var(--cyan), var(--amber))",
              margin: "0 auto 20px",
            }}
          />
          <p
            className="project-subtitle"
            style={{ maxWidth: 520, margin: "0 auto" }}
          >
            A curated collection of full-stack platforms, AI-powered tools, and
            creative engineering work.
          </p>
        </div>
      </section>

      {/* ── Projects list ── */}
      <section className="project-section">
        <div className="project-section-inner">
          <div className="projects-list-grid">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="projects-list-card"
                style={{
                  borderColor: `${project.image}18`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Accent side strip */}
                <div
                  className="projects-list-accent"
                  style={{ background: project.image }}
                />

                <div className="projects-list-body">
                  {/* Header row */}
                  <div className="projects-list-header">
                    <div>
                      <h2 className="projects-list-name">{project.title}</h2>
                      <div className="projects-list-meta">
                        <span
                          className="project-badge"
                          style={{
                            background: `${project.image}12`,
                            border: `1px solid ${project.image}30`,
                            color: project.image,
                          }}
                        >
                          <span
                            className="project-badge-dot"
                            style={{ background: project.image }}
                          />
                          Completed
                        </span>
                        <span className="project-badge project-badge--role">
                          Full-Stack Developer
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className="projects-list-arrow"
                      style={{ color: project.image }}
                    >
                      <svg
                        width="20"
                        height="20"
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
                    </div>
                  </div>

                  {/* Description */}
                  <p className="projects-list-desc">{project.description}</p>

                  {/* Tags */}
                  <div className="projects-list-tags">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
