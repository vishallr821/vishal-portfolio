"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Github, ExternalLink, Trophy } from "lucide-react";
import { projects, hackathons } from "@/data/portfolio";

// ─── Filter categories dynamically ───────────────────────
// Extract unique categories, ensuring "All" is first
const availableCategories = Array.from(new Set(projects.map((p) => p.category)));
const filters = ["All", ...availableCategories];

// ─── Dynamic Category Styling ───────────────────────────
// Assign a beautiful pre-set color theme to domains as they appear
const colorPalette = [
  { bg: "bg-blue-500", badge: "bg-blue-50 text-blue-600 border-blue-200" },
  { bg: "bg-purple-500", badge: "bg-purple-50 text-purple-600 border-purple-200" },
  { bg: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { bg: "bg-orange-500", badge: "bg-orange-50 text-orange-600 border-orange-200" },
  { bg: "bg-rose-500", badge: "bg-rose-50 text-rose-600 border-rose-200" },
  { bg: "bg-teal-500", badge: "bg-teal-50 text-teal-600 border-teal-200" },
  { bg: "bg-indigo-500", badge: "bg-indigo-50 text-indigo-600 border-indigo-200" },
];

const categoryDict = availableCategories.reduce((acc, cat, idx) => {
  acc[cat] = colorPalette[idx % colorPalette.length];
  return acc;
}, {} as Record<string, typeof colorPalette[0]>);

// ─── Animation helpers ──────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: d },
  }),
};

// ─── Page ───────────────────────────────────────────────
export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <PageWrapper className="!px-0 !py-0 !max-w-none">
      {/* ═══════  §1 HEADER  ═══════ */}
      <section className="bg-surface px-6 pt-14 pb-4 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Projects & Achievements"
            subtitle="Real-world ML/AI projects and competitive achievements."
          />
        </div>
      </section>

      {/* ═══════  §2 FILTER BAR  ═══════ */}
      <section className="sticky top-[73px] z-30 border-b border-surface-dark bg-white/80 backdrop-blur-lg px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "border border-surface-dark bg-white text-text-secondary hover:border-accent/30 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ═══════  §3 PROJECT GRID  ═══════ */}
      <section className="bg-white px-6 py-14 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => {
                const colors = categoryDict[project.category] || {
                  bg: "bg-gray-400",
                  badge: "bg-gray-50 text-gray-600 border-gray-200",
                };

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-surface-dark bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    {/* Top accent bar */}
                    <div className={`h-1.5 w-full ${colors.bg}`} />

                    <div className="flex flex-1 flex-col p-6">
                      {/* Category badge */}
                      <span
                        className={`inline-flex w-fit rounded-full border px-3 py-0.5 text-xs font-semibold ${colors.badge}`}
                      >
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="mt-3 font-serif text-xl font-bold text-primary">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="mt-5 flex items-center gap-2 border-t border-surface-dark pt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-surface-dark px-3 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-accent/30 hover:text-accent"
                          >
                            <Github size={14} />
                            Source
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-all hover:bg-accent hover:text-white"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-text-muted">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ═══════  §4 HACKATHON ACHIEVEMENTS  ═══════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary px-6 py-14 md:py-20 lg:px-8">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10 flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/20 text-amber-400">
              <Trophy size={22} />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                Hackathons &amp; Competitions
              </h2>
              <p className="mt-1 text-sm text-white/50">
                Awards, rankings, and competitive highlights.
              </p>
            </div>
          </motion.div>

          {/* Achievement cards */}
          <div className="flex flex-col gap-5">
            {hackathons.map((a, i) => (
              <motion.div
                key={a.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.12}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.1] sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Medal */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                  {a.medal}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-lg font-bold text-white">
                      {a.title}
                    </h3>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/60">
                      {a.year}
                    </span>
                    <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-400">
                      {a.rank}
                    </span>
                  </div>
                  {/* Under Title Project Info */}
                  <p className="mt-1 text-sm font-semibold text-accent-light">
                    Project: {a.project}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {a.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
