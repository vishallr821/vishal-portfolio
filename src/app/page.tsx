"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

// ─── Roles for the animated ticker ───────────────────────
const roles = ["AI Engineer", "Full-Stack Developer", "LLM Specialist", "Award-Winning Developer"];

// ─── Stagger container helper ────────────────────────────
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (dValue: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: dValue },
  }),
};

const profileFloating: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, -12, 0],
    transition: {
      opacity: { duration: 0.8, delay: 0.4 },
      scale: { duration: 0.8, delay: 0.4 },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

const statsBarFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
  },
};

// ─── Hero Page ───────────────────────────────────────────
export default function HomePage() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIdx((prev) => (prev + 1) % roles.length),
      2800
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ═══════════════  HERO  ═══════════════ */}
      <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-surface">
        {/* ── Animated background mesh ─────────── */}
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-accent-light/10 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_1s]" />
          <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-accent/5 blur-[80px] animate-[pulse_12s_ease-in-out_infinite_2s]" />

          {/* Faint grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* ── Content ──────────────────────────── */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-16 lg:px-8 lg:py-0">
          {/* ── Left column (3/5) ──────────────── */}
          <motion.div
            className="flex flex-col justify-center lg:col-span-3"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-1.5 text-sm font-semibold text-accent shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
                🏆 5+ National Level Technical Awards | Open to Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={0.15}
              className="mt-8 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-primary"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Role ticker */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-4 flex items-center gap-2 text-lg font-semibold text-text-secondary md:text-xl"
            >
              <span className="h-px w-6 bg-accent opacity-50" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIdx]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="text-accent"
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Sub-heading */}
            <motion.p
              variants={fadeUp}
              custom={0.45}
              className="mt-6 text-base font-medium text-text-secondary md:text-lg"
            >
              B.Tech — Artificial Intelligence &amp; Data Science |{" "}
              {personalInfo.college}
            </motion.p>

            {/* Tagline paragraph */}
            <motion.p
              variants={fadeUp}
              custom={0.6}
              className="mt-4 max-w-xl text-base leading-relaxed text-text-muted md:text-[17px]"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              custom={0.75}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2.5 rounded-full border border-surface-dark bg-white shadow-sm px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download Resume
              </Link>
            </motion.div>

            {/* Social row */}
            <motion.div
              variants={fadeUp}
              custom={0.9}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center rounded-full border border-surface-dark bg-white h-11 w-11 text-text-muted text-lg shadow-sm transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center rounded-full border border-surface-dark bg-white h-11 w-11 text-text-muted text-lg shadow-sm transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
              >
                <FaLinkedin />
              </a>
              <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-text-muted/60">
                Let&apos;s connect
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right column (2/5) ── Profile Photo ── */}
          <div className="hidden items-center justify-center lg:col-span-2 lg:flex">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={profileFloating}
              className="relative"
            >
              {/* Photo Container */}
              <div className="relative h-80 w-80 overflow-hidden rounded-3xl shadow-2xl ring-8 ring-white/50 backdrop-blur-sm">
                <Image
                  src="/images/profile.jpg"
                  alt="Vishal L.R"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Decorative elements around photo */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-accent/10 blur-2xl" />
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-accent-light/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════  STATS BAR  ═══════════════ */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={statsBarFade}
        className="relative z-10 border-t border-surface-dark bg-white shadow-sm"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-surface-dark px-6 lg:px-8">
          {[
            { value: "6+", label: "Projects Completed" },
            { value: "5+", label: "Technical Awards" },
            { value: "8.45", label: "CGPA" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 py-7 md:py-9 transition-colors hover:bg-surface"
            >
              <span className="font-serif text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary md:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
