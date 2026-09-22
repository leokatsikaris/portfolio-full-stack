import type { SkillGroup } from "../types";
export const technologyFamilies: Record<string, string> = {
  React: "interface",
  TypeScript: "interface",
  "Node.js": "data",
  PostgreSQL: "data",
  Jest: "testing",
  "React Testing Library": "testing",
};
export const skills: SkillGroup[] = [
  {
    id: "frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "SCSS",
      "Material UI",
      "Tailwind CSS",
      "Zustand",
      "Redux",
    ],
  },
  {
    id: "backend",
    items: ["Node.js", "Express", "NestJS", "Python", "Java", "REST APIs"],
  },
  { id: "database", items: ["PostgreSQL", "SQL", "TypeORM"] },
  { id: "tools", items: ["AWS", "Docker", "Git"] },
  { id: "testing", items: ["Jest", "React Testing Library"] },
  { id: "ai", items: ["Claude", "OpenAI Codex", "GitHub Copilot", "ChatGPT"] },
];
