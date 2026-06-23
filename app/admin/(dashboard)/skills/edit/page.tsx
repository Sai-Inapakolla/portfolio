import { prisma } from "@/lib/prisma";
import { saveSkillAction } from "../actions";
import Link from "next/link";
import ColorInput from "./ColorInput";
export default async function EditSkillPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  
  let skill = null;
  if (id) {
    skill = await prisma.skill.findUnique({ where: { id } });
  }

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/admin/skills" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem" }}>
          ← Back to Skills
        </Link>
        <h1 className="font-display" style={{ fontSize: "2rem", marginTop: 16 }}>
          {skill ? "Edit Skill" : "New Skill"}
        </h1>
      </div>

      <div className="glass-card" style={{ padding: 32, maxWidth: 600 }}>
        <form action={saveSkillAction} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {skill && <input type="hidden" name="id" value={skill.id} />}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="name" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Skill Name *</label>
              <input type="text" id="name" name="name" defaultValue={skill?.name} required className="admin-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="category" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Category *</label>
              <input type="text" id="category" name="category" defaultValue={skill?.category} required className="admin-input" list="categories" />
              <datalist id="categories">
                <option value="Frontend" />
                <option value="Languages" />
                <option value="Backend" />
                <option value="Database" />
                <option value="Tools" />
                <option value="Cloud & Deployment" />
              </datalist>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="color" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Accent Color (HEX) *</label>
            <ColorInput defaultValue={skill?.color || "#ffffff"} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="icon" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>SVG Icon Code *</label>
            <textarea id="icon" name="icon" defaultValue={skill?.icon || ""} required rows={6} className="admin-input" style={{ fontFamily: "monospace", fontSize: "0.85rem" }} placeholder="<svg>...</svg>" />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginTop: 16 }}>
            <Link href="/admin/skills" className="pill-btn pill-btn--ghost">
              Cancel
            </Link>
            <button type="submit" className="pill-btn pill-btn--cyan">
              <span className="pill-btn-shine" />
              {skill ? "Update Skill" : "Create Skill"}
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
