import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { REPO_URL } from "@/lib/site";
import { getCurrentYear } from "@/lib/year";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MockPulse AI privacy policy — your data, API keys and interview sessions never leave your machine.",
};

const SECTIONS = [
  {
    heading: "Data we collect",
    body: "None. MockPulse AI is a desktop application with no backend of its own. We do not operate analytics, tracking, or accounts. The website you are on now is a static page hosted on Vercel and collects no personal data beyond standard, anonymized request logs.",
  },
  {
    heading: "Your API keys",
    body: "Google Gemini and Groq API keys you paste into the app settings are stored locally in your operating system's application config directory. They are never transmitted anywhere except directly to the provider you chose (Google or Groq) when you run an interview.",
  },
  {
    heading: "Interview sessions",
    body: "Code you write, transcripts, and feedback reports are saved locally on your device. You can delete them at any time by clearing the app's data directory. Nothing is uploaded to MockPulse servers — there are none.",
  },
  {
    heading: "Third-party services",
    body: "When you start an interview, your prompts are sent to the LLM provider whose API key you configured (Google Gemini or Groq). Their respective privacy policies govern that data. The 3D avatar and lip-sync are rendered locally on your machine.",
  },
  {
    heading: "Changes & contact",
    body: "If this policy ever changes, it will be updated in the public GitHub repository with a clear commit history. Questions? Open an issue at the repository linked in the footer.",
  },
];

export default async function PrivacyPage() {
  const year = await getCurrentYear();
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
          Privacy Policy
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Your data never leaves{" "}
          <span className="text-gradient">your machine.</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          Last updated: {year} · MockPulse AI is open source
          — you can verify every claim below in the{" "}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-cyan-300 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-200"
          >
            public repository
          </a>
          .
        </p>

        <div className="mt-12 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-semibold text-zinc-100">
                {s.heading}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
        © {year} MockPulse AI · MIT Licensed
      </footer>
    </>
  );
}
