import { prisma } from "@/lib/prisma";
import { saveProjectAction } from "../actions";
import Link from "next/link";

export default async function EditProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  
  let project = null;
  if (id) {
    project = await prisma.project.findUnique({ where: { id } });
  }

  // Convert JSON strings to format suitable for textareas
  const tagsText = project ? (JSON.parse(project.tags) as string[]).join(", ") : "";
  const featuresText = project?.features ? (JSON.parse(project.features) as string[]).join("\n") : "";

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <Link href="/admin/projects" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem" }}>
          ← Back to Projects
        </Link>
        <h1 className="font-display" style={{ fontSize: "2rem", marginTop: 16 }}>
          {project ? "Edit Project" : "New Project"}
        </h1>
      </div>

      <div className="glass-card" style={{ padding: 32, maxWidth: 800 }}>
        <form action={saveProjectAction} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {project && <input type="hidden" name="id" value={project.id} />}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="title" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Title *</label>
              <input type="text" id="title" name="title" defaultValue={project?.title} required className="admin-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="slug" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Slug *</label>
              <input type="text" id="slug" name="slug" defaultValue={project?.slug} required className="admin-input" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="description" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Short Description *</label>
            <textarea id="description" name="description" defaultValue={project?.description} required rows={2} className="admin-input" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="longDescription" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Long Description (paragraphs separated by blank line)</label>
            <textarea id="longDescription" name="longDescription" defaultValue={project?.longDescription || ""} rows={6} className="admin-input" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="image" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Accent Color (HEX) *</label>
              <input type="text" id="image" name="image" defaultValue={project?.image || "#00d9ff"} required className="admin-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="tags" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Tags (comma separated) *</label>
              <input type="text" id="tags" name="tags" defaultValue={tagsText} required className="admin-input" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="githubUrl" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>GitHub URL</label>
              <input type="url" id="githubUrl" name="githubUrl" defaultValue={project?.githubUrl || ""} className="admin-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="liveUrl" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Live URL</label>
              <input type="url" id="liveUrl" name="liveUrl" defaultValue={project?.liveUrl || ""} className="admin-input" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="features" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Features (one per line)</label>
            <textarea id="features" name="features" defaultValue={featuresText} rows={4} className="admin-input" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="role" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Role</label>
              <input type="text" id="role" name="role" defaultValue={project?.role || ""} className="admin-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="status" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Status</label>
              <input type="text" id="status" name="status" defaultValue={project?.status || ""} className="admin-input" />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" id="featured" name="featured" defaultChecked={project?.featured} style={{ width: 16, height: 16 }} />
            <label htmlFor="featured" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>Featured Project</label>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginTop: 16 }}>
            <Link href="/admin/projects" className="pill-btn pill-btn--ghost">
              Cancel
            </Link>
            <button type="submit" className="pill-btn pill-btn--cyan">
              <span className="pill-btn-shine" />
              {project ? "Update Project" : "Create Project"}
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
