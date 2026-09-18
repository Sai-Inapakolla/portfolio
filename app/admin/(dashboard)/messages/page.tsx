import { prisma } from "@/lib/prisma";
import { deleteMessageAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: "2rem" }}>
          Contact Messages
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {messages.map((msg) => (
          <div key={msg.id} className="glass-card" style={{ padding: 24, position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", margin: 0, color: "var(--text-primary)" }}>{msg.name}</h3>
                <a href={`mailto:${msg.email}`} style={{ fontSize: "0.875rem", color: "var(--cyan)", textDecoration: "none" }}>
                  {msg.email}
                </a>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {msg.createdAt.toLocaleString()}
              </div>
            </div>
            <div style={{ padding: 16, background: "rgba(0,0,0,0.2)", borderRadius: 8, color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
              {msg.message}
            </div>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
              <form action={deleteMessageAction}>
                <input type="hidden" name="id" value={msg.id} />
                <button
                  type="submit"
                  style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(255,60,60,0.1)", color: "#ff6b6b", border: "1px solid rgba(255,60,60,0.3)", fontSize: "0.875rem", cursor: "pointer" }}
                >
                  Delete Message
                </button>
              </form>
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="glass-card" style={{ padding: 32, textAlign: "center", color: "var(--text-secondary)" }}>
            No messages received yet.
          </div>
        )}
      </div>
    </div>
  );
}
