"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
    level: number;
};

type Props = {
    category: string;
    items: Skill[];
};

export default function SkillCard({ category, items }: Props) {
    return (
        <div className="group h-full p-8 rounded-[2.5rem] border border-border bg-secondary/10 backdrop-blur-sm transition-all duration-500 hover:bg-secondary/20 hover:border-primary/30">
            <h3 className="text-xl font-bold mb-8 tracking-tight group-hover:text-primary transition-colors">
                {category}
            </h3>

            <div className="space-y-6">
                {items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div key={skill.name} className="group/item">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-background border border-border group-hover/item:border-primary/40 transition-colors">
                                        <Icon size={16} className="text-muted-foreground group-hover/item:text-primary transition-colors" />
                                    </div>
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>

                                <span className="text-[10px] font-bold text-muted-foreground tabular-nums bg-secondary px-2 py-0.5 rounded">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Enhanced Progress Bar */}
                            <div className="relative w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="absolute h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}