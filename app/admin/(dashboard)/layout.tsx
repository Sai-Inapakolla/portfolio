import Link from "next/link";
import AdminSidebarNav from "@/components/AdminSidebarNav";
import { logoutAction } from "../actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex" } as React.CSSProperties}>
      {/* Sidebar */}
      <aside
        style={{
          width: 260,
          background: "var(--bg-card)",
          borderRight: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <div style={{ padding: 24, borderBottom: "1px solid var(--border)" }}>
          <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", display: "inline-block", marginBottom: 16 }}>
            ← Back to Website
          </Link>
          <h2 className="font-display" style={{ fontSize: "1.25rem", margin: 0 }}>
            Admin Dashboard
          </h2>
        </div>
        
        <AdminSidebarNav />

        <div style={{ padding: 24, borderTop: "1px solid var(--border)" }}>
          <form action={logoutAction}>
            <button
              type="submit"
              className="pill-btn pill-btn--ghost"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span className="pill-btn-shine" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "40px 48px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
