"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { Activity, Github, Code2, FolderGit2, Calendar } from "lucide-react";

const statsMetrics = [
  { icon: Code2, label: "Projects Completed", value: "10+", color: "text-indigo-400" },
  { icon: FolderGit2, label: "GitHub Repositories", value: "20+", color: "text-cyan-400" },
  { icon: Activity, label: "Technologies Used", value: "15+", color: "text-purple-400" },
  { icon: Calendar, label: "Years Coding", value: "3+", color: "text-emerald-400" },
];

export default function DeveloperStats() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="stats" className="relative py-24 bg-background overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Activity size={14} /> Open Source & Activity
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            Consistent commitment to open source, project commits, and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* GitHub Activity Heatmap Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-7 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between overflow-x-auto shadow-2xl min-h-[220px]"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Github size={20} className="text-indigo-400" />
                <span className="text-sm font-bold text-foreground">@Darshan2095 Activity Heatmap</span>
              </div>
              <a
                href="https://github.com/Darshan2095"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-indigo-400 hover:text-cyan-300 transition-colors"
              >
                View Profile &rarr;
              </a>
            </div>

            <div className="flex justify-center overflow-x-auto py-2 min-h-[140px] items-center">
              {isMounted ? (
                <GitHubCalendar
                  username="Darshan2095"
                  colorScheme="dark"
                  blockSize={13}
                  blockMargin={5}
                  fontSize={12}
                />
              ) : (
                <div className="w-full h-32 animate-pulse bg-slate-800/40 rounded-2xl flex items-center justify-center text-xs text-muted-foreground font-mono">
                  Loading contribution graph...
                </div>
              )}
            </div>
          </motion.div>

          {/* Quick Metrics Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {statsMetrics.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10">
                      <Icon size={20} className={stat.color} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">{stat.label}</p>
                      <p className="text-2xl font-extrabold text-foreground tracking-tight">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}