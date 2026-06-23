import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({ select: { slug: true } });
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });

  if (!project) notFound();

  /* Find adjacent projects for prev / next navigation */
  const allProjects = await prisma.project.findMany({ orderBy: { createdAt: 'asc' } });
  const idx = allProjects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? allProjects[idx - 1] : null;
  const next = idx < allProjects.length - 1 ? allProjects[idx + 1] : null;

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
          Back to Projects
        </Link>
      </div>

      {/* ── Hero banner ── */}
      <section className="project-hero">
        {/* Ambient glow */}
        <div
          className="project-hero-glow"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${project.image}25, transparent 70%)`,
          }}
        />

        {/* Decorative grid dots */}
        <div className="project-hero-grid" />

        <div className="project-hero-content">
          {/* Status & Role badges */}
          <div className="project-badges">
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
              {project.status}
            </span>
            <span className="project-badge project-badge--role">
              {project.role}
            </span>
          </div>

          {/* Title */}
          <h1 className="project-title font-display">{project.title}</h1>

          {/* Accent bar */}
          <div
            className="project-accent-bar"
            style={{
              background: `linear-gradient(90deg, ${project.image}, ${project.image}40)`,
            }}
          />

          {/* Short description */}
          <p className="project-subtitle">{project.description}</p>

          {/* Tech tags */}
          <div className="project-tags">
            {(JSON.parse(project.tags) as string[]).map((tag) => (
              <span
                key={tag}
                className="tech-tag"
                style={{
                  background: `${project.image}10`,
                  color: `${project.image}cc`,
                  border: `1px solid ${project.image}25`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="project-links">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--ghost"
                >
                  <span className="pill-btn-shine" />
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--cyan"
                >
                  <span className="pill-btn-shine" />
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── About section ── */}
      <section className="project-section">
        <div className="project-section-inner">
          <p className="section-label">Deep Dive</p>
          <h2 className="project-section-title font-display">
            About This Project
          </h2>

          <div className="project-description">
            {(project.longDescription || "").split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features section ── */}
      <section className="project-section">
        <div className="project-section-inner">
          <p className="section-label">Highlights</p>
          <h2 className="project-section-title font-display">Key Features</h2>

          <div className="project-features-grid">
            {(JSON.parse(project.features || "[]") as string[]).map((feature, i) => (
              <div
                key={i}
                className="project-feature-card"
                style={{
                  borderColor: `${project.image}15`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  className="project-feature-icon"
                  style={{
                    background: `${project.image}15`,
                    color: project.image,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="project-feature-text">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="project-section">
        <div className="project-section-inner">
          <div className="project-nav-footer">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="project-nav-card"
                style={{ borderColor: `${prev.image}20` }}
              >
                <span className="project-nav-label">← Previous</span>
                <span
                  className="project-nav-name"
                  style={{ color: prev.image }}
                >
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="project-nav-card project-nav-card--right"
                style={{ borderColor: `${next.image}20` }}
              >
                <span className="project-nav-label">Next →</span>
                <span
                  className="project-nav-name"
                  style={{ color: next.image }}
                >
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
