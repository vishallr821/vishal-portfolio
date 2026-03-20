"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Download, ExternalLink, GraduationCap, Code2, FolderGit2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <PageWrapper className="!max-w-none !px-0 !py-0">
      {/* ═══════  §1 HEADER & ACTIONS  ═══════ */}
      <section className="bg-surface px-6 pt-14 pb-8 md:pt-20 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Resume"
            subtitle="My complete academic and professional resume."
          />

          {/* Action Buttons (Desktop / Tablet) */}
          <div className="hidden items-center gap-3 sm:flex">
            {/* Place your resume PDF at /public/resume.pdf */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-dark bg-white px-5 py-2.5 text-sm font-semibold text-text-secondary transition-all hover:border-accent/30 hover:text-primary"
            >
              <ExternalLink size={16} />
              Open in New Tab
            </a>
            <a
              href="/resume.pdf"
              download="VISHAL_L_R_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-lg"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* ═══════  §2 PDF VIEWER  ═══════ */}
      <section className="bg-white px-6 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-surface-dark bg-surface shadow-sm"
          >
            {/* Fallback container text behind the iframe */}
            <div className="relative h-[500px] w-full md:h-[800px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-text-muted">
                <p>PDF preview not available on this device.</p>
                <p className="mt-2 text-sm">Please download the resume instead.</p>
              </div>
              
              <iframe
                src="/resume.pdf"
                title="Resume PDF Viewer"
                className="relative z-10 block h-full w-full rounded-2xl"
                // Support styles to hide borders explicitly just in case
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════  §3 RESUME HIGHLIGHTS  ═══════ */}
      <section className="bg-surface px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Resume Highlights"
            subtitle="A quick overview of my background and skills."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 rounded-xl border border-surface-dark bg-white p-6 shadow-sm font-sans"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Education
                </h3>
                <p className="mt-2 text-sm font-medium text-text-secondary">
                  B.Tech AI &amp; Data Science
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {personalInfo.college} | 2024–2028
                </p>
                <p className="mt-2 text-sm font-bold text-accent">
                  CGPA: 8.45 (Up to 3rd Sem)
                </p>
              </div>
            </motion.div>

            {/* Card 2: Tech Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-4 rounded-xl border border-surface-dark bg-white p-6 shadow-sm font-sans"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Technical Skills
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Python, TensorFlow, PyTorch, Scikit-learn, React, Next.js, Node.js, MongoDB, Git.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Key Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col gap-4 rounded-xl border border-surface-dark bg-white p-6 shadow-sm font-sans"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FolderGit2 size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Key Projects
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-text-secondary">
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold">GD Analyzer</span>
                    <span className="text-xs text-text-muted">Real-time speaker diarization & valuation.</span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold">HireVerse</span>
                    <span className="text-xs text-text-muted">AI recruitment with proctored screening.</span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold">EduVision</span>
                    <span className="text-xs text-text-muted">Offline TFLite facial recognition attendence.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════  §4 MOBILE DOWNLOAD FAB  ═══════ */}
      {/* Sticky floating button visible only on small screens */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <a
          href="/resume.pdf"
          download="VISHAL_L_R_Resume.pdf"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl shadow-accent/30 transition-transform active:scale-95"
          aria-label="Download Resume PDF"
        >
          <Download size={24} />
        </a>
      </div>
    </PageWrapper>
  );
}
