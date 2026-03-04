"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isPending, setIsPending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);

        // Mimicking API call
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setSent(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSent(false), 5000);
        }
        setIsPending(false);
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <MessageSquare size={14} />
                            Get in Touch
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                            Let's build something <br />
                            <span className="text-muted-foreground">extraordinary.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
                            Whether you have a question about my projects at **VGEC**, a freelance inquiry, or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Email</p>
                                    <a href="mailto:darshanb2390@gmail.com" className="text-foreground hover:text-primary transition-colors">
                                        darshanb2390@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="h-12 w-12 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Location</p>
                                    <p className="text-foreground">Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-10">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/Darshan2095" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/darshanbabariya/" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="h-10 w-10 rounded-xl bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-purple-500/10 blur-2xl rounded-[3rem] -z-10" />

                        <form
                            onSubmit={handleSubmit}
                            className="p-8 md:p-10 rounded-[2.5rem] border border-border bg-background/60 backdrop-blur-xl shadow-2xl space-y-5"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full p-4 rounded-2xl bg-secondary/30 border border-border focus:border-primary/50 focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/50"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full p-4 rounded-2xl bg-secondary/30 border border-border focus:border-primary/50 focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/50"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full p-4 rounded-2xl bg-secondary/30 border border-border focus:border-primary/50 focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full h-14 rounded-2xl text-base font-bold group overflow-hidden relative"
                            >
                                <span className={cn(
                                    "flex items-center justify-center gap-2 transition-all duration-300",
                                    sent ? "-translate-y-10" : "translate-y-0"
                                )}>
                                    {isPending ? "Sending..." : "Send Message"}
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>

                                <span className={cn(
                                    "absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300",
                                    sent ? "translate-y-0" : "translate-y-10"
                                )}>
                                    Message Sent!
                                </span>
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}