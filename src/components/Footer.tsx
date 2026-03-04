"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, ExternalLink, Globe } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const socials = [
    { icon: <Github size={20} />, href: "https://github.com/Darshan2095", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:darshanb2390@gmail.com", label: "Email" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-border mt-32 bg-background/50 backdrop-blur-sm">
            {/* Decorative Gradient Flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand & Status */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="text-xl font-bold tracking-tighter">
                            Darshan<span className="text-primary">.</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                            Full Stack Engineer specializing in scalable Next.js applications and modern MERN architecture.
                            Currently exploring the intersection of design and performance.
                        </p>
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-[12px] font-medium text-foreground">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for new opportunities
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground/80">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                                    >
                                        {link.name}
                                        <ExternalLink size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground/80">
                            Connect
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <p>© {new Date().getFullYear()} Darshan Babariya</p>
                        <span className="h-4 w-px bg-border hidden md:block" />
                        <div className="flex items-center gap-1">
                            <Globe size={12} />
                            <span>Built in Gujarat, India</span>
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border hover:border-primary/50 text-xs font-medium transition-all"
                    >
                        <span>Back to top</span>
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}