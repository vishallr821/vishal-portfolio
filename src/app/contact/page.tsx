"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

// ─── Animation Helpers ─────────────────────────────────────
const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

// ─── Contact Info Data ─────────────────────────────────────
const contactMethods = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/vishallr",
    href: personalInfo.linkedin,
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/vishallr",
    href: personalInfo.github,
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: null,
  },
];

// ─── Form Types ────────────────────────────────────────────
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormData>;

// ─── Page ──────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim() || formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error as user types
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleBlur = () => {
    // Optional: Validate individual fields on blur
    // For simplicity, we just keep full validation on submit.
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // TODO: Connect to EmailJS or Formspree for real email delivery
    // Simulating network request...
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <PageWrapper className="!max-w-none !px-0 !py-0">
      {/* ═══════  §1 HEADER  ═══════ */}
      <section className="bg-surface px-6 pt-14 pb-8 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Let's Connect"
            subtitle="Open to internships, full-time roles, collaborations, and conversations."
          />
        </div>
      </section>

      {/* ═══════  §2 TWO-COLUMN LAYOUT  ═══════ */}
      <section className="bg-white px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5 lg:gap-12">
          {/* ── Left Column: Contact Info ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInLeft}
            className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-white shadow-xl shadow-primary/10 lg:col-span-2 lg:p-10"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                I&apos;m always happy to discuss AI/ML projects, career
                opportunities, or just have a chat about tech! Feel free to reach
                out via the form or any of my social links.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-light backdrop-blur-sm">
                      {method.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                        {method.label}
                      </span>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mt-0.5 text-sm font-medium transition-colors hover:text-accent-light"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="mt-0.5 text-sm font-medium">
                          {method.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-12 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Currently Open to Opportunities
            </div>
          </motion.div>

          {/* ── Right Column: Contact Form ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
            className="rounded-3xl border border-surface-dark bg-white p-8 shadow-xl shadow-black/[0.03] lg:col-span-3 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                // SUCCESS STATE
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Message Sent!
                  </h3>
                  <p className="mt-3 max-w-sm text-text-secondary">
                    Thanks {formData.name}, I&apos;ve received your message and
                    will get back to you soon.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-8 rounded-xl bg-surface px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-dark"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                // FORM STATE
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-primary"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        className={`rounded-xl border bg-surface px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.name
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                            : "border-surface-dark focus:border-accent focus:ring-accent/20"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs font-medium text-red-500">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-primary"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        className={`rounded-xl border bg-surface px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                            : "border-surface-dark focus:border-accent focus:ring-accent/20"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs font-medium text-red-500">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-primary"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Project Inquiry"
                      className={`rounded-xl border bg-surface px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : "border-surface-dark focus:border-accent focus:ring-accent/20"
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-xs font-medium text-red-500">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-primary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Hi, I'd like to discuss..."
                      className={`resize-none rounded-xl border bg-surface px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : "border-surface-dark focus:border-accent focus:ring-accent/20"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs font-medium text-red-500">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
