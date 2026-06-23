import { loginAction } from "../actions";
import Link from "next/link";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      } as React.CSSProperties}
    >
      <div style={{ position: "absolute", top: 32, left: 32 }}>
        <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: 8 }}>
          ← Back to Website
        </Link>
      </div>
      <div className="glass-card" style={{ padding: 40, width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 className="font-display" style={{ fontSize: "2rem", marginBottom: 8 }}>
            Admin Access
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>Enter your password to continue</p>
        </div>

        {error && (
          <div
            style={{
              padding: 12,
              borderRadius: 8,
              background: "rgba(255, 60, 60, 0.1)",
              border: "1px solid rgba(255, 60, 60, 0.3)",
              color: "#ff6b6b",
              marginBottom: 24,
              fontSize: "0.875rem",
              textAlign: "center",
            }}
          >
            Invalid password. Please try again.
          </div>
        )}

        <form action={loginAction} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              htmlFor="password"
              style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 8,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            className="pill-btn pill-btn--cyan"
            style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
          >
            <span className="pill-btn-shine" />
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
