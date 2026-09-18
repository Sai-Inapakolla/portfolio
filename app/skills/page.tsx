import { SKILL_CATEGORIES } from "@/lib/skills";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function SkillsPage() {
  const skills = await prisma.skill.findMany();
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: 120,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p className="section-label">My Arsenal</p>
          <h1 className="section-title">Technical Skills</h1>
          <p
            className="font-display"
            style={{
              color: "var(--text-muted)",
              marginTop: 16,
              maxWidth: 600,
              margin: "16px auto 0",
              lineHeight: 1.6,
            }}
          >
            A comprehensive list of technologies and tools I work with to build
            intelligent, scalable, and creative systems.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {SKILL_CATEGORIES.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <section key={category}>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: 32,
                    color: "var(--text-primary)",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 16,
                  }}
                >
                  {category}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: 24,
                  }}
                >
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="proj-card"
                      style={{
                        padding: "24px 16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 16,
                        borderRadius: 16,
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          padding: 12,
                          borderRadius: 12,
                          background: `rgba(255, 255, 255, 0.05)`,
                          border: `1px solid rgba(255, 255, 255, 0.1)`,
                        }}
                        dangerouslySetInnerHTML={{ __html: skill.icon }}
                      />
                      <span
                        className="font-mono"
                        style={{
                          fontWeight: 500,
                          color: "var(--text-primary)",
                          fontSize: "0.85rem",
                          textAlign: "center",
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
