"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "@/data/projects";
import { Rocket, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterTab = "all" | "ai" | "fullstack" | "mern";

const filterOptions: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI Platforms" },
  { id: "fullstack", label: "Fullstack" },
  { id: "mern", label: "MERN Stack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return project.category === "ai";
    if (activeFilter === "mern") return project.category === "mern";
    if (activeFilter === "fullstack") return project.category === "fullstack";
    return true;
  });

  const featured = filteredProjects.find((p) => p.featured) || (activeFilter === "all" ? projects[0] : null);
  const regularProjects = featured ? filteredProjects.filter((p) => p.title !== featured.title) : filteredProjects;

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
            >
              <Rocket size={14} /> Selected Works
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Featured <span className="gradient-text">Projects & Systems</span>
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-secondary/40 border border-border backdrop-blur-md"
          >
            {filterOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative",
                  activeFilter === tab.id
                    ? "text-white bg-indigo-600 shadow-md shadow-indigo-500/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Featured Card (Wide) */}
        {featured && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <ProjectCard
              project={featured}
              isFeatured
              onSelectProject={(p) => setSelectedProject(p)}
            />
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {regularProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}