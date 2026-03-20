"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen } from "lucide-react";
import { skills } from "@/data/portfolio";

// ─── Helpers ─────────────────────────────────────────────
const getBadgeStyles = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100";
    case "Intermediate":
      return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
    case "Beginner":
    default:
      return "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100";
  }
};

const getDotColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-emerald-500";
    case "Intermediate":
      return "bg-blue-500";
    case "Beginner":
    default:
      return "bg-slate-400";
  }
};

// ─── Animation Variants ──────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

// ─── Page ────────────────────────────────────────────────
export default function SkillsPage() {
  return (
    <PageWrapper className="!max-w-none !px-0 !py-0">
      {/* ═══════  §1 HEADER & LEGEND  ═══════ */}
      <section className="bg-surface px-6 pt-14 pb-8 md:pt-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with to build intelligent systems."
          />

          {/* Proficiency Legend */}
          <div className="flex items-center gap-4 rounded-xl border border-surface-dark bg-white px-5 py-3 shadow-sm">
            <span className="text-sm font-semibold text-text-muted">
              Proficiency:
            </span>
            <div className="flex items-center gap-3 text-xs font-medium text-text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Advanced
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> Intermediate
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-400" /> Beginner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════  §2 SKILLS GRID  ═══════ */}
      <section className="bg-white px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-surface-dark bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg sm:p-8"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-3xl transition-colors group-hover:bg-accent group-hover:text-white">
                  {category.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">
                  {category.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 flex-wrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${getBadgeStyles(
                      skill.level
                    )}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${getDotColor(
                        skill.level
                      )}`}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════  §4 CURRENTLY LEARNING BANNER  ═══════ */}
      <section className="bg-accent px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                <BookOpen size={20} />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                Currently Learning
              </h2>
            </div>
            
            <p className="max-w-2xl text-accent-light text-white/80">
              I believe in continuous growth. Here are the technologies and concepts I am currently exploring to expand my skill set.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["LLM Fine-tuning", "MLOps", "Kubernetes", "Next.js 14+"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm border border-white/20"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
