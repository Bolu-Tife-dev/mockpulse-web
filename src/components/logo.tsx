interface PulseMarkProps {
  className?: string;
}

export function PulseMark({ className = "h-8 w-8" }: PulseMarkProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 shadow-[0_0_24px_rgba(99,102,241,0.45)] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[60%] w-[60%]"
      >
        <path d="M2 12h4.5l2-6.5 4 13 2.5-6.5H22" />
      </svg>
      <span className="absolute inset-0 animate-pulse-glow rounded-xl bg-indigo-500/40 blur-md" />
    </span>
  );
}

export function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <PulseMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
      <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
        MockPulse <span className="text-gradient">AI</span>
      </span>
    </a>
  );
}
