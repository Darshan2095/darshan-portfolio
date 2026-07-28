"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only activate cursor on devices that support hover (desktops)
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle aura */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full border border-indigo-400/50 bg-indigo-500/20 backdrop-blur-xs pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 2.2 : 1,
          borderColor: isPointer ? "rgba(34, 211, 238, 0.8)" : "rgba(129, 140, 248, 0.5)",
        }}
        transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
}
