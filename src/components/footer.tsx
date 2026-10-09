import { ArrowUpRight, Heart, Star } from "lucide-react";
import { Logo } from "@/components/logo";
import { getCurrentYear } from "@/lib/year";
import {
  DOCS_URL,
  GITHUB_REPO,
  ISSUES_URL,
  REPO_URL,
  RELEASES_URL,
} from "@/lib/site";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Tech Roles", href: "#roles" },
      { label: "FAQs", href: "#faqs" },
      { label: "Download", href: RELEASES_URL, external: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: DOCS_URL, external: true },
      { label: "GitHub Repository", href: REPO_URL, external: true },
      { label: "Report an Issue", href: ISSUES_URL, external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "MIT License", href: `${REPO_URL}/blob/main/LICENSE`, external: true },
    ],
  },
];

export async function Footer() {
  const year = await getCurrentYear();
  return (
    <footer className="relative border-t border-white/10 bg-zinc-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Open-source, AI-powered mock technical interviews with a
              realistic remote interviewer. Practice more. Stress less. Land
              the offer.
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-amber-300"
            >
              <Star className="h-3.5 w-3.5" />
              Star {GITHUB_REPO} on GitHub
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer noopener" : undefined}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} MockPulse AI. MIT Licensed &amp;
            open source.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with
            <Heart className="h-3 w-3 text-rose-400" />
            using Next.js, Tailwind CSS, Gemini &amp; deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
