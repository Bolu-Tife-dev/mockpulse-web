/**
 * Central site configuration.
 *
 * >>> UPDATE `GITHUB_OWNER` BEFORE DEPLOYING <<<
 * Replace "YOUR-USERNAME" with your actual GitHub username or organization.
 * Every download, GitHub and docs link on the site is derived from this value.
 */
export const GITHUB_OWNER = "YOUR-USERNAME";
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
  windows: RELEASES_URL,
  macos: RELEASES_URL,
  linux: RELEASES_URL,
};

export const SITE = {
  name: "MockPulse AI",
  tagline: "AI-powered mock technical interviews",
  description:
    "Practice real-world Frontend, Backend and Full-Stack technical interviews with a realistic, lip-synced AI avatar. 100% free and open source.",
  url: `https://${GITHUB_OWNER}.github.io/${GITHUB_REPO}`,
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tech Roles", href: "#roles" },
  { label: "FAQs", href: "#faqs" },
  { label: "Documentation", href: DOCS_URL },
] as const;
