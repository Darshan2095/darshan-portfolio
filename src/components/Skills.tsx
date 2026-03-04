"use client";

import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-3"
                    >
                        <Terminal size={14} />
                        Technical Stack
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter"
                    >
                        My <span className="text-muted-foreground">Skillset.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SkillCard
                                category={skill.category}
                                items={skill.items}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}