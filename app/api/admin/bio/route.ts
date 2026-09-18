import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = {
      content: String(body.content || ""),
      location: String(body.location || ""),
      latitude: parseFloat(String(body.latitude || 0)) || 0,
      longitude: parseFloat(String(body.longitude || 0)) || 0,
      tagline: String(body.tagline || ""),
      longBio: body.longBio ? String(body.longBio) : null,
      statusText: body.statusText ? String(body.statusText) : null,
      originStory: body.originStory ? String(body.originStory) : null,
      currentFocus: body.currentFocus ? String(body.currentFocus) : null,
      philosophy: body.philosophy ? String(body.philosophy) : null,
      resumeUrl: body.resumeUrl ? String(body.resumeUrl) : null,
      email: body.email ? String(body.email) : null,
      githubUrl: body.githubUrl ? String(body.githubUrl) : null,
      linkedinUrl: body.linkedinUrl ? String(body.linkedinUrl) : null,
      instagramUrl: body.instagramUrl ? String(body.instagramUrl) : null,
    };

    let updated;
    const existing = await prisma.bio.findFirst();
    if (existing) {
      updated = await prisma.bio.update({
        where: { id: existing.id },
        data,
      });
    } else {
      updated = await prisma.bio.create({ data });
    }

    revalidatePath("/admin/bio");
    revalidatePath("/");
    revalidatePath("/about");

    return NextResponse.json({ success: true, bio: updated });
  } catch (error: any) {
    console.error("Error in /api/admin/bio POST:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
