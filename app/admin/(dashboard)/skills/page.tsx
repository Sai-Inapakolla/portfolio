import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteSkillAction } from "./actions";

export default async function AdminSkillsPage() {
  const skills = await prisma.skill.findMany({
    orderBy: [{ category: "asc" }, { name: "asc" }],
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: "2rem" }}>
          Manage Skills
        </h1>
        <Link href="/admin/skills/edit" className="pill-btn pill-btn--cyan">
          <span className="pill-btn-shine" />
          Add Skill
        </Link>
      </div>

      <div className="glass-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--border)" }}>
            <tr>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>Icon</th>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>Name</th>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>Category</th>
              <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "16px 24px" }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      padding: 6,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                  />
                </td>
                <td style={{ padding: "16px 24px", fontWeight: 600 }}>{skill.name}</td>
                <td style={{ padding: "16px 24px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  <span style={{ padding: "4px 8px", borderRadius: 4, background: "rgba(255,255,255,0.1)", fontSize: "0.75rem" }}>
                    {skill.category}
                  </span>
                </td>
                <td style={{ padding: "16px 24px", textAlign: "right", display: "flex", justifyContent: "flex-end", gap: 8 }}>
                  <Link
                    href={`/admin/skills/edit?id=${skill.id}`}
                    style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(255,255,255,0.05)", fontSize: "0.875rem" }}
                  >
                    Edit
                  </Link>
                  <form action={deleteSkillAction}>
                    <input type="hidden" name="id" value={skill.id} />
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
            {skills.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: "32px 24px", textAlign: "center", color: "var(--text-secondary)" }}>
                  No skills found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
