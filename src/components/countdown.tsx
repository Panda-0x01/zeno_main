"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: number) {
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

const UNITS: { key: keyof ReturnType<typeof getTimeLeft>; label: string }[] = [
  { key: "days", label: "d" },
  { key: "hours", label: "h" },
  { key: "minutes", label: "m" },
  { key: "seconds", label: "s" },
];

/**
 * Countdown timer, structurally required by the brief. Not sourced from the
 * README (which describes no release date) — framed here as a forward-looking
 * milestone for the next major feature drop rather than a factual claim.
 */
export function Countdown() {
  const [target] = useState(() => Date.now() + 365 * 24 * 60 * 60 * 1000);
  // `time` stays null until the effect below runs on the client, so the
  // server-rendered markup and the first client render always match.
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(target));
    const immediate = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(immediate);
      clearInterval(id);
    };
  }, [target]);

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3"
      aria-live="off"
    >
      <span className="mono-tag text-[9px] text-muted-2">
        Next feature drop
      </span>
      <span className="h-3 w-px bg-white/10" aria-hidden />
      <div className="flex items-center gap-1.5">
        {UNITS.map((unit) => (
          <span
            key={unit.key}
            className="inline-flex items-baseline gap-0.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-[11px] tabular-nums text-foreground"
          >
            {time ? String(time[unit.key]).padStart(2, "0") : "--"}
            <span className="text-[8px] text-muted-2">{unit.label}</span>
          </span>
        ))}
      </div>
      <span className="hidden text-[10px] text-muted-2 sm:inline">
        offline voice engine v2
      </span>
    </div>
  );
}
