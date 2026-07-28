"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud, Cpu, Layout, Globe, Sparkles, GraduationCap, Zap, CheckCircle2 } from "lucide-react";

const corePillars = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    description: "Architecting slick user interfaces using Next.js App Router, React 19, Tailwind CSS, Framer Motion, and TypeScript.",
    color: "from-indigo-500/20 via-cyan-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/40",
  },
  {
    icon: Server,
    title: "Backend & REST APIs",
    description: "Building resilient backends with Node.js, Express, RESTful microservices, JWT authentication, and role-based security.",
    color: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-purple-500/40",
  },
  {
    icon: Database,
    title: "Database Modeling",
    description: "Designing optimized MongoDB and PostgreSQL schemas with Prisma ORM, indexing, and aggregate query tuning.",
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-amber-500/40",
  },
  {
    icon: Cloud,
    title: "DevOps & AI Workflows",
    description: "Integrating Gemini AI APIs, UploadThing file pipelines, Vercel deployments, Docker basics, and SEO optimization.",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/40",
  },
];

const highlights = [
  "Strong foundation in Data Structures & Computer Science principles",
  "Experience delivering production MERN apps like RentEase & HireAI",
  "Focus on clean code, reusable component libraries, and performance",
  "Adept at rapid prototyping and full lifecycle web development",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-10 md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Cpu size={14} />
              About Me
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Engineering speed, precision, and <br />
              <span className="gradient-text">exceptional user experience.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-muted-foreground text-base leading-relaxed"
          >
            I am a Computer Engineering student at <span className="text-foreground font-bold">Vishwakarma Government Engineering College (VGEC)</span>.
            I bridge creative UI engineering with scalable backend logic to create impactful digital products.
          </motion.div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative p-7 rounded-3xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 ${pillar.borderColor} overflow-hidden flex flex-col justify-between`}
              >
                {/* Ambient Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-2xl bg-background border border-border group-hover:border-indigo-500/40 group-hover:scale-110 transition-all shadow-sm">
                    <Icon className="text-indigo-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-foreground transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground group-hover:text-indigo-300 transition-colors">
                  <span>Specialization</span>
                  <Sparkles size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Context & Core Highlights */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* VGEC College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl border border-border bg-secondary/10 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-6">
                <Globe size={14} /> Education Background
              </div>
              <h3 className="text-2xl font-bold mb-2">B.E. Computer Engineering</h3>
              <p className="text-sm font-semibold text-indigo-400 mb-4">
                Vishwakarma Government Engineering College (VGEC)
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                7th Semester student with strong academic fundamentals in algorithms, software engineering, and web technology stack.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {["Next.js 16", "MERN Stack", "TypeScript", "Prisma", "PostgreSQL", "Gemini AI"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-background text-[11px] font-bold tracking-wide border border-border text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 p-8 rounded-3xl border border-border bg-secondary/10 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6">
                <Zap size={14} /> Key Highlights
              </div>
              <h3 className="text-2xl font-bold mb-6">What I Bring to the Table</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-2xl bg-background/50 border border-border/50">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground/90 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              Continuously learning advanced architecture, system design, and AI applications.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}