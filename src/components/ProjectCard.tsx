"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Eye } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
  onSelectProject?: (project: Project) => void;
}

export default function ProjectCard({ project, isFeatured = false, onSelectProject }: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={isFeatured ? 4 : 7}
      tiltMaxAngleY={isFeatured ? 4 : 7}
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={isFeatured ? 1 : 1.02}
      className="h-full"
    >
      <div
        onClick={() => onSelectProject && onSelectProject(project)}
        className={cn(
          "group relative h-full rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col",
          isFeatured ? "md:flex-row md:items-stretch" : ""
        )}
      >
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/80 border border-indigo-400/40 text-white text-xs font-bold shadow-lg backdrop-blur-md">
            <Sparkles size={12} className="text-amber-300" /> Featured Project
          </div>
        )}

        {/* Project Thumbnail Image Container */}
        <div
          className={cn(
            "relative overflow-hidden bg-slate-950",
            isFeatured ? "md:w-3/5 min-h-[280px] md:min-h-full" : "h-52 w-full"
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Quick View Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-xs">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold backdrop-blur-md shadow-lg">
              <Eye size={14} /> Click for Details
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div
          className={cn(
            "p-6 sm:p-7 flex flex-col justify-between flex-1",
            isFeatured ? "md:w-2/5" : ""
          )}
        >
          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3
              className={cn(
                "font-extrabold mb-2.5 tracking-tight group-hover:text-indigo-400 transition-colors text-foreground",
                isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
              )}
            >
              {project.title}
            </h3>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-cyan-300 transition-colors"
            >
              Live Demo <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} /> Source
            </a>
          </div>

        </div>
      </div>
    </Tilt>
  );
}