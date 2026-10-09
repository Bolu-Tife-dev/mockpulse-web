"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  CheckCircle2,
  Code2,
  Mic,
  MicOff,
  PhoneOff,
  Sparkles,
} from "lucide-react";

const KEYWORDS = new Set([
  "class",
  "private",
  "constructor",
  "const",
  "let",
  "return",
  "if",
  "else",
  "new",
  "true",
  "false",
  "null",
  "undefined",
  "await",
  "async",
  "function",
  "string",
  "boolean",
  "number",
  "export",
  "import",
  "from",
  "interface",
  "type",
  "extends",
  "implements",
  "this",
  "void",
]);

const CODE = `// Interviewer: "Implement a sliding-window rate limiter"
class RateLimiter {
  private hits = new Map<string, number[]>();

  constructor(private limit: number, private windowMs: number) {}

  allow(key: string): boolean {
    const now = Date.now();
    const recent = (this.hits.get(key) ?? [])
      .filter((t) => now - t < this.windowMs);

    if (recent.length >= this.limit) return false;
    recent.push(now);
    this.hits.set(key, recent);
    return true;
  }
}`;

const TOKEN_RE =
  /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b\d+(?:\.\d+)?\b|[A-Za-z_$][\w$]*/g;

interface Token {
  text: string;
  cls: string;
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let last = 0;

  for (const match of line.matchAll(TOKEN_RE)) {
    const text = match[0];
    const index = match.index ?? 0;
    if (index > last) {
      tokens.push({ text: line.slice(last, index), cls: "text-zinc-300" });
    }

    let cls = "text-zinc-100";
    if (text.startsWith("//")) cls = "text-zinc-500 italic";
    else if (/^["'`]/.test(text)) cls = "text-emerald-300";
    else if (/^\d/.test(text)) cls = "text-amber-300";
    else if (KEYWORDS.has(text)) cls = "text-indigo-300";
    else if (/^[A-Z]/.test(text)) cls = "text-cyan-300";
    else if (line[index + text.length] === "(") cls = "text-sky-300";

    tokens.push({ text, cls });
    last = index + text.length;
  }

  if (last < line.length) {
    tokens.push({ text: line.slice(last), cls: "text-zinc-300" });
  }
  return tokens;
}

function InterviewerAvatar({ speaking }: { speaking: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(99,102,241,0.28),transparent_65%)]" />
      <div className="absolute h-44 w-44 animate-pulse-glow rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute h-64 w-64 rounded-full border border-cyan-400/10" />
      <div className="absolute h-52 w-52 rounded-full border border-indigo-400/15" />

      <svg
        viewBox="0 0 200 220"
        className="relative h-[78%] w-auto drop-shadow-[0_0_28px_rgba(99,102,241,0.35)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mp-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <radialGradient id="mp-head" cx="38%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </radialGradient>
        </defs>

        <path
          d="M30 220c0-38 31-62 70-62s70 24 70 62H30z"
          fill="url(#mp-body)"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1.5"
        />
        <circle
          cx="100"
          cy="88"
          r="52"
          fill="url(#mp-head)"
          stroke="rgba(165,180,252,0.45)"
          strokeWidth="1.5"
        />
        <ellipse cx="80" cy="84" rx="6" ry="7" fill="#e0f2fe" />
        <ellipse cx="120" cy="84" rx="6" ry="7" fill="#e0f2fe" />
        <circle cx="81.5" cy="84.5" r="2.6" fill="#0f172a" />
        <circle cx="121.5" cy="84.5" r="2.6" fill="#0f172a" />
        <motion.ellipse
          cx="100"
          cy="116"
          rx="16"
          ry="4"
          fill="#0f172a"
          opacity="0.85"
          animate={{ scaleY: speaking ? [1, 1.9, 1.2, 2.1, 1] : 1 }}
          transition={{
            duration: 0.6,
            repeat: speaking ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "100px 116px" }}
        />
        <path
          d="M74 68c8-6 16-8 26-8s18 2 26 8"
          stroke="rgba(226,232,240,0.5)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium text-zinc-200 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          LIVE
        </span>
        <span
          className={`rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium backdrop-blur transition-colors ${
            speaking ? "text-cyan-300" : "text-zinc-400"
          }`}
        >
          {speaking ? "Interviewer speaking…" : "Listening…"}
        </span>
      </div>

      <div className="absolute bottom-3 right-3 flex h-6 items-end gap-[3px]">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className={`w-[3px] rounded-full bg-gradient-to-t from-indigo-500 to-cyan-400 ${
              speaking ? "animate-wave opacity-100" : "opacity-25"
            }`}
            style={{
              height: `${30 + ((i * 37) % 70)}%`,
              animationDelay: `${i * 0.09}s`,
              animationDuration: `${0.9 + (i % 3) * 0.22}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface RenderedLine {
  index: number;
  fullText: string;
  parts: Token[];
  cursor: boolean;
  dim: boolean;
}

function buildRenderedLines(visibleChars: number): RenderedLine[] {
  const lines = CODE.split("\n").map(tokenizeLine);
  let remaining = visibleChars;

  return lines.map((tokens, index) => {
    const fullText = tokens.map((t) => t.text).join("");

    if (index === 0 && visibleChars === 0) {
      return { index, fullText, parts: [], cursor: true, dim: false };
    }

    if (remaining <= 0) {
      return { index, fullText, parts: [], cursor: false, dim: true };
    }

    let left = remaining;
    const parts: Token[] = [];
    let cursor = false;

    for (const token of tokens) {
      if (left <= 0) break;
      const shown =
        token.text.length <= left ? token.text : token.text.slice(0, left);
      left -= token.text.length;
      parts.push({ text: shown, cls: token.cls });
      if (left <= 0) cursor = true;
    }

    remaining = left;
    return { index, fullText, parts, cursor, dim: false };
  });
}

function CodePane({
  visibleChars,
  done,
}: {
  visibleChars: number;
  done: boolean;
}) {
  const lines = useMemo(
    () => buildRenderedLines(visibleChars),
    [visibleChars],
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0b0b12]">
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <Code2 className="h-3 w-3 text-indigo-400" />
          <span className="font-mono">rate-limiter.ts</span>
          <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-zinc-400">
            sandbox
          </span>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors duration-500 ${
            done
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-indigo-500/10 text-indigo-300"
          }`}
        >
          {done ? (
            <>
              <CheckCircle2 className="h-3 w-3" /> 3/3 tests passed
            </>
          ) : (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              running…
            </>
          )}
        </span>
      </div>

      <div className="scrollbar-thin flex-1 overflow-hidden px-3 py-2.5 font-mono text-[11px] leading-[1.65] sm:text-[12px]">
        {lines.map((line) => (
          <div
            key={line.index}
            className={`flex gap-3 ${line.dim ? "opacity-25" : ""}`}
          >
            <span className="w-5 shrink-0 select-none text-right text-zinc-600">
              {line.index + 1}
            </span>
            <span className="whitespace-pre">
              {line.dim
                ? line.fullText.length === 0
                  ? " "
                  : line.fullText
                : line.parts.map((part, i) => (
                    <span key={i} className={part.cls}>
                      {part.text}
                    </span>
                  ))}
              {line.cursor ? (
                <span className="ml-px inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-cyan-400" />
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InterviewPreview() {
  const [speaking, setSpeaking] = useState(true);
  const [elapsed, setElapsed] = useState(127);
  const [visible, setVisible] = useState(0);
  const total = useMemo(() => CODE.replace(/\n/g, "").length, []);

  useEffect(() => {
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSpeaking((s) => !s), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (visible >= total) {
      const reset = setTimeout(() => setVisible(0), 3400);
      return () => clearTimeout(reset);
    }
    const id = setTimeout(() => setVisible((v) => Math.min(v + 3, total)), 26);
    return () => clearTimeout(id);
  }, [visible, total]);

  const done = visible >= total;
  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 via-cyan-500/10 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-medium text-zinc-400">
              MockPulse — Live Interview
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            {mm}:{ss}
          </span>
        </div>

        <div className="grid h-[340px] grid-cols-1 sm:h-[380px] sm:grid-cols-2 lg:h-[420px]">
          <div className="relative min-h-0 border-b border-white/10 sm:border-b-0 sm:border-r">
            <InterviewerAvatar speaking={speaking} />
          </div>
          <div className="hidden min-h-0 sm:block">
            <CodePane visibleChars={visible} done={done} />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-300">
              <Mic className="h-3.5 w-3.5" />
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-300">
              <Camera className="h-3.5 w-3.5" />
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400">
              <MicOff className="h-3.5 w-3.5" />
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-red-400">
              <PhoneOff className="h-3.5 w-3.5" />
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-zinc-400">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            Gemini · Groq
          </span>
        </div>
      </motion.div>
    </div>
  );
}
