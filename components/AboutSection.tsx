import { prisma } from "@/lib/prisma";
import AboutSectionClient from "./AboutSectionClient";

export default async function AboutSection() {
  const bio = await prisma.bio.findFirst();
  return <AboutSectionClient bio={bio} />;
}
