"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const FAQS = [
  {
    q: "Is MockPulse AI really free?",
    a: "Yes — completely. The app is open source under the MIT license, and it runs on free tiers of the Google Gemini and Groq APIs. There is no subscription, no seat fee, and no paid plan.",
  },
  {
    q: "Do I need my own API key?",
    a: "You paste a free API key from Google AI Studio or GroqCloud into the app settings once. The key is stored locally on your machine only — it is never uploaded to any MockPulse server (there isn't one).",
  },
  {
    q: "What happens to my code and interview data?",
    a: "Everything stays on your device. Your code, transcripts and analytics reports are stored locally. Only the code you actively submit for evaluation is sent to the LLM provider you configured.",
  },
  {
    q: "Which roles and experience levels are supported?",
    a: "Frontend, Backend, Full Stack, and general Software Engineering tracks, each available at Intern, Junior, and Mid levels with question banks calibrated to that bar.",
  },
  {
    q: "What are the system requirements?",
    a: "A desktop machine running Windows 10+, macOS 12+, or a modern Linux distro, with a webcam/mic if you want the full video-interview experience. The 3D avatar renders locally.",
  },
  {
    q: "How do I report a bug or contribute?",
    a: "Everything lives on GitHub. Open an issue in the repository for bugs or feature requests, or submit a pull request — contributions of question banks, avatar improvements and platform fixes are all welcome.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions, answered."
          description="Everything you need to know before your first mock interview."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-indigo-400/30 bg-zinc-900/70"
                      : "border-white/8 bg-zinc-900/40 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-medium text-zinc-100 sm:text-base">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`shrink-0 rounded-full border border-white/10 p-1 transition-colors ${
                        isOpen ? "text-cyan-300" : "text-zinc-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400 sm:px-6 sm:pb-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
