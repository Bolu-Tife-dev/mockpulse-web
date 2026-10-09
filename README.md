# MockPulse AI — Landing Page

The official product & download page for **MockPulse AI**, an open-source,
AI-powered realistic technical interview desktop app.

Built with **Next.js (App Router)**, **React**, **Tailwind CSS v4**,
**Lucide Icons** and **Framer Motion**. Deploys to Vercel with zero config.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Sections

| Section          | Anchor / Route   | What it contains                                                              |
| ---------------- | ---------------- | ----------------------------------------------------------------------------- |
| Navbar           | —                | Logo, nav links, GitHub star badge, OS-aware **Download App** CTA              |
| Hero             | `#top`           | Headline, subheadline, OS-detecting download buttons, animated interview mockup |
| Key Capabilities | `#features`      | 5-card capability grid                                                        |
| Tech Roles       | `#roles`         | Interactive role × level tabs with sample interview questions                  |
| How It Works     | `#how-it-works`  | 3-step setup guide + closing download CTA                                      |
| FAQs             | `#faqs`          | Accordion FAQ                                                                  |
| Footer           | —                | Repo, issues, privacy, credits                                                 |
| Privacy Policy   | `/privacy`       | "Data stays local" policy page                                                 |

---

## Local development

```bash
git clone https://github.com/<YOUR-USERNAME>/mockpulse-ai-app.git
cd mockpulse-ai-app
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

---

## Updating download URLs

All site-wide links (downloads, GitHub, docs, issues) are defined in a single
file: [`src/lib/site.ts`](src/lib/site.ts).

### 1. Set your GitHub username

```ts
export const GITHUB_OWNER = "YOUR-USERNAME"; // ← change this
export const GITHUB_REPO = "mockpulse-ai-app";
```

This automatically updates the nav "Star on GitHub" badge, the footer links,
the docs link, and the release links.

### 2. Point the download buttons at real installer assets

By default every platform links to the GitHub **latest release** page:

```ts
export const DOWNLOADS = {
  windows: RELEASES_URL,
  macos: RELEASES_URL,
  linux: RELEASES_URL,
};
```

To link straight to each installer asset, use the
`/releases/latest/download/<asset-filename>` URL form (works without pinning a
version):

```ts
export const DOWNLOADS: Record<Platform, string> = {
  windows: `${RELEASES_URL}/download/MockPulse-Setup.exe`,
  macos: `${RELEASES_URL}/download/MockPulse-Setup.dmg`,
  linux: `${RELEASES_URL}/download/MockPulse-Setup.AppImage`,
};
```

Asset filenames must match **exactly** what you attach to the GitHub release
(the "latest release" redirect resolves the tag for you).

> The OS detection logic itself lives in
> [`src/components/download.tsx`](src/components/download.tsx) — it sniffs
> `navigator.userAgentData` / `navigator.platform` and highlights the right
> primary button (`.exe`, `.dmg` or `.AppImage`).

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Option B — Git integration

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset auto-detects **Next.js**. No build settings needed.
4. Click **Deploy**.

Every push to `main` then auto-deploys. Custom domains can be added under
Project → Settings → Domains.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout, fonts, SEO metadata
│   ├── page.tsx              # Landing page composition
│   ├── globals.css           # Tailwind v4 theme, keyframes, utilities
│   ├── icon.svg              # App icon (electric pulse mark)
│   └── privacy/page.tsx      # Privacy policy route
├── components/
│   ├── navbar.tsx            # Sticky nav, scroll-spy, mobile menu
│   ├── hero.tsx              # Hero section
│   ├── download.tsx          # OS detection + download CTA buttons
│   ├── interview-preview.tsx # Animated interview mockup (avatar + code editor)
│   ├── capabilities.tsx      # Key capabilities grid
│   ├── role-preview.tsx      # Role × level question tabs
│   ├── how-it-works.tsx      # 3-step setup guide + CTA band
│   ├── faq.tsx               # FAQ accordion
│   ├── footer.tsx            # Footer
│   ├── logo.tsx              # Pulse mark + wordmark
│   └── reveal.tsx            # Scroll-reveal motion helpers
└── lib/
    ├── site.ts               # ★ All site links & download URLs
    └── questions.ts          # Sample interview question bank
```

---

## Customization cheat-sheet

| Want to change…            | Edit                                                      |
| -------------------------- | --------------------------------------------------------- |
| Download / GitHub links    | `src/lib/site.ts`                                          |
| Nav items                  | `NAV_LINKS` in `src/lib/site.ts`                           |
| Hero copy                  | `src/components/hero.tsx`                                  |
| Capability cards           | `CAPABILITIES` in `src/components/capabilities.tsx`        |
| Sample questions           | `src/lib/questions.ts`                                     |
| FAQ entries                | `FAQS` in `src/components/faq.tsx`                         |
| Colors / glow accents      | Tailwind classes (`indigo-*`, `cyan-*`) + `globals.css`    |
| Page title & SEO metadata  | `src/app/layout.tsx`                                       |

---

## License

MIT — free to use, modify and distribute.
