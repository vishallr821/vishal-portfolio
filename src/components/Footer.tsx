"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Certifications", href: "/certifications" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: personalInfo.github,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: personalInfo.linkedin,
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ═══════  TOP ROW (3 Columns)  ═══════ */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Left Column: Logo & Tagline */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              Vishal L.R<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="flex flex-col md:items-center">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/60 transition-colors hover:text-accent-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col md:items-end">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════  DIVIDER  ═══════ */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* ═══════  BOTTOM ROW  ═══════ */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Built with{" "}
            <span className="font-semibold text-white/70">Next.js</span> &amp;{" "}
            <span className="font-semibold text-white/70">Tailwind CSS</span> 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
