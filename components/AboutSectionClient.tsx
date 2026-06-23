"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { Bio } from "@prisma/client";

const TRAITS: { label: string; color: string; description: string }[] = [];

export default function AboutSectionClient({ bio }: { bio: Bio | null }) {
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
    <section id="about" style={{ padding: "112px 24px" }}>
      <div ref={sectionRef} className="section-container fade-section">
        <div style={{ marginBottom: 40 }}>
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>

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
            {/* Background pattern — geometric grid */}
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
                  {bio?.location || "Unknown"}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    marginBottom: 2,
                  }}
                >
                  {bio?.latitude}° N, {bio?.longitude}° E
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
                {bio?.content}
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
              &quot;{bio?.tagline}&quot;
            </p>
          </div>
        </div>

        {/* Trait cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {TRAITS.map((trait) => (
            <div
              key={trait.label}
              style={{
                borderRadius: 12,
                padding: 16,
                background: `${trait.color}0d`,
                border: `1px solid ${trait.color}30`,
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: trait.color,
                  marginBottom: 8,
                }}
              >
                {trait.label}
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {trait.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <Link href="/about" className="pill-btn pill-btn--cyan">
            <span className="pill-btn-shine" />
            View Persona{" "}
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
          </Link>
        </div>
      </div>
    </section>
  );
}
