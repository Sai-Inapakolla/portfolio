"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteProjectAction(formData: FormData) {
  const id = formData.get("id") as string;
  
  if (id) {
    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");
  }
}

export async function saveProjectAction(formData: FormData) {
  const id = formData.get("id") as string | null;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const longDescription = formData.get("longDescription") as string;
  const image = formData.get("image") as string;
  const githubUrl = formData.get("githubUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const tagsString = formData.get("tags") as string;
  const featuresString = formData.get("features") as string;
  const role = formData.get("role") as string;
  const status = formData.get("status") as string;
  const featured = formData.get("featured") === "on";

  // Parse tags and features as JSON arrays
  const tags = tagsString ? JSON.stringify(tagsString.split(",").map(t => t.trim())) : "[]";
  const features = featuresString ? JSON.stringify(featuresString.split("\n").filter(f => f.trim() !== "")) : "[]";

  const data = {
    title,
    slug,
    description,
    longDescription,
    image,
    githubUrl,
    liveUrl,
    tags,
    features,
    role,
    status,
    featured,
  };

  if (id) {
    await prisma.project.update({ where: { id }, data });
  } else {
    await prisma.project.create({ data });
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
  redirect("/admin/projects");
}
