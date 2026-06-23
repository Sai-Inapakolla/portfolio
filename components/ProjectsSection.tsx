import { prisma } from "@/lib/prisma";
import ProjectsSectionClient from "./ProjectsSectionClient";

export default async function ProjectsSection() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'asc' },
  });
  
  return <ProjectsSectionClient projects={projects} />;
}
