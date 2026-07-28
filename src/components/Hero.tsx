"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, Terminal, Code2, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundGrid from "./BackgroundGrid";

const roles = [
  "Full Stack Developer",
  "Next.js & MERN Specialist",
  "AI & Web Apps Engineer",
  "Computer Engineering Student @ VGEC",
];

const heroStats = [
  { value: "10+", label: "Projects Completed" },
  { value: "15+", label: "Tech Stack Tools" },
  { value: "3+", label: "Years Coding" },
  { value: "100%", label: "Responsive & Modern" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Lights & Mesh Grid */}
      <BackgroundGrid />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-0 pointer-events-none" />

      {/* Radial Glow Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Main Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 mb-6 text-xs font-semibold backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-foreground/90">Available for Remote & Full-time Roles</span>
              <Sparkles size={12} className="text-amber-400 ml-1" />
            </motion.div>

            {/* Title with Dynamic Rotating Roles */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-5 leading-tight"
            >
              Hi, I'm <span className="text-foreground">Darshan</span>.
              <div className="mt-1 min-h-[1.35em] flex items-center relative overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="gradient-text font-bold inline-block"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Passionate Full Stack Engineer engineering fast, scalable modern web platforms.
              Specialized in <span className="text-foreground font-semibold">Next.js App Router</span>,{" "}
              <span className="text-foreground font-semibold">Node.js</span>,{" "}
              <span className="text-foreground font-semibold">MongoDB</span>, and{" "}
              <span className="text-foreground font-semibold">AI integrations</span> with precision UI.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto mb-10"
            >
              <Button size="lg" className="rounded-full h-12 px-8 text-base font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 transition-all duration-300 group" asChild>
                <a href="#projects">
                  <span className="flex items-center gap-2">
                    Explore Work <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </a>
              </Button>

              <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base font-semibold border-white/10 hover:bg-white/5 backdrop-blur-md group" asChild>
                <a href="/Darshan_Babariya_Resume.pdf" download>
                  <Download size={18} className="mr-2 group-hover:-translate-y-0.5 transition-transform text-indigo-400" />
                  Get Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Proof Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold mr-2">
                Tech Focus:
              </span>
              {["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Prisma", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-secondary/40 border border-border/80 text-xs font-medium hover:border-indigo-500/40 hover:text-indigo-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </div>

          {/* Code Card / Interactive Developer Badge (Right Column) */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Ambient Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">

                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <Terminal size={12} className="text-indigo-400" />
                    <span>darshan.config.ts</span>
                  </div>
                </div>

                {/* Code Snippet Content */}
                <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-2">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Darshan Babariya"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"BE Computer Engineering"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">college:</span> <span className="text-emerald-300">"VGEC (7th Sem)"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">stack:</span> [<span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"MERN"</span>, <span className="text-amber-300">"TypeScript"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">"Ready for impact"</span>,</p>
                  <p>&#125;;</p>
                </div>

                {/* Highlights Card footer */}
                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <Code2 size={16} className="text-indigo-400 shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Clean Code</p>
                      <p className="text-[10px] text-muted-foreground">Modular & Typed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Production Ready</p>
                      <p className="text-[10px] text-muted-foreground">Optimized Builds</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Hero Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {heroStats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-secondary/20 border border-border/50 backdrop-blur-xs text-center md:text-left">
              <p className="text-3xl lg:text-4xl font-extrabold gradient-text mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
      >
        <a href="#about" className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          Scroll Down
        </a>
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}