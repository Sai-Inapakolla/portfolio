"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteSkillAction(formData: FormData) {
  const id = formData.get("id") as string;
  
  if (id) {
    await prisma.skill.delete({ where: { id } });
    revalidatePath("/admin/skills");
    revalidatePath("/skills");
  }
}

export async function saveSkillAction(formData: FormData) {
  const id = formData.get("id") as string | null;
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const color = formData.get("color") as string;
  const icon = formData.get("icon") as string;

  const data = {
    name,
    category,
    color,
    icon,
  };

  if (id) {
    await prisma.skill.update({ where: { id }, data });
  } else {
    await prisma.skill.create({ data });
  }

  revalidatePath("/admin/skills");
  revalidatePath("/skills");
  redirect("/admin/skills");
}
