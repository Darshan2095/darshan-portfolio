"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glow Orb */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full top-[-100px] left-[20%]"
            />

        </div>
    );
}