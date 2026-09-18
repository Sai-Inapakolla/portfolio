"use client";

import { useState, useEffect } from "react";
import type { Bio } from "@prisma/client";

interface Props {
  bio: Bio | null;
}

export default function BioFormClient({ bio }: Props) {
  const [formData, setFormData] = useState({
    tagline: bio?.tagline || "",
    content: bio?.content || "",
    location: bio?.location || "",
    latitude: bio?.latitude ?? 22.30716,
    longitude: bio?.longitude ?? 73.18122,
    statusText: bio?.statusText || "Open to Opportunities & Collaborations",
    longBio: bio?.longBio || "",
    originStory: bio?.originStory || "",
    currentFocus: bio?.currentFocus || "",
    philosophy: bio?.philosophy || "",
    resumeUrl: bio?.resumeUrl || "/Sai_Inapakolla_Resume.pdf",
    email: bio?.email || "inapakolla.sai1@gmail.com",
    githubUrl: bio?.githubUrl || "https://github.com/Sai-Inapakolla",
    linkedinUrl: bio?.linkedinUrl || "https://www.linkedin.com/in/saiinapakolla576/",
    instagramUrl: bio?.instagramUrl || "https://www.instagram.com/inapakolla.sai",
  });

  useEffect(() => {
    if (bio) {
      setFormData({
        tagline: bio.tagline || "",
        content: bio.content || "",
        location: bio.location || "",
        latitude: bio.latitude ?? 22.30716,
        longitude: bio.longitude ?? 73.18122,
        statusText: bio.statusText || "Open to Opportunities & Collaborations",
        longBio: bio.longBio || "",
        originStory: bio.originStory || "",
        currentFocus: bio.currentFocus || "",
        philosophy: bio.philosophy || "",
        resumeUrl: bio.resumeUrl || "/Sai_Inapakolla_Resume.pdf",
        email: bio.email || "inapakolla.sai1@gmail.com",
        githubUrl: bio.githubUrl || "https://github.com/Sai-Inapakolla",
        linkedinUrl: bio.linkedinUrl || "https://www.linkedin.com/in/saiinapakolla576/",
        instagramUrl: bio.instagramUrl || "https://www.instagram.com/inapakolla.sai",
      });
    }
  }, [bio]);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/admin/bio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (data.bio) {
          setFormData((prev) => ({
            ...prev,
            tagline: data.bio.tagline ?? prev.tagline,
            content: data.bio.content ?? prev.content,
            location: data.bio.location ?? prev.location,
            latitude: data.bio.latitude ?? prev.latitude,
            longitude: data.bio.longitude ?? prev.longitude,
            statusText: data.bio.statusText ?? prev.statusText,
            longBio: data.bio.longBio ?? prev.longBio,
            originStory: data.bio.originStory ?? prev.originStory,
            currentFocus: data.bio.currentFocus ?? prev.currentFocus,
            philosophy: data.bio.philosophy ?? prev.philosophy,
            resumeUrl: data.bio.resumeUrl ?? prev.resumeUrl,
            email: data.bio.email ?? prev.email,
            githubUrl: data.bio.githubUrl ?? prev.githubUrl,
            linkedinUrl: data.bio.linkedinUrl ?? prev.linkedinUrl,
            instagramUrl: data.bio.instagramUrl ?? prev.instagramUrl,
          }));
        }
        setFeedback({
          type: "success",
          message: "All changes saved successfully!",
        });
        // Auto dismiss success toast after 4s
        setTimeout(() => {
          setFeedback((prev) => (prev?.type === "success" ? null : prev));
        }, 4000);
      } else {
        setFeedback({
          type: "error",
          message: data.error || "Failed to save changes. Please try again.",
        });
      }
    } catch (err: any) {
      console.error("Save error:", err);
      setFeedback({
        type: "error",
        message: err.message || "Network error. Please check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* ── Status Feedback Banner ── */}
      {feedback && (
        <div
          style={{
            padding: "16px 20px",
            borderRadius: 12,
            background:
              feedback.type === "success"
                ? "rgba(16, 185, 129, 0.14)"
                : "rgba(244, 63, 94, 0.14)",
            border: `1px solid ${
              feedback.type === "success"
                ? "rgba(16, 185, 129, 0.4)"
                : "rgba(244, 63, 94, 0.4)"
            }`,
            color:
              feedback.type === "success"
                ? "var(--emerald)"
                : "var(--rose)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: "0.92rem",
            fontWeight: 600,
          }}
        >
          {feedback.type === "success" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* ═══════════════════════════════════════════
          SECTION 1: HOMEPAGE ABOUT (/#about)
          ═══════════════════════════════════════════ */}
      <div className="glass-card" style={{ padding: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: "1.2rem" }}>🏠</span>
          <div>
            <h2 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              1. Homepage About Section (`/#about`)
            </h2>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Displayed on the main portfolio landing page.
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
              value={formData.tagline}
              onChange={handleChange}
              placeholder="e.g. Where curiosity meets passion"
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
              value={formData.content}
              onChange={handleChange}
              placeholder="Short bio summary displayed on homepage card..."
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
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Vadodara, Gujarat, India"
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
                value={formData.latitude}
                onChange={handleChange}
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
                value={formData.longitude}
                onChange={handleChange}
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
          <span style={{ fontSize: "1.2rem" }}>📖</span>
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
              value={formData.statusText}
              onChange={handleChange}
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
              value={formData.longBio}
              onChange={handleChange}
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
                value={formData.originStory}
                onChange={handleChange}
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
                value={formData.currentFocus}
                onChange={handleChange}
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
                value={formData.philosophy}
                onChange={handleChange}
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
          <span style={{ fontSize: "1.2rem" }}>📄</span>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label htmlFor="resumeUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Resume Download Link / Path
              </label>
              {formData.resumeUrl && (
                <a
                  href={formData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--cyan)",
                    textDecoration: "underline",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Test Link ↗
                </a>
              )}
            </div>
            <input
              type="text"
              id="resumeUrl"
              name="resumeUrl"
              value={formData.resumeUrl}
              onChange={handleChange}
              placeholder="e.g. /Sai_Inapakolla_Resume.pdf or https://drive.google.com/..."
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Contact Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. inapakolla.sai1@gmail.com"
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="githubUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              GitHub Profile URL
            </label>
            <input
              type="text"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="linkedinUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              LinkedIn Profile URL
            </label>
            <input
              type="text"
              id="linkedinUrl"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/..."
              className="admin-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="instagramUrl" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              Instagram Profile URL
            </label>
            <input
              type="text"
              id="instagramUrl"
              name="instagramUrl"
              value={formData.instagramUrl}
              onChange={handleChange}
              placeholder="https://www.instagram.com/..."
              className="admin-input"
            />
          </div>
        </div>
      </div>

      {/* ── Submit Action Button ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
        <button
          type="submit"
          disabled={loading}
          className="pill-btn pill-btn--cyan"
          style={{
            padding: "14px 38px",
            fontSize: "0.95rem",
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "wait" : "pointer",
          }}
        >
          <span className="pill-btn-shine" />
          {loading ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Saving Changes...
            </span>
          ) : (
            <span>Save All Changes</span>
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
      `}} />
    </form>
  );
}
