import type { IconName } from "tech-stack-icons";

export type TechIcon = {
  name: IconName;
  label: string;
};

export const frontendTechIcons: TechIcon[] = [
  { name: "react", label: "React" },
  { name: "typescript", label: "TypeScript" },
  { name: "tailwindcss", label: "Tailwind CSS" },
  { name: "js", label: "JavaScript" },
  { name: "html5", label: "HTML" },
  { name: "css3", label: "CSS" },
  { name: "kotlin", label: "Kotlin" },
];

export const backendTechIcons: TechIcon[] = [
  { name: "nodejs", label: "Node.js" },
  { name: "expressjs", label: "Express" },
  { name: "mongodb", label: "MongoDB" },
  { name: "mysql", label: "MySQL" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "firebase", label: "Firebase" },
  { name: "supabase", label: "Supabase" },
];

export const devOpsCloudTechIcons: TechIcon[] = [
  { name: "grafana", label: "Grafana" },
  { name: "github", label: "GitHub Actions" },
];

export const aiTechIcons: TechIcon[] = [
  { name: "openai", label: "Open AI" },
];

export const devToolsTechIcons: TechIcon[] = [
  { name: "github", label: "GitHub" },
  { name: "git", label: "Git" }
]
