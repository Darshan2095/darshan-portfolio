"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "Teachnook",
        duration: "Mar 2024 – May 2024",
        skills: ["React", "Node.js", "MongoDB", "API Design"],
        description: [
            "Engineered scalable APIs and optimized database schemas for performance.",
            "Collaborated on production-level features using the MERN stack.",
            "Reduced bug turnaround time by participating in rigorous code reviews."
        ],
    },
    {
        role: "Full Stack Contributor",
        company: "Rhyno.ev Project",
        duration: "2024 - Present",
        skills: ["Next.js", "Tailwind CSS", "UX Design"],
        description: [
            "Building the digital face of an electric bike startup.",
            "Implementing highly responsive, fluid UI components with Next.js.",
            "Ensuring cross-browser compatibility and mobile-first performance."
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 bg-background">
            <div className="container max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-2 bg-primary/10 rounded-xl mb-4"
                    >
                        <Briefcase className="text-primary" size={24} />
                    </motion.div>
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">
                        Professional <span className="text-primary">Journey</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 hidden md:block" />

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                                    <div className="group p-6 rounded-3xl border border-border bg-secondary/10 hover:bg-secondary/20 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-primary/5">

                                        {/* Header Info */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-1 rounded">
                                                {exp.duration}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>

                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                            <Building2 size={14} />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>

                                        {/* Bullet Points */}
                                        <ul className="space-y-2 mb-6">
                                            {exp.description.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                                                    <CheckCircle2 size={14} className="mt-1 text-primary shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Skill Badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 rounded-md bg-background border border-border text-[10px] font-bold text-foreground/70"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for Desktop */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}