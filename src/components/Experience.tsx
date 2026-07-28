"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Unified Mentor",
    duration: "May 2026 – Jul 2026",
    location: "Remote / Internship",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Role Auth"],
    description: [
      "Engineered RentEase and PropertyPulse platforms to streamline real-world property rental workflows.",
      "Architected secure RESTful APIs, JWT authentication, role-based access control, and scalable MongoDB schemas.",
      "Diagnosed and resolved critical backend integration issues, delivering bug-free end-to-end user journeys.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Teachnook",
    duration: "Mar 2024 – May 2024",
    location: "Remote / Internship",
    skills: ["Next.js", "Node.js", "MongoDB", "System Architecture", "Code Reviews"],
    description: [
      "Engineered scalable server APIs and optimized MongoDB database schemas for high performance.",
      "Collaborated on production-level features using the MERN stack with strict code quality guidelines.",
      "Participated in active code reviews, significantly reducing bug turnaround time and code complexity.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-background overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Briefcase size={14} /> Career Milestones
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            Hands-on software development experience creating production features, backend architectures, and full-stack web applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-400 z-20 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.8)]">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[46%] pl-10 md:pl-0">
                  <div className="group relative p-7 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:bg-slate-900/90 hover:border-indigo-500/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10">

                    {/* Header Info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold mb-1 text-foreground group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-indigo-300 text-sm font-semibold mb-5">
                      <Building2 size={16} className="text-indigo-400" />
                      <span>{exp.company}</span>
                    </div>

                    {/* Description Bullet Points */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 size={16} className="mt-0.5 text-emerald-400 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-background/80 border border-border text-[11px] font-bold text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Spacer for Desktop symmetry */}
                <div className="hidden md:block w-[46%]" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}