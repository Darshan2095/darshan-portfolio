"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { Rocket } from "lucide-react";

export default function Projects() {
    const featured = projects.find((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-3"
                    >
                        <Rocket size={14} />
                        Portfolio
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter"
                    >
                        Featured <span className="text-muted-foreground">Projects</span>
                    </motion.h2>
                </div>

                {/* Featured Project - Wide Layout */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-20"
                    >
                        <ProjectCard project={featured} isFeatured />
                    </motion.div>
                )}

                {/* Other Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {others.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}