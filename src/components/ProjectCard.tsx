"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    live: string;
    github: string;
    featured?: boolean;
}

export default function ProjectCard({ project, isFeatured = false }: { project: Project; isFeatured?: boolean }) {
    return (
        <Tilt
            tiltMaxAngleX={isFeatured ? 3 : 8}
            tiltMaxAngleY={isFeatured ? 3 : 8}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={isFeatured ? 1 : 1.03}
            className="h-full"
        >
            <div className={cn(
                "group relative h-full rounded-[2rem] border border-border bg-secondary/10 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-secondary/20",
                isFeatured ? "md:flex md:items-stretch" : "flex flex-col"
            )}>

                {/* Project Image Container */}
                <div className={cn(
                    "relative overflow-hidden",
                    isFeatured ? "md:w-3/5 h-[300px] md:h-auto" : "h-56 w-full"
                )}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area */}
                <div className={cn(
                    "p-8 flex flex-col",
                    isFeatured ? "md:w-2/5 justify-center" : "flex-1"
                )}>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                                {t}
                            </span>
                        ))}
                    </div>

                    <h3 className={cn(
                        "font-bold mb-3 tracking-tight group-hover:text-primary transition-colors",
                        isFeatured ? "text-3xl" : "text-xl"
                    )}>
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Action Links */}
                    <div className="mt-auto flex items-center gap-6">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold hover:text-primary transition-colors group/link"
                        >
                            Live Demo
                            <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold hover:text-primary transition-colors"
                        >
                            <Github size={16} />
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}