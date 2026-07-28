"use client";

import { motion } from "framer-motion";
import { SkillItem } from "@/data/skills";
import { Sparkles } from "lucide-react";

interface Props {
  category: string;
  description?: string;
  items: SkillItem[];
}

export default function SkillCard({ category, description, items }: Props) {
  return (
    <div className="group h-full p-7 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-indigo-400 transition-colors">
            {category}
          </h3>
          <Sparkles size={16} className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {description && (
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <div className="space-y-5">
          {items.map((skill) => {
            const Icon = skill.icon;

            return (
              <div key={skill.name} className="group/item">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/10 group-hover/item:border-indigo-500/50 group-hover/item:bg-indigo-500/10 transition-all shadow-sm">
                      <Icon size={18} className="text-muted-foreground group-hover/item:text-indigo-400 transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90">{skill.name}</span>
                  </div>

                  {skill.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Animated Progress Bar */}
                <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}