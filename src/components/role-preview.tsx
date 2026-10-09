"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareQuote, TerminalSquare } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import {
  EVALUATION_NOTES,
  LEVELS,
  QUESTIONS,
  ROLES,
  type Level,
  type Role,
} from "@/lib/questions";

export function RolePreview() {
  const [role, setRole] = useState<Role>("Frontend");
  const [level, setLevel] = useState<Level>("Junior");
  const [direction, setDirection] = useState(1);

  const questions = QUESTIONS[role][level];

  const selectRole = (next: Role) => {
    setDirection(next === role ? 1 : ROLES.indexOf(next) > ROLES.indexOf(role) ? 1 : -1);
    setRole(next);
  };

  const selectLevel = (next: Level) => {
    setDirection(
      next === level ? 1 : LEVELS.indexOf(next) > LEVELS.indexOf(level) ? 1 : -1,
    );
    setLevel(next);
  };

  return (
    <section id="roles" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 h-96 bg-indigo-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech roles & levels"
          title={
            <>
              Preview the questions your{" "}
              <span className="text-gradient">AI interviewer</span> will ask.
            </>
          }
          description="Pick a track and experience tier — these are real sample prompts from MockPulse's question bank."
        />

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-5 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Role
                </p>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => selectRole(r)}
                      className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        role === r
                          ? "text-white"
                          : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                      }`}
                    >
                      {role === r ? (
                        <motion.span
                          layoutId="role-pill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <span className="relative">{r}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Experience level
                </p>
                <div className="inline-flex rounded-xl border border-white/10 bg-black/30 p-1">
                  {LEVELS.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => selectLevel(l)}
                      className={`relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        level === l ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {level === l ? (
                        <motion.span
                          layoutId="level-pill"
                          className="absolute inset-0 rounded-lg bg-white/10"
                          transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        />
                      ) : null}
                      <span className="relative">{l}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="mb-5 flex items-start gap-2.5 text-sm text-zinc-400">
                <MessageSquareQuote className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <p>
                  <span className="font-medium text-zinc-200">
                    {role} · {level}
                  </span>{" "}
                  — {EVALUATION_NOTES[role]}
                </p>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.ol
                  key={`${role}-${level}`}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-3"
                >
                  {questions.map((q, i) => (
                    <li
                      key={q.question}
                      className="group flex gap-4 rounded-2xl border border-white/8 bg-black/25 p-4 transition-colors duration-200 hover:border-indigo-400/30 hover:bg-black/40 sm:p-5"
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 font-mono text-xs font-semibold text-indigo-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
                          <TerminalSquare className="h-3 w-3" />
                          {q.topic}
                        </span>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-200 sm:text-[15px]">
                          {q.question}
                        </p>
                      </div>
                    </li>
                  ))}
                </motion.ol>
              </AnimatePresence>

              <p className="mt-6 text-xs text-zinc-500">
                Sample set shown — the full app generates unlimited variations,
                follow-ups and hints tailored to your answers.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
