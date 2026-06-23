"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "PROJECTS", href: "/#projects" },
  { label: "SKILLS", href: "/skills" },
  { label: "ABOUT", href: "/#about" },
  { label: "EDUCATION", href: "/#education" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!navRef.current || !glowRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.setProperty("--glow-x", `${x}px`);
    glowRef.current.style.setProperty("--glow-y", `${y}px`);
    glowRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10000,
          width: "90%",
          maxWidth: 896,
        }}
      >
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative", borderRadius: 16 }}
        >
          {/* Breathing border */}
          <div
            style={{
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              borderRadius: 16,
              transition: "opacity 1s",
              opacity: scrolled ? 0.6 : 0,
              background:
                "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(0,217,255,0.45), transparent 70%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: 1,
            }}
          />

          {/* Mouse-follow glow */}
          <div
            ref={glowRef}
            style={{
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              borderRadius: 16,
              transition: "opacity 0.3s",
              opacity: 0,
              background:
                "radial-gradient(120px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0,217,255,0.55), transparent 80%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: 1,
            }}
          />

          {/* Main bar */}
          <div
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="font-display cyan-glow"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--cyan)",
              }}
            >
              Portfolio
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Desktop nav links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
                className="nav-desktop"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      padding: "6px 12px",
                      borderRadius: 12,
                      color: "var(--text-secondary)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--cyan)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Admin Button */}
              <Link
                href="/admin"
                aria-label="Admin Portal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  color: "var(--text-muted)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--cyan)";
                  e.currentTarget.style.background = "rgba(0, 217, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </Link>

              {/* Mobile hamburger */}
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                padding: 8,
                borderRadius: 12,
                background: "var(--bg-card)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-primary)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 80,
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              maxWidth: 400,
              background: "var(--glass-bg)",
              backdropFilter: "blur(24px)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  padding: "12px 16px",
                  borderRadius: 12,
                  color: "var(--text-secondary)",
                  transition: "all 0.2s",
                  background: "var(--bg-card)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
