import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaAws
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
    SiPostgresql
} from "react-icons/si";

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: SiNextdotjs, level: 90 },
            { name: "React.js", icon: FaReact, level: 90 },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
            { name: "TypeScript", icon: SiTypescript, level: 80 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs, level: 85 },
            { name: "Express.js", icon: SiExpress, level: 80 },
        ],
    },
    {
        category: "Database",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
            { name: "MySQL", icon: SiMysql, level: 75 },
            { name: "MongoDB", icon: SiMongodb, level: 85 },
        ],
    },
    {
        category: "DevOps & Tools",
        items: [
            { name: "Git", icon: FaGitAlt, level: 85 },
            { name: "GitHub Actions", icon: SiGithubactions, level: 75 },
            { name: "Vercel", icon: SiVercel, level: 85 },
            { name: "AWS", icon: FaAws, level: 70 },
        ],
    },
];
