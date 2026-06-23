import { PrismaClient } from '@prisma/client';
import { PROJECTS } from '../lib/projects';
import { SKILLS } from '../lib/skills';
import { renderToString } from 'react-dom/server';

const prisma = new PrismaClient();

async function main() {
  try {
    // 1. Seed Projects
    console.log('Seeding projects...');
    for (const project of PROJECTS) {
      await prisma.project.upsert({
        where: { slug: project.slug },
        update: {},
        create: {
          slug: project.slug,
          title: project.name,
          description: project.description,
          longDescription: project.longDescription,
          tags: JSON.stringify(project.tags),
          features: JSON.stringify(project.features),
          role: project.role,
          status: project.status,
          image: project.accent,
          githubUrl: project.links.github,
          liveUrl: project.links.live,
        },
      });
    }

    // 2. Seed Skills
    console.log('Seeding skills...');
    for (const skill of SKILLS) {
      const svgString = renderToString(skill.svg as any);
      
      const existing = await prisma.skill.findFirst({
        where: { name: skill.name }
      });
      
      if (!existing) {
        await prisma.skill.create({
          data: {
            name: skill.name,
            category: skill.category,
            icon: svgString,
            color: skill.color,
          }
        });
      }
    }

    // 3. Seed Bio
    console.log('Seeding bio...');
    const existingBio = await prisma.bio.findFirst();
    if (!existingBio) {
      await prisma.bio.create({
        data: {
          content: "Hi, I’m Inapakolla Sai, a B.Tech CSE (AI & ML) student at Parul University passionate about Full Stack Development and AI/ML. I enjoy building scalable web applications, solving DSA problems, and creating projects that combine technology with real-world impact.",
          location: "Vadodara, Gujarat, India",
          latitude: 22.30716,
          longitude: 73.18122,
          tagline: "Where curiosity meets passion",
        }
      });
    }

    console.log('Seeding completed successfully!');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
