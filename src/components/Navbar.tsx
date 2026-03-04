"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Standard shadcn utility

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Change navbar style on scroll
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out px-4 md:px-0",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <nav
                className={cn(
                    "container max-w-5xl mx-auto flex items-center justify-between h-14 px-6 rounded-full transition-all duration-300 border",
                    scrolled
                        ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-1.5">
                    <span className="text-xl font-bold tracking-tighter">
                        Darshan<span className="text-primary group-hover:animate-pulse">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-1 mr-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                {link.name}
                                <motion.span
                                    className="absolute bottom-1 left-4 right-4 h-[1px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </Link>
                        ))}
                    </div>

                    <Button asChild size="sm" className="rounded-full px-5 group">
                        <a href="/Darshan_Babariya_Resume.pdf" download className="flex items-center gap-2">
                            Resume
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[-1] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border z-[101] md:hidden p-8 flex flex-col"
                        >
                            <div className="flex flex-col gap-6 mt-12">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-semibold hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Button asChild className="w-full rounded-xl py-6 flex items-center gap-2">
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