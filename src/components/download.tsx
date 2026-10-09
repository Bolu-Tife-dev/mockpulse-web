"use client";

import { useSyncExternalStore } from "react";
import { Apple, Download, Monitor, Terminal } from "lucide-react";
import { DOWNLOADS, type Platform } from "@/lib/site";

const PLATFORM_META: Record<
  Platform,
  { label: string; ext: string; Icon: typeof Monitor }
> = {
  windows: { label: "Windows", ext: ".exe", Icon: Monitor },
  macos: { label: "macOS", ext: ".dmg", Icon: Apple },
  linux: { label: "Linux", ext: ".AppImage", Icon: Terminal },
};

const PLATFORM_ORDER: Platform[] = ["windows", "macos", "linux"];

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent || "";
  const uaData = (
    navigator as Navigator & { userAgentData?: { platform?: string } }
  ).userAgentData;
  const platform = uaData?.platform || navigator.platform || "";
  const source = `${platform} ${ua}`.toLowerCase();

  if (/mac|iphone|ipad|ipod/.test(source)) return "macos";
  if (/linux|x11|cros/.test(source) && !/android/.test(source)) return "linux";
  return "windows";
}

function emptySubscribe() {
  return () => {};
}

/**
 * Detects the visitor's OS without hydration mismatches: the server snapshot
 * is `null`, and the client resolves the real platform after hydration.
 */
export function useDetectedPlatform(): Platform | null {
  return useSyncExternalStore(
    emptySubscribe,
    () => detectPlatform(),
    () => null,
  );
}

export function DownloadCtaGroup() {
  const detected = useDetectedPlatform();
  const primary: Platform = detected ?? "windows";
  const others = PLATFORM_ORDER.filter((p) => p !== primary);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={DOWNLOADS[primary]}
          className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(99,102,241,0.35)] transition-all duration-300 hover:shadow-[0_0_44px_rgba(34,211,238,0.45)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          {detected
            ? `Download for ${PLATFORM_META[primary].label}`
            : "Download the App"}
          <span className="hidden font-mono text-xs text-white/70 sm:inline">
            {PLATFORM_META[primary].ext}
          </span>
        </a>

        <div className="flex items-center gap-2">
          {others.map((p) => {
            const { label, ext, Icon } = PLATFORM_META[p];
            return (
              <a
                key={p}
                href={DOWNLOADS[p]}
                title={`Download for ${label}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm font-medium text-zinc-300 backdrop-blur transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{label}</span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {ext}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-zinc-500">
        100% free · Open source (MIT) · Your API keys never leave your machine
      </p>
    </div>
  );
}

export function NavbarDownloadButton() {
  const detected = useDetectedPlatform();
  const meta = PLATFORM_META[detected ?? "windows"];

  return (
    <a
      href={DOWNLOADS[detected ?? "windows"]}
      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:brightness-110"
    >
      <Download className="h-4 w-4" />
      Download App
      {detected ? (
        <span className="hidden font-mono text-[10px] text-white/70 md:inline">
          {meta.ext}
        </span>
      ) : null}
    </a>
  );
}
