"use client";

import {
  BarChart3,
  Code2,
  Coins,
  Layers3,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  span: string;
  accent: string;
}

const CAPABILITIES: Capability[] = [
  {
    icon: Video,
    title: "Hyper-Realistic Video Feed",
    description:
      "A 3D avatar interviewer with real-time lip-sync, human-like gestures and natural conversational pauses — not a chat box in a costume.",
    span: "lg:col-span-2",
    accent: "from-indigo-500/20 to-indigo-500/0 text-indigo-300",
  },
  {
    icon: Layers3,
    title: "Custom Tech Tracks & Levels",
    description:
      "Targeted rounds for Intern, Junior, and Mid engineers across Frontend, Backend, and Full Stack — tuned to the bar that level is actually held to.",
    span: "lg:col-span-2",
    accent: "from-cyan-500/20 to-cyan-500/0 text-cyan-300",
  },
  {
    icon: Code2,
    title: "Integrated Coding Sandbox",
    description:
      "Write and run code live inside the call. The interviewer evaluates your implementation and system architecture decisions in real time.",
    span: "lg:col-span-2",
    accent: "from-violet-500/20 to-violet-500/0 text-violet-300",
  },
  {
    icon: Coins,
    title: "Zero Cost / Free APIs",
    description:
      "Powered by free Google Gemini & Groq APIs with local key storage. No subscription, no seat fees, no usage surprises — ever.",
    span: "lg:col-span-3",
    accent: "from-amber-500/20 to-amber-500/0 text-amber-300",
  },
  {
    icon: BarChart3,
    title: "In-Depth Analytics",
    description:
      "After every session you get a comprehensive feedback report detailing strengths, weaknesses, and seniority readiness against real rubrics.",
    span: "lg:col-span-3",
    accent: "from-emerald-500/20 to-emerald-500/0 text-emerald-300",
  },
];

export function Capabilities() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key capabilities"
          title={
            <>
              Everything a real interview throws at you —{" "}
              <span className="text-gradient">minus the anxiety.</span>
            </>
          }
          description="MockPulse AI recreates the full interview loop: a talking interviewer, a live editor, and a rigorous debrief at the end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {CAPABILITIES.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.07}
              className={`${item.span} group relative h-full`}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/8 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/80 sm:p-7">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.accent}`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br p-2.5 ${item.accent}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-zinc-100 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
