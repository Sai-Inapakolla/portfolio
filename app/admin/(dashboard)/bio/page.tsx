import { prisma } from "@/lib/prisma";
import BioFormClient from "./BioFormClient";

export const dynamic = "force-dynamic";

export default async function AdminBioPage() {
  const bio = await prisma.bio.findFirst();

  return (
    <div style={{ maxWidth: 900 }}>
      {/* ── Header ── */}
      <div style={{ marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: "2rem", marginTop: 16 }}>
          About &amp; Persona Management
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6 }}>
          Manage your personal biography, coordinates, narrative story chapters, resume link, and contact handles for both the Homepage section and the dedicated /about story page.
        </p>
      </div>

      <BioFormClient bio={bio} />
    </div>
  );
}
