"use client";

import { Download, KeyRound, Video, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { DownloadCtaGroup } from "@/components/download";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: Download,
    title: "Download & Install",
    description:
      "Grab the installer for Windows (.exe), macOS (.dmg), or Linux (.AppImage) and run it — no build step, no terminal required.",
  },
  {
    icon: KeyRound,
    title: "Add Your Free Key",
    description:
      "Paste a free Google Gemini or Groq API key into the app settings. It's stored locally on your machine and never leaves it.",
  },
  {
    icon: Video,
    title: "Start Mock Interview",
    description:
      "Select your target role and experience level, then join the call with your AI interviewer and start coding live.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From download to first interview in{" "}
              <span className="text-gradient">under three minutes.</span>
            </>
          }
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12} className="relative">
                <div className="flex flex-col items-start">
                  <div className="relative">
                    <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_0_40px_-12px_rgba(99,102,241,0.5)]">
                      <step.icon className="h-7 w-7 text-cyan-300" />
                    </span>
                    <span className="absolute -right-2.5 -top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 font-mono text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 px-6 py-10 text-center sm:px-12">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Ready when you are.
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Pick your platform and start practicing with your AI interviewer.
            </p>
          </div>
          <div className="flex justify-center">
            <DownloadCtaGroup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
