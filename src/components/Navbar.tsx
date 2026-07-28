"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-4 md:px-6",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "container max-w-5xl mx-auto flex items-center justify-between h-14 px-6 rounded-full transition-all duration-300 border",
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-white/15 shadow-xl shadow-indigo-500/5"
            : "bg-slate-950/40 backdrop-blur-md border-white/10"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1.5">
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Darshan<span className="text-indigo-400 group-hover:text-cyan-400 transition-colors">.dev</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center gap-1 mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <Button asChild size="sm" className="rounded-full px-5 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/25 group">
            <a href="/Darshan_Babariya_Resume.pdf" download className="flex items-center gap-1.5">
              <span>Resume</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[101] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-slate-900 border-l border-white/10 z-[102] md:hidden p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <span className="font-extrabold text-lg text-foreground">Navigation</span>
                  <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-muted-foreground hover:text-foreground">
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-bold text-slate-300 hover:text-indigo-400 transition-colors block py-1"
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Button asChild className="w-full rounded-2xl py-6 flex items-center justify-center gap-2 font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                  <a href="/Darshan_Babariya_Resume.pdf" download>
                    <FileText size={18} />
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}