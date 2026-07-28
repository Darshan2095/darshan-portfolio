"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, ExternalLink, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Developer Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/Darshan2095", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/darshanbabariya/", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:darshanb2390@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 mt-24 bg-slate-950/80 backdrop-blur-md text-slate-300">
      {/* Top glowing line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-foreground inline-block">
              Darshan<span className="text-indigo-400">.dev</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              Full Stack Engineer & Computer Engineering Student @ VGEC. Specializing in high-performance Next.js apps, MERN architecture, and modern AI integrations.
            </p>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for full-time & remote engineering roles
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    {link.name}
                    <ExternalLink size={10} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-5">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-400 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground">
              Feel free to reach out anytime!
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-3">
            <p>© {new Date().getFullYear()} Darshan Babariya</p>
            <span className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Globe size={13} className="text-indigo-400" />
              <span>Gujarat, India</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-all"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-indigo-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}