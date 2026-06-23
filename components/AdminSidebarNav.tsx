"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Projects", href: "/admin/projects" },
  { label: "Skills", href: "/admin/skills" },
  { label: "Messages", href: "/admin/messages" },
  { label: "Bio & Settings", href: "/admin/bio" },
];

export default function AdminSidebarNav() {
  const pathname = usePathname();

  return (
    <nav style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
      {NAV_ITEMS.map((item) => {
        // Exact match for /admin, prefix match for others like /admin/projects
        const isActive =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
              textDecoration: "none",
              background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.02)";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = "transparent";
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
