"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Award, Calendar, Hash } from "lucide-react";
import { certifications } from "@/data/portfolio";

// ─── Animation Helpers ───────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

// ─── Badge Colors ─────────────────────────────────────────
const categoryBadgeColors: Record<string, string> = {
  "AI & ML": "bg-blue-50 text-blue-600 border-blue-200",
  Database: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Data Science": "bg-orange-50 text-orange-600 border-orange-200",
};

// ─── Page ────────────────────────────────────────────────
export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI & ML", "Database", "Data Science"];

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <PageWrapper className="!max-w-none !px-0 !py-0">
      {/* ═══════  §1 HEADER  ═══════ */}
      <section className="bg-surface px-6 pt-14 pb-4 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Certifications & Learning"
            subtitle="Verified credentials, courses, and structured learning paths."
          />
        </div>
      </section>

      {/* ═══════  §2 FILTER BAR  ═══════ */}
      <section className="sticky top-[73px] z-30 border-b border-surface-dark bg-white/80 px-6 backdrop-blur-lg lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "border border-surface-dark bg-white text-text-secondary hover:border-accent/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ═══════  §3 CERTIFICATIONS GRID  ═══════ */}
      <section className="bg-white px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {filteredCerts.map((cert, i) => {
                const color = cert.issuerColor || "#2563EB";
                const initials = cert.issuerShort.charAt(0).toUpperCase();

                const isMongoDB = cert.issuerShort === "MongoDB";
                const avatarBg = isMongoDB ? color : `${color}1A`;
                const avatarText = isMongoDB ? "#001E2B" : color;

                const hasValidUrl =
                  Boolean(cert.credentialUrl) && cert.credentialUrl !== "#";

                const badgeClass =
                  categoryBadgeColors[cert.category as keyof typeof categoryBadgeColors] ||
                  "bg-gray-50 text-gray-600 border-gray-200";

                return (
                  <motion.article
                    key={cert.id}
                    layout
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.96 }}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-dark bg-white shadow-sm transition-shadow hover:shadow-xl"
                  >
                    {/* Top Colored Bar */}
                    <div
                      className="h-1.5 w-full transition-opacity group-hover:opacity-90"
                      style={{ backgroundColor: color }}
                    />

                    <div className="flex flex-1 flex-col p-6">
                      {/* Issuer & Category Row */}
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold shadow-sm ring-1 ring-inset ring-black/5"
                            style={{ backgroundColor: avatarBg, color: avatarText }}
                          >
                            {initials}
                          </div>
                          <div>
                            <p
                              className="text-sm font-bold tracking-wide"
                              style={{ color: color }}
                            >
                              {cert.issuerShort}
                            </p>
                            <span
                              className={`mt-1 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}
                            >
                              {cert.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title & Date */}
                      <h3
                        className="mb-3 font-serif text-lg font-bold leading-snug text-primary line-clamp-2"
                        title={cert.title}
                      >
                        {cert.title}
                      </h3>

                      <div className="mb-6 flex flex-1 flex-col gap-2">
                        <p className="flex items-center gap-1.5 text-xs text-text-muted">
                          <Calendar size={13} />
                          {cert.date}
                        </p>
                        {cert.credentialId && (
                          <p className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                            <Hash size={13} />
                            ID: {cert.credentialId}
                          </p>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto border-t border-surface-dark pt-5">
                        {hasValidUrl ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent"
                          >
                            <Award size={16} />
                            View Certificate
                          </a>
                        ) : (
                          <button
                            disabled
                            title="Link not available"
                            className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-surface-dark/50 px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors hover:bg-surface-dark/60"
                          >
                            <Award size={16} />
                            Link Unavailable
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredCerts.length === 0 && (
            <p className="py-20 text-center text-text-muted">
              No certificates found in this category.
            </p>
          )}

          {/* ═══════  §4 MONGODB LEARNING PATH BANNER  ═══════ */}
          {(activeCategory === "All" || activeCategory === "Database") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 overflow-hidden rounded-2xl border border-[#00ED64]/30 bg-[#001E2B] shadow-lg md:mt-16"
            >
              <div className="relative p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
                {/* Decoration blob */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00ED64]/10 blur-3xl mix-blend-screen" />

                <div className="relative z-10 md:w-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00ED64]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00ED64]">
                    <Award size={12} /> Specialization
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                    MongoDB with Python <br />
                    <span className="text-[#00ED64]">Learning Path</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#00ED64]/70">
                    Completed a full learning path covering MongoDB basics through
                    advanced aggregation in Python.
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/50">
                    <Calendar size={14} /> June – July 2025
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2 md:mt-0 md:w-1/2 md:justify-end">
                  {certifications
                    .filter((c) => c.issuerShort === "MongoDB")
                    .map((cert) => (
                      <span
                        key={cert.id}
                        className="inline-flex items-center rounded-lg border border-[#00ED64]/20 bg-[#00ED64]/5 px-3 py-1.5 text-xs font-medium text-white/90 shadow-sm"
                      >
                        {cert.title}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════  §5 STATS SUMMARY ROW  ═══════ */}
      <section className="bg-surface px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
          >
            <div className="flex flex-col items-center justify-center rounded-2xl border border-surface-dark bg-white p-6 text-center shadow-sm">
              <span className="font-serif text-4xl font-bold text-accent">
                10
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-text-secondary">
                Total Certificates
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-surface-dark bg-white p-6 text-center shadow-sm">
              <span className="font-serif text-xl font-bold text-primary">
                Infosys, MongoDB, Simplilearn
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-text-secondary">
                Issuers
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-surface-dark bg-white p-6 text-center shadow-sm">
              <span className="font-serif text-sm font-bold text-primary md:text-base">
                AI &amp; ML, Database, Data Science
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-text-secondary">
                Categories
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-surface-dark bg-white p-6 text-center shadow-sm">
              <span className="font-serif text-3xl font-bold text-primary">
                Feb 2026
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-text-secondary">
                Latest
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
