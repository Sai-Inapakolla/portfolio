"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type BioActionState = {
  success: boolean;
  message: string;
} | null;

export async function saveBioAction(
  prevState: BioActionState,
  formData: FormData
): Promise<BioActionState> {
  try {
    const id = formData.get("id") as string | null;
    const content = (formData.get("content") as string) || "";
    const location = (formData.get("location") as string) || "";
    const latitude = parseFloat(formData.get("latitude") as string);
    const longitude = parseFloat(formData.get("longitude") as string);
    const tagline = (formData.get("tagline") as string) || "";
    const longBio = (formData.get("longBio") as string) || null;
    const statusText = (formData.get("statusText") as string) || null;
    const originStory = (formData.get("originStory") as string) || null;
    const currentFocus = (formData.get("currentFocus") as string) || null;
    const philosophy = (formData.get("philosophy") as string) || null;
    const resumeUrl = (formData.get("resumeUrl") as string) || null;
    const email = (formData.get("email") as string) || null;
    const githubUrl = (formData.get("githubUrl") as string) || null;
    const linkedinUrl = (formData.get("linkedinUrl") as string) || null;
    const instagramUrl = (formData.get("instagramUrl") as string) || null;

    const data = {
      content,
      location,
      latitude: isNaN(latitude) ? 0 : latitude,
      longitude: isNaN(longitude) ? 0 : longitude,
      tagline,
      longBio,
      statusText,
      originStory,
      currentFocus,
      philosophy,
      resumeUrl,
      email,
      githubUrl,
      linkedinUrl,
      instagramUrl,
    };

    if (id) {
      await prisma.bio.update({ where: { id }, data });
    } else {
      const existing = await prisma.bio.findFirst();
      if (existing) {
        await prisma.bio.update({ where: { id: existing.id }, data });
      } else {
        await prisma.bio.create({ data });
      }
    }

    revalidatePath("/admin/bio");
    revalidatePath("/");
    revalidatePath("/about");

    return { success: true, message: "All changes saved successfully!" };
  } catch (error: any) {
    console.error("Error in saveBioAction:", error);
    return {
      success: false,
      message: error?.message || "An error occurred while saving changes.",
    };
  }
}


