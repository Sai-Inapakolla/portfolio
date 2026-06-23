export interface Skill {
  name: string;
  color: string;
  category: string;
  svg: React.ReactNode;
}

export const SKILLS: Skill[] = [
  {
    name: "React",
    color: "#61DAFB",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <circle cx="12" cy="12" r="10" fill="#ffffff10" stroke="#ffffff40" strokeWidth="1" />
        <path d="M7 17V7l8 10V7" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h3" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Angular",
    color: "#DD0031",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M12 2L3 6.5l1.5 13L12 22l7.5-2.5L21 6.5L12 2z" fill="#DD0031" fillOpacity="0.15" stroke="#DD0031" strokeWidth="1.2" />
        <path d="M12 2L12 22" stroke="#DD0031" strokeWidth="0.8" strokeOpacity="0.3" />
        <path d="M12 6l-4 9h1.8l.8-2h2.8l.8 2H16L12 6z" fill="#DD0031" />
        <path d="M11 12l1-3 1 3H11z" fill="#1a1a1a" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    category: "Languages",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
        <path d="M13.5 11H10v1.5h1.5V17h1.5v-4.5H14.5V11H13.5z" fill="white" />
        <path d="M8 11v1h1.5v5h1.5v-5H12.5v-1H8z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#ED8B00",
    category: "Languages",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M9 16s-1 .5 1 1c1.5.5 3 .5 4-.5" stroke="#ED8B00" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M8 19s-1 .5 1 1c2 .5 5 .3 5-1" stroke="#ED8B00" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M12 4s-3 1.5-1 5c1.5 2.5 4 3 2 6" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M15 3s1 1-1 3c-1.5 1.5-3.5 2-2.5 3.5" stroke="#ED8B00" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    category: "Languages",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M12 2C9.5 2 7.5 3 7.5 5v2H12v1H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v-2.5C7 11.5 9 10 12 10s5 1.5 5 3.5V16h1.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17V5C17 3 15 2 12 2z" fill="#3776AB" />
        <path d="M12 22c2.5 0 4.5-1 4.5-3v-2H12v-1h6.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2.5C17 12.5 15 14 12 14s-5-1.5-5-3.5V8H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v3c0 2 2 3 5 3z" fill="#FFD43B" />
        <circle cx="10" cy="5.5" r="1" fill="white" />
        <circle cx="14" cy="18.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" fillOpacity="0.2" stroke="#339933" strokeWidth="1.2" />
        <path d="M12 6v6l5 3" stroke="#339933" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Spring Boot",
    color: "#6DB33F",
    category: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <circle cx="12" cy="12" r="10" fill="#6DB33F" fillOpacity="0.15" stroke="#6DB33F" strokeWidth="1.2" />
        <path d="M18 6L8.5 15.5" stroke="#6DB33F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 15.5c-2-2-2-5 0-7s5-2 7 0" stroke="#6DB33F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="8.5" cy="15.5" r="1.5" fill="#6DB33F" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    category: "Database",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M12 2C12 2 8 6 8 12s4 10 4 10 4-4 4-10S12 2 12 2z" fill="#47A248" fillOpacity="0.3" stroke="#47A248" strokeWidth="1.2" />
        <path d="M12 6v12" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#4479A1",
    category: "Database",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4479A1" fillOpacity="0.15" stroke="#4479A1" strokeWidth="1.2" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#4479A1" strokeWidth="1.2" fill="none" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#4479A1" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    category: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C13.37 10.8 14.33 12 16 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C14.63 7.2 13.67 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.37 16.8 9.33 18 11 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C9.63 13.2 8.67 12 7 12z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    category: "Tools",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M21.7 11.3l-9-9a1 1 0 00-1.4 0l-2 2 2.5 2.5a1.2 1.2 0 011.5 1.5l2.4 2.4a1.2 1.2 0 011.1 2 1.2 1.2 0 01-2.3-.5l-2.3-2.3v6a1.2 1.2 0 01.8 2.2 1.2 1.2 0 01-2.4 0 1.2 1.2 0 01.8-1.1V10a1.2 1.2 0 01-.8-1.6L9.9 6 2.3 13.7a1 1 0 000 1.4l9 9a1 1 0 001.4 0l9-9a1 1 0 000-1.7z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    category: "Tools",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M13 8h2v2h-2V8zM10 8h2v2h-2V8zM7 8h2v2H7V8zM10 5h2v2h-2V5zM13 5h2v2h-2V5z" fill="#2496ED" />
        <path d="M22 11.5c-.5-.5-1.5-.7-2.3-.5-.2-.8-.8-1.5-1.7-1.8l-.4-.1-.2.4c-.3.6-.3 1.5 0 2.1-.4.2-1 .4-1.5.4H2.1l-.1.4c-.2 1.1 0 2.5.8 3.5.8 1 2 1.5 3.6 1.5 3.4 0 5.9-1.5 7.1-4.3.5.1 1.5.1 2-.5.3-.3.5-.8.5-1.3l-.1-.4-.4.1z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "Postman",
    color: "#FF6C37",
    category: "Tools",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M13.53 10.58l-3.22 3.22a.38.38 0 01-.53 0l-.16-.16a4.47 4.47 0 016.18-6.18l.16.16a.38.38 0 010 .53l-2.43 2.43z" fill="#FF6C37" />
        <path d="M14.08 10l3.35-3.35a.63.63 0 01.44-.18c.17 0 .33.07.44.18a.63.63 0 010 .88L14.96 10.9 14.08 10z" fill="#FF6C37" />
        <path d="M9.25 14.34l-1.53 1.53a.22.22 0 01-.31 0l-1.28-1.28a.22.22 0 010-.31l1.53-1.53 1.59 1.59z" fill="#FF6C37" fillOpacity="0.7" />
        <circle cx="12" cy="12" r="10.5" stroke="#FF6C37" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    category: "Cloud",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <path d="M6 14l3-8 3 8M7.5 12h3" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 6l3 8-3 8" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M3 18c3 2 6 3 9 3s6-1 9-3" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const SKILL_CATEGORIES = [
  "Frontend",
  "Languages",
  "Backend",
  "Database",
  "Tools",
  "Cloud",
];
