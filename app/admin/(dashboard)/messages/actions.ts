"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(formData: FormData) {
  const id = formData.get("id") as string;
  
  if (id) {
    await prisma.contactMessage.delete({ where: { id } });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
  }
}
