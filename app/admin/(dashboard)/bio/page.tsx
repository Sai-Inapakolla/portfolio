import { prisma } from "@/lib/prisma";
import { saveBioAction } from "./actions";

export default async function AdminBioPage() {
  const bio = await prisma.bio.findFirst();

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: "2rem", marginTop: 16 }}>
          Bio & Settings
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>Update your personal information displayed on the home page.</p>
      </div>

      <div className="glass-card" style={{ padding: 32, maxWidth: 600 }}>
        <form action={saveBioAction} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {bio && <input type="hidden" name="id" value={bio.id} />}

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="tagline" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Tagline</label>
            <input type="text" id="tagline" name="tagline" defaultValue={bio?.tagline || ""} required className="admin-input" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="content" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Bio Content</label>
            <textarea id="content" name="content" defaultValue={bio?.content || ""} required rows={6} className="admin-input" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="location" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Location String</label>
            <input type="text" id="location" name="location" defaultValue={bio?.location || ""} required className="admin-input" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="latitude" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Latitude</label>
              <input type="number" step="any" id="latitude" name="latitude" defaultValue={bio?.latitude || 0} required className="admin-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="longitude" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Longitude</label>
              <input type="number" step="any" id="longitude" name="longitude" defaultValue={bio?.longitude || 0} required className="admin-input" />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginTop: 16 }}>
            <button type="submit" className="pill-btn pill-btn--cyan">
              <span className="pill-btn-shine" />
              Save Bio Details
            </button>
          </div>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .admin-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
        }
        .admin-input:focus {
          border-color: var(--cyan);
        }
      `}} />
    </div>
  );
}
