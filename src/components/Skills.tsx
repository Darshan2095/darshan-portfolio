"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { Terminal, Search } from "lucide-react";

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkillCategories = skills.map((category) => {
    if (!searchQuery.trim()) return category;
    const matchingItems = category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return {
      ...category,
      items: matchingItems,
    };
  }).filter((category) => category.items.length > 0);

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-background">
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
            >
              <Terminal size={14} /> Technical Stack
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Skillset & <span className="gradient-text">Proficiencies</span>
            </motion.h2>
          </div>

          {/* Interactive Skill Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full md:w-72"
          >
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skill (e.g. Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-secondary/30 border border-border focus:border-indigo-500/50 focus:ring-0 outline-none text-xs transition-all"
            />
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkillCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSkillCategories.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillCard
                  category={skillGroup.category}
                  description={skillGroup.description}
                  items={skillGroup.items}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 p-8 rounded-3xl border border-dashed border-border bg-secondary/10 text-muted-foreground text-sm">
            No matching technologies found for "{searchQuery}". Try another search term!
          </div>
        )}

      </div>
    </section>
  );
}