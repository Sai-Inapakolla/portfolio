"use client";

import { useState, useEffect } from "react";

const ROLES = ["DEVELOPER", "ENGINEER", "COLLABORATOR", "LEARNER"];

export default function HeroSection({ resumeUrl }: { resumeUrl?: string }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setAnimating(false);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const downloadHref = resumeUrl || "/Sai_Inapakolla_Resume.pdf";
  const isExternal = downloadHref.startsWith("http");

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >


      {/* Hero text content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 896,
          width: "100%",
          paddingTop: 64,
        }}
      >
        <p
          className="font-display"
          style={{
            color: "var(--text-muted)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Hello! I&apos;m
        </p>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 8vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Sai Inapakolla
        </h2>

        <p
          className="font-display"
          style={{
            color: "var(--text-muted)",
            fontSize: "clamp(0.9rem, 2vw, 1.25rem)",
            letterSpacing: "0.05em",
            marginBottom: 24,
          }}
        >
          A passionate{" "}
          <span style={{ color: "rgba(0,217,255,0.7)" }}>Full-Stack</span> &{" "}
          <span style={{ color: "rgba(245,158,11,0.7)" }}>Creative</span>{" "}
          Developer
        </p>

        {/* Role cycler */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <span
            className="font-display"
            style={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #f59e0b, #00d9ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              display: "block",
              textAlign: "center",
              animation: animating
                ? "roleSlideOut 0.35s ease forwards"
                : "roleSlideIn 0.35s ease forwards",
            }}
          >
            {ROLES[roleIndex]}
          </span>
        </div>

        {/* Dot pills indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {ROLES.map((_, i) => (
            <div
              key={i}
              style={{
                height: 5,
                width: i === roleIndex ? 28 : 5,
                borderRadius: 9999,
                background: i === roleIndex ? "var(--cyan)" : "var(--border)",
                transition: "width 0.35s ease, background 0.35s ease",
              }}
            />
          ))}
        </div>

        <p
          className="font-display"
          style={{
            color: "var(--text-muted)",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Building intelligent systems at the intersection of{" "}
          <span style={{ color: "var(--text-secondary)" }}>
            full-stack development
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--text-secondary)" }}>
            creative engineering
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href={downloadHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            download={!isExternal ? "Sai_Inapakolla_Resume.pdf" : undefined}
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            Resume & CV
          </a>
          <a href="#contact" className="pill-btn pill-btn--emerald">
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
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "var(--text-primary)",
          }}
        />
      </div>
    </section>
  );
}
