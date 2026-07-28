"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/60 border border-white/10 text-white/80 hover:text-white hover:bg-slate-950 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                {project.category === "ai" ? "AI Platform" : project.category === "mern" ? "MERN App" : "Fullstack Platform"}
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 flex items-center gap-1.5">
                <Sparkles size={14} /> Overview
              </h4>
              <p className="text-sm leading-relaxed text-slate-300 font-medium">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Key Features
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-white/5 text-xs font-medium">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-1.5">
                <Layers size={14} /> Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-end">
              <Button variant="outline" className="rounded-xl border-white/10 bg-slate-800 text-white hover:bg-slate-700" asChild>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} className="mr-2" /> View Repository
                </a>
              </Button>

              <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 font-bold" asChild>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Visit Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
