"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Cpu, Layout, Globe, Sparkles } from "lucide-react";

const skills = [
    {
        icon: Layout,
        title: "Frontend Architecture",
        description: "Next.js (App Router), React, Tailwind CSS, Framer Motion.",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: Server,
        title: "Backend Engineering",
        description: "Node.js, Express, Microservices, and Auth implementation.",
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: Database,
        title: "Database Design",
        description: "MongoDB, PostgreSQL, Prisma, and performance indexing.",
        color: "from-orange-500/20 to-yellow-500/20",
    },
    {
        icon: Cloud,
        title: "DevOps & Scale",
        description: "Vercel, Docker basics, CI/CD Pipelines, and SEO.",
        color: "from-green-500/20 to-emerald-500/20",
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                        >
                            <Cpu size={14} />
                            About Me
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tighter"
                        >
                            Turning code into <br />
                            <span className="text-muted-foreground">digital experiences.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 text-muted-foreground text-lg leading-relaxed"
                    >
                        I’m a Computer Engineering student at **VGEC** with a focus on building
                        full-stack systems that are as fast as they are beautiful. I don't just
                        write code—I engineer solutions for real-world problems like
                        **PG management** and **EV platforms**.
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-3xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 overflow-hidden"
                            >
                                {/* Gradient Glow on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-background border border-border group-hover:border-primary/50 transition-colors shadow-sm">
                                        <Icon className="text-primary" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 tracking-tight">
                                        {skill.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                                    <Sparkles size={16} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* VGEC Info / Current Focus Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 rounded-3xl border border-dashed border-border flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Globe size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Currently Pursuing</p>
                            <p className="text-xs text-muted-foreground">Computer Engineering — 6th Semester, VGEC</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {["Next.js", "TypeScript", "Node", "MongoDB"].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-md bg-secondary text-[10px] font-bold uppercase tracking-wider border border-border">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}