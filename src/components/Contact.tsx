"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, MessageSquare, Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isPending, setIsPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("darshanb2390@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                <MessageSquare size={14} /> Get In Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Let's build something <br />
                <span className="gradient-text">extraordinary together.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                Whether you have an opportunity, a freelance project, a question about my work at <span className="text-foreground font-semibold">VGEC</span>, or just want to connect, feel free to drop a message!
              </p>
            </div>

            {/* Contact Details Card Stack */}
            <div className="space-y-4">
              
              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex items-center justify-between group hover:border-indigo-500/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Direct Email</p>
                    <a href="mailto:darshanb2390@gmail.com" className="text-sm font-semibold text-foreground hover:text-indigo-400 transition-colors">
                      darshanb2390@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10 hover:bg-indigo-500/20 text-xs font-bold text-slate-300 hover:text-indigo-300 transition-all flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-foreground">Gujarat, India</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mr-2">Connect:</span>
              {[
                { icon: <Github size={18} />, href: "https://github.com/Darshan2095", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/darshanbabariya/", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:border-indigo-500 hover:text-indigo-400 hover:scale-110 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[2.5rem] blur-xl opacity-20" />

            <form
              onSubmit={handleSubmit}
              className="relative p-7 sm:p-9 rounded-[2rem] border border-white/15 bg-slate-900/80 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                <Sparkles size={16} className="text-indigo-400" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-950/60 border border-white/10 focus:border-indigo-500 focus:ring-0 outline-none text-xs transition-all placeholder:text-muted-foreground/50 text-foreground"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-950/60 border border-white/10 focus:border-indigo-500 focus:ring-0 outline-none text-xs transition-all placeholder:text-muted-foreground/50 text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-950/60 border border-white/10 focus:border-indigo-500 focus:ring-0 outline-none text-xs transition-all placeholder:text-muted-foreground/50 text-foreground resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-12 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 transition-all group relative overflow-hidden"
              >
                <span className={cn(
                  "flex items-center justify-center gap-2 transition-transform duration-300",
                  sent ? "-translate-y-10" : "translate-y-0"
                )}>
                  {isPending ? "Sending Message..." : "Send Message"}
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>

                <span className={cn(
                  "absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 text-emerald-300 font-bold",
                  sent ? "translate-y-0" : "translate-y-10"
                )}>
                  Message Sent Successfully! <Check size={18} />
                </span>
              </Button>
            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}