"use client";

import { useEffect, useRef } from "react";

/* ── Contact links ── */
const CONTACT_LINKS = [
  {
    label: "Mail",
    href: "mailto:inapakolla.sai1@gmail.com",
    color: "#ea4335",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Sai-Inapakolla",
    color: "#c0c0c0",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saiinapakolla576/",
    color: "#0a66c2",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/inapakolla.sai",
    color: "#990a57ff",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
      </svg>
    ),
  },
];

export default function AboutContactClient() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


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

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          ABOUT ME SECTION
          ═══════════════════════════════════════════ */}
      <section className="project-section">
        <div ref={aboutRef} className="project-section-inner fade-section">
          <p className="section-label">Who I Am</p>
          <h2 className="project-section-title font-display">About Me</h2>

          {/* Two-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 20,
            }}
          >
            {/* Location card */}
            <div
              className="glass-card"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 200,
                userSelect: "none",
              }}
            >
              {/* Background pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(0,217,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Cyan gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at 70% 60%, rgba(0,217,255,0.1) 0%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  minHeight: 200,
                  zIndex: 1,
                }}
              >
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
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  LOCATION
                </div>

                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    Vadodara, Gujarat, India
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      marginBottom: 2,
                    }}
                  >
                    22.30716° N, 73.18122° E
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    GMT+5:30
                  </div>
                </div>
              </div>
            </div>

            {/* Bio card */}
            <div
              className="glass-card"
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                minHeight: 200,
              }}
            >
              <div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.15em",
                    marginBottom: 12,
                  }}
                >
                  / ABOUT
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  Hi, I&apos;m Inapakolla Sai, a B.Tech CSE (AI &amp; ML)
                  student at Parul University passionate about Full Stack
                  Development and AI/ML. I enjoy building scalable web
                  applications, solving DSA problems, and creating projects that
                  combine technology with real-world impact.
                </p>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontStyle: "italic",
                  borderTop: "1px solid var(--border)",
                  paddingTop: 16,
                }}
              >
                &quot;Where curiosity meets passion&quot;
              </p>
            </div>
          </div>

          {/* Highlights row */}
          <div className="about-highlights-grid">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 12 3 12 0v-5" />
                  </svg>
                ),
                label: "Education",
                value: "B.Tech CSE (AI & ML)",
                color: "#a78bfa",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                ),
                label: "Focus",
                value: "Full Stack & AI/ML",
                color: "#00d9ff",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                label: "Availability",
                value: "Open to Opportunities",
                color: "#10b981",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="about-highlight-card"
                style={{
                  borderColor: `${item.color}20`,
                }}
              >
                <div
                  className="about-highlight-icon"
                  style={{
                    background: `${item.color}12`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      marginBottom: 4,
                    }}
                  >
                    {item.label.toUpperCase()}
                  </p>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT SECTION
          ═══════════════════════════════════════════ */}
      <section className="project-section" id="contact-section">
        <div ref={contactRef} className="project-section-inner fade-section">
          <p className="section-label">Skills · Identity</p>
          <h2 className="project-section-title font-display">Reach Out</h2>

          <div
            className="glass-card"
            style={{
              padding: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Purple ambient glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.04) 0%, transparent 70%)",
              }}
            />

            {/* Contact links */}
            <p
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
                position: "relative",
                zIndex: 1,
              }}
            >
              Hit Me Up
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1,
              }}
            >
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="pill-btn"
                  style={{
                    padding: "10px 20px",
                    fontSize: "0.7rem",
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
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              Built with Next.js · Designed with ♥
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                marginTop: 4,
                opacity: 0.5,
              }}
            >
              © {new Date().getFullYear()} Portfolio
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
