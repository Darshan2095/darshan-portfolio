"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function BackgroundGrid() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Use scroll for subtle parallax
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => setIsMounted(true), []);

  // Generate particles client-side to avoid hydration mismatch
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() > 0.5 ? "h-1 w-1" : "h-2 w-2",
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  if (!isMounted) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background">
      {/* 1. Base Mesh Gradients - Enhanced depth */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.15),transparent_50%),radial-gradient(circle_at_80%_70%,hsl(var(--primary)/0.1),transparent_50%)]"
        />
      </div>

      {/* 2. Floating Blobs - Better blending and organic paths */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[100px] mix-blend-screen"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* 3. The Grid - Infinite "flowing" movement */}
      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)/0.2) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)/0.2) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          perspective: "1000px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 4. Particles - Interactive and layered */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full bg-primary/40 shadow-[0_0_12px_hsl(var(--primary)/0.4)] ${p.size}`}
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 5. Vignette - To draw eyes to the center content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background))_100%)]" />
    </div>
  );
}