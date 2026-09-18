"use client";

import { useActionState, useEffect, useState } from "react";
import type { Bio } from "@prisma/client";
import { saveBioAction } from "./actions";

interface Props {
  bio: Bio | null;
}

export default function BioFormClient({ bio }: Props) {
  const [state, formAction, isPending] = useActionState(saveBioAction, null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {bio && <input type="hidden" name="id" value={bio.id} />}

      {/* Success Notification Banner */}
      {showToast && (
        <div
          style={{
            padding: "16px 20px",
            borderRadius: 12,
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "var(--emerald)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: "0.9rem",
            fontWeight: 600,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{state?.message || "All changes saved successfully!"}</span>
        </div>
      )}

      {/* Error Banner */}
      {state && !state.success && (
        <div
          style={{
            padding: "16px 20px",
            borderRadius: 12,
            background: "rgba(244, 63, 94, 0.12)",
            border: "1px solid rgba(244, 63, 94, 0.4)",
            color: "var(--rose)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: "0.9rem",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{state.message}</span>
        </div>
      )}

      {/* ═══════════════════════════════════════════
          SECTION 1: HOMEPAGE ABOUT (/#about)
          ═══════════════════════════════════════════ */}
      <div className="glass-card" style={{ padding: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: "1.1rem" }}>🏠</span>
          <div>
            <h2 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              1. Homepage About Section (`/#about`)
            </h2>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Displayed directly on the main landing page.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="tagline" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Tagline / Quote
            </label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              defaultValue={bio?.tagline || ""}
              placeholder="e.g. Where curiosity meets passion"
              required
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="content" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Homepage Bio Content
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={bio?.content || ""}
              placeholder="Short bio summary displayed on homepage card..."
              required
              rows={5}
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="location" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Location String
            </label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={bio?.location || ""}
              placeholder="e.g. Vadodara, Gujarat, India"
              required
              className="admin-input"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="latitude" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Latitude (° N)
              </label>
              <input
                type="number"
                step="any"
                id="latitude"
                name="latitude"
                defaultValue={bio?.latitude ?? 22.30716}
                required
                className="admin-input"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="longitude" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Longitude (° E)
              </label>
              <input
                type="number"
                step="any"
                id="longitude"
                name="longitude"
                defaultValue={bio?.longitude ?? 73.18122}
                required
                className="admin-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 2: DEDICATED /about PERSONA & STORY
          ═══════════════════════════════════════════ */}
      <div className="glass-card" style={{ padding: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: "1.1rem" }}>📖</span>
          <div>
            <h2 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              2. Dedicated Persona &amp; Story Page (`/about`)
            </h2>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Deep-dive story chapters and extended persona narrative.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="statusText" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Availability / Status Badge Text
            </label>
            <input
              type="text"
              id="statusText"
              name="statusText"
              defaultValue={bio?.statusText || "Open to Opportunities & Collaborations"}
              placeholder="e.g. Open to Opportunities & Collaborations"
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="longBio" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Extended Persona Intro (Leave blank to use Homepage Bio)
            </label>
            <textarea
              id="longBio"
              name="longBio"
              defaultValue={bio?.longBio || ""}
              placeholder="Optional longer introduction for the /about page..."
              rows={4}
              className="admin-input"
            />
          </div>

          {/* Story Chapters */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
            <h3 className="font-mono" style={{ fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)" }}>
              The Story Chapters
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="originStory" style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Chapter 1: Origin &amp; Curiosity
              </label>
              <textarea
                id="originStory"
                name="originStory"
                defaultValue={bio?.originStory || ""}
                placeholder="How your passion for technology started..."
                rows={3}
                className="admin-input"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="currentFocus" style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Chapter 2: Present Focus &amp; Engineering Fusion
              </label>
              <textarea
                id="currentFocus"
                name="currentFocus"
                defaultValue={bio?.currentFocus || ""}
                placeholder="Your current studies, tech stack, and focus areas..."
                rows={3}
                className="admin-input"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="philosophy" style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Chapter 3: Engineering Principles &amp; Philosophy
              </label>
              <textarea
                id="philosophy"
                name="philosophy"
                defaultValue={bio?.philosophy || ""}
                placeholder="Your core software craftsmanship values..."
                rows={3}
                className="admin-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 3: RESUME & CONTACT LINKS
          ═══════════════════════════════════════════ */}
      <div className="glass-card" style={{ padding: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: "1.1rem" }}>📄</span>
          <div>
            <h2 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              3. Resume &amp; Social Links
            </h2>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              File path or link for resume download and verified social profiles.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="resumeUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Resume Download Link / Path
            </label>
            <input
              type="text"
              id="resumeUrl"
              name="resumeUrl"
              defaultValue={bio?.resumeUrl || "/Sai_Inapakolla_Resume.pdf"}
              placeholder="e.g. /Sai_Inapakolla_Resume.pdf or https://drive.google.com/..."
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Contact Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={bio?.email || "inapakolla.sai1@gmail.com"}
              placeholder="e.g. inapakolla.sai1@gmail.com"
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="githubUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              GitHub Profile URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              defaultValue={bio?.githubUrl || "https://github.com/Sai-Inapakolla"}
              placeholder="https://github.com/..."
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="linkedinUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              defaultValue={bio?.linkedinUrl || "https://www.linkedin.com/in/saiinapakolla576/"}
              placeholder="https://www.linkedin.com/in/..."
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="instagramUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Instagram Profile URL
            </label>
            <input
              type="url"
              id="instagramUrl"
              name="instagramUrl"
              defaultValue={bio?.instagramUrl || "https://www.instagram.com/inapakolla.sai"}
              placeholder="https://www.instagram.com/..."
              className="admin-input"
            />
          </div>
        </div>
      </div>

      {/* ── Save Action Button with Loading Indicator ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
        <button
          type="submit"
          disabled={isPending}
          className="pill-btn pill-btn--cyan"
          style={{
            padding: "14px 36px",
            fontSize: "0.95rem",
            opacity: isPending ? 0.7 : 1,
            cursor: isPending ? "wait" : "pointer",
          }}
        >
          <span className="pill-btn-shine" />
          {isPending ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin" style={{ animation: "spin 1s linear infinite" }}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Saving Changes...
            </>
          ) : (
            <>Save All Changes</>
          )}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .admin-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
          font-size: 0.9rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .admin-input:focus {
          border-color: var(--cyan);
          background: rgba(0, 217, 255, 0.03);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </form>
  );
}
