"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveBioAction(formData: FormData) {
  const id = formData.get("id") as string | null;
  const content = formData.get("content") as string;
  const location = formData.get("location") as string;
  const latitude = parseFloat(formData.get("latitude") as string);
  const longitude = parseFloat(formData.get("longitude") as string);
  const tagline = formData.get("tagline") as string;

  const data = {
    content,
    location,
    latitude: isNaN(latitude) ? 0 : latitude,
    longitude: isNaN(longitude) ? 0 : longitude,
    tagline,
  };

  if (id) {
    await prisma.bio.update({ where: { id }, data });
  } else {
    await prisma.bio.create({ data });
  }

  revalidatePath("/admin/bio");
  revalidatePath("/");
  revalidatePath("/about");
}
