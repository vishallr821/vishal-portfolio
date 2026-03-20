"use client";

import { motion, type Variants } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { personalInfo, education, strengths } from "@/data/portfolio";
import {
  MapPin,
  GraduationCap,
  School,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Calendar,
} from "lucide-react";

// ─── Animation helpers ──────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (dValue: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: dValue },
  }),
};

// ─── Data ───────────────────────────────────────────────
const keyFacts = [
  { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location },
  {
    icon: <GraduationCap size={18} />,
    label: "Degree",
    value: personalInfo.degree,
  },
  { icon: <School size={18} />, label: "College", value: personalInfo.college },
  {
    icon: <Briefcase size={18} />,
    label: "Status",
    value: personalInfo.openTo,
  },
  { icon: <Mail size={18} />, label: "Email", value: personalInfo.email },
];

// ─── Page ───────────────────────────────────────────────
export default function AboutPage() {
  const initials = personalInfo.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <PageWrapper className="!px-0 !py-0 !max-w-none">
      {/* ══════════════  §1 HEADER  ══════════════ */}
      <section className="bg-surface px-6 pt-14 pb-4 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="About Me"
            subtitle="A passionate AI & DS student building real-world intelligent systems."
          />
        </div>
      </section>

      {/* ══════════════  §2 PROFILE OVERVIEW  ══════════════ */}
      <section className="bg-white px-6 py-14 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5">
          {/* ── Left: avatar + socials ─────────── */}
          <motion.div
            className="flex flex-col items-center gap-6 md:col-span-2 md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            {/* Profile Photo */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-xl ring-4 ring-accent/10"
            >
              <Image
                src="/images/profile.jpg"
                alt="Vishal L.R"
                width={320}
                height={320}
                className="rounded-2xl object-cover shadow-lg"
                priority
              />
            </motion.div>

            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-primary">
                {personalInfo.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {personalInfo.degree}
              </p>
              <p className="text-sm text-text-muted">{personalInfo.college}</p>
            </div>

            {/* Social icon buttons */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-dark text-text-secondary transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-dark text-text-secondary transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-dark text-text-secondary transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* ── Right: bio + key facts ─────────── */}
          <motion.div
            className="md:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.15}
          >
            <p className="text-base leading-relaxed text-text-secondary md:text-[17px] whitespace-pre-line">
              {personalInfo.bio}
            </p>

            {/* Key facts */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {keyFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={0.25 + i * 0.08}
                  className="flex items-start gap-3 rounded-xl border border-surface-dark bg-surface p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-primary">
                      {fact.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════  §3 EDUCATION TIMELINE  ══════════════ */}
      <section className="bg-surface px-6 py-14 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Education Timeline"
            subtitle="My academic background and milestones."
          />

          <div className="relative ml-4 border-l-2 border-accent/20 pl-8 md:ml-8">
            {education.map((item, i) => (
              <motion.div
                key={item.duration}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.12}
                className="relative mb-10 last:mb-0"
              >
                {/* Dot on timeline */}
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-white md:-left-[45px]">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                {/* Year badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Calendar size={12} />
                  {item.duration}
                </span>

                <h3 className="mt-3 font-serif text-lg font-bold text-primary">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {item.institution} — {item.location}
                </p>
                <p className="mt-2 text-sm font-semibold text-accent">
                  {item.grade}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════  §4 STRENGTHS  ══════════════ */}
      <section className="bg-white px-6 py-14 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Core Strengths"
            subtitle="Key areas of expertise and value I bring."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.08}
                className="flex items-start gap-3 rounded-2xl border border-surface-dark bg-surface p-5 shadow-sm transition-all hover:border-accent/20 hover:shadow-md"
              >
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent text-accent" />
                <span className="text-sm font-medium text-primary leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
