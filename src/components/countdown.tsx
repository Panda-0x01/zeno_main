"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
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
    <div className="flex flex-col items-center gap-3" aria-live="off">
      <span className="mono-tag text-[11px] text-muted-2">
        Next feature drop — offline voice engine v2
      </span>
      <div className="flex items-center gap-2 sm:gap-3">
        {UNITS.map((unit, i) => (
          <motion.div
            key={unit.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
            className="neu-in flex flex-col items-center rounded-xl px-3.5 py-2.5 min-w-[64px] sm:min-w-[72px]"
          >
            <span className="font-display text-xl sm:text-2xl tabular-nums text-foreground">
              {time ? String(time[unit.key]).padStart(2, "0") : "--"}
            </span>
            <span className="mono-tag text-[9px] text-muted-2 mt-1">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
