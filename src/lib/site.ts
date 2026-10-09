/**
 * Central site configuration.
 *
 * `GITHUB_OWNER` is your GitHub username/organization. Every download, GitHub
 * and docs link on the site is derived from it.
 */
export const GITHUB_OWNER = "Bolu-Tife-dev";
export const GITHUB_REPO = "mockpulse-ai-app";

export const REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
export const RELEASES_URL = `${REPO_URL}/releases/latest`;
export const ISSUES_URL = `${REPO_URL}/issues`;
export const DOCS_URL = `${REPO_URL}#readme`;

export type Platform = "windows" | "macos" | "linux";

/**
 * Per-platform download URLs.
 *
 * By default every platform points at the GitHub "latest release" page, which
 * always resolves. To link straight to an installer asset, use the
 * `/releases/latest/download/<asset-filename>` form, e.g.:
 *
 *   windows: `${RELEASES_URL}/download/v1.0.0/MockPulse-Setup.exe`
 *
 * (see README.md → "Updating download URLs").
 */
export const DOWNLOADS: Record<Platform, string> = {
  windows: `${RELEASES_URL}/download/MockPulse-Setup.exe`,
  macos: `${RELEASES_URL}/download/MockPulse-Setup.dmg`,
  linux: `${RELEASES_URL}/download/MockPulse-Setup.AppImage`,
};

export const SITE = {
  name: "MockPulse AI",
  tagline: "AI-powered mock technical interviews",
  description:
    "Practice real-world Frontend, Backend and Full-Stack technical interviews with a realistic, lip-synced AI avatar. 100% free and open source.",
  // Production URL (Vercel) — used for SEO/OG metadata.
  url: "https://mockpulse-web.vercel.app",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tech Roles", href: "#roles" },
  { label: "FAQs", href: "#faqs" },
  { label: "Documentation", href: DOCS_URL },
] as const;
