"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundGrid from "./BackgroundGrid"; // Keep your grid, it adds great texture

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Enhancements */}
            <BackgroundGrid />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />

            {/* Radial "Spotlight" Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-8 text-xs font-medium backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        Open to Remote Opportunities
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]"
                    >
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-600">
                            Future of Web
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed px-4"
                    >
                        I'm <span className="text-foreground font-semibold">Darshan Babariya</span>, a Full Stack Engineer
                        at VGEC. I specialize in crafting high-performance Next.js applications with
                        MERN architecture and precision UI.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6"
                    >
                        <Button size="lg" className="rounded-full h-12 px-8 text-base group overflow-hidden relative" asChild>
                            <a href="#projects">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base backdrop-blur-sm group" asChild>
                            <a href="/Darshan_Babariya_Resume.pdf" download>
                                <Download size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                                Get Resume
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Proof / Trusted Tech */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mt-20 flex flex-col items-center gap-4"
                    >
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                            Expertise In
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
                            <span className="font-bold text-xl tracking-tighter">NEXT.JS</span>
                            <span className="font-bold text-xl tracking-tighter">REACT</span>
                            <span className="font-bold text-xl tracking-tighter">MONGODB</span>
                            <span className="font-bold text-xl tracking-tighter">TAILWIND</span>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-5 h-8 border-2 border-muted rounded-full flex justify-center p-1">
                    <div className="w-1 h-1 bg-muted rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}