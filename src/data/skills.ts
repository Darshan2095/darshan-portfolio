import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaBrain,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithubactions,
  SiVercel,
  SiPostgresql,
  SiPrisma,
  SiFramer,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: any;
  level: number;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    description: "Building fast, accessible, responsive user interfaces",
    items: [
      { name: "Next.js 16", icon: SiNextdotjs, level: 92, badge: "Expert" },
      { name: "React 19", icon: FaReact, level: 90, badge: "Expert" },
      { name: "TypeScript", icon: SiTypescript, level: 85, badge: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, badge: "Expert" },
      { name: "Framer Motion", icon: SiFramer, level: 85, badge: "Advanced" },
    ],
  },
  {
    category: "Backend & Microservices",
    description: "Designing RESTful APIs and server-side workflows",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 88, badge: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: 85, badge: "Advanced" },
      { name: "Gemini AI Integrations", icon: FaBrain, level: 82, badge: "Advanced" },
    ],
  },
  {
    category: "Databases & ORMs",
    description: "Data modeling, indexing, and persistent storage",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 88, badge: "Advanced" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80, badge: "Intermediate" },
      { name: "Prisma ORM", icon: SiPrisma, level: 82, badge: "Advanced" },
      { name: "MySQL", icon: SiMysql, level: 80, badge: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Tooling",
    description: "Deployment pipelines, versioning, and cloud hosting",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt, level: 90, badge: "Expert" },
      { name: "Vercel", icon: SiVercel, level: 92, badge: "Expert" },
      { name: "GitHub Actions", icon: SiGithubactions, level: 75, badge: "Intermediate" },
      { name: "AWS Basics", icon: FaAws, level: 70, badge: "Learning" },
    ],
  },
];
