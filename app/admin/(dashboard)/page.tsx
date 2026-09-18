import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [projectCount, skillCount, messageCount] = await Promise.all([
    prisma.project.count(),
    prisma.skill.count(),
    prisma.contactMessage.count(),
  ]);

  return (
    <div>
      <h1 className="font-display" style={{ fontSize: "2.5rem", marginBottom: 8 }}>
        Overview
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: 40 }}>
        Welcome to your admin dashboard. Here is a summary of your portfolio data.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
        {/* Projects Card */}
        <div className="glass-card" style={{ padding: 24 }}>
          <h3 className="font-mono" style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 16 }}>
            TOTAL PROJECTS
          </h3>
          <div className="font-display" style={{ fontSize: "3rem", fontWeight: 700, color: "var(--cyan)", marginBottom: 16 }}>
            {projectCount}
          </div>
          <Link href="/admin/projects" style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textDecoration: "underline" }}>
            Manage Projects →
          </Link>
        </div>

        {/* Skills Card */}
        <div className="glass-card" style={{ padding: 24 }}>
          <h3 className="font-mono" style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 16 }}>
            TOTAL SKILLS
          </h3>
          <div className="font-display" style={{ fontSize: "3rem", fontWeight: 700, color: "var(--amber)", marginBottom: 16 }}>
            {skillCount}
          </div>
          <Link href="/admin/skills" style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textDecoration: "underline" }}>
            Manage Skills →
          </Link>
        </div>

        {/* Contact Messages Card */}
        <div className="glass-card" style={{ padding: 24 }}>
          <h3 className="font-mono" style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 16 }}>
            NEW MESSAGES
          </h3>
          <div className="font-display" style={{ fontSize: "3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>
            {messageCount}
          </div>
          <Link href="/admin/messages" style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textDecoration: "underline" }}>
            View Messages →
          </Link>
        </div>
      </div>
    </div>
  );
}
