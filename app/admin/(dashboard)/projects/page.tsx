import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteProjectAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: "2rem" }}>
          Manage Projects
        </h1>
        <Link href="/admin/projects/edit" className="pill-btn pill-btn--cyan">
          <span className="pill-btn-shine" />
          Add Project
        </Link>
      </div>

      <div className="glass-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--border)" }}>
            <tr>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>Title</th>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>Status</th>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>Role</th>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "16px 24px" }}>
                  <div style={{ fontWeight: 600 }}>{project.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{project.slug}</div>
                </td>
                <td style={{ padding: "16px 24px" }}>
                  <span style={{ padding: "4px 8px", borderRadius: 4, background: "rgba(255,255,255,0.1)", fontSize: "0.75rem" }}>
                    {project.status || "N/A"}
                  </span>
                </td>
                <td style={{ padding: "16px 24px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  {project.role || "N/A"}
                </td>
                <td style={{ padding: "16px 24px", textAlign: "right", display: "flex", justifyContent: "flex-end", gap: 8 }}>
                  <Link
                    href={`/admin/projects/edit?id=${project.id}`}
                    style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(255,255,255,0.05)", fontSize: "0.875rem" }}
                  >
                    Edit
                  </Link>
                  <form action={deleteProjectAction}>
                    <input type="hidden" name="id" value={project.id} />
                    <button
                      type="submit"
                      style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(255,60,60,0.1)", color: "#ff6b6b", border: "1px solid rgba(255,60,60,0.3)", fontSize: "0.875rem", cursor: "pointer" }}
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: "32px 24px", textAlign: "center", color: "var(--text-secondary)" }}>
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
