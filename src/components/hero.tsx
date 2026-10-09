"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Code2, GitBranch, Sparkles } from "lucide-react";
import { DownloadCtaGroup } from "@/components/download";
import { InterviewPreview } from "@/components/interview-preview";

const TRUST_ITEMS = [
  { icon: BadgeCheck, label: "MIT Licensed" },
  { icon: Sparkles, label: "Free Gemini & Groq APIs" },
  { icon: GitBranch, label: "Open Source" },
  { icon: Code2, label: "Real coding sandbox" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            Open-source AI interviewer — now in public beta
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl xl:text-6xl"
          >
            Master Tech Interviews with Your{" "}
            <span className="text-gradient">AI Remote Interviewer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Practice real-world Frontend, Backend, and Full-Stack technical
            interviews with a realistic, lip-synced AI avatar. 100% Free and
            Open Source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9"
          >
            <DownloadCtaGroup />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500"
              >
                <Icon className="h-3.5 w-3.5 text-indigo-400" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="animate-float-slow">
          <InterviewPreview />
        </div>
      </div>
    </section>
  );
}
