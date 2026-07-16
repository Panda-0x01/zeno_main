"use client";

import { motion } from "framer-motion";

type Pill = { label: string; x: number; y: number; w: number };
type Dot = { x: number; y: number };

const CENTER = { x: 350, y: 230 };
const TILE = 46;

// Two simple branches on top (mirrors the reference's "Customer" / "Code"),
// two chained branches on the bottom (mirrors "Bug → Issues" and
// "Ticket → Commit → PR") — restated with Zeno's own local architecture.
const TOP_Y = 96;
const BOTTOM_Y = 370;

const topDots: Dot[] = [
  { x: 96, y: TOP_Y },
  { x: 604, y: TOP_Y },
];

const topPills: Pill[] = [
  { label: "Voice I/O", x: 230, y: TOP_Y, w: 96 },
  { label: "Ollama", x: 470, y: TOP_Y, w: 80 },
];

const bottomDots: Dot[] = [
  { x: 70, y: BOTTOM_Y },
  { x: 300, y: BOTTOM_Y },
  { x: 400, y: BOTTOM_Y },
  { x: 630, y: BOTTOM_Y },
];

const bottomPills: Pill[] = [
  { label: "Plugins", x: 130, y: BOTTOM_Y, w: 84 },
  { label: "Sandbox", x: 230, y: BOTTOM_Y, w: 90 },
  { label: "SQLite", x: 460, y: BOTTOM_Y, w: 78 },
  { label: "Electron", x: 560, y: BOTTOM_Y, w: 92 },
];

function PillLabel({ p }: { p: Pill }) {
  return (
    <g filter="url(#neu-node-shadow)">
      <rect
        x={p.x - p.w / 2}
        y={p.y - 14}
        width={p.w}
        height={28}
        rx={14}
        fill="var(--background)"
      />
      <text
        x={p.x}
        y={p.y + 4}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.01em"
        fill="var(--foreground)"
      >
        {p.label}
      </text>
    </g>
  );
}

export function LocalNodeGraph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 470"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of Zeno's local-only architecture: a central on-device hub connected to voice, model, plugin, and storage nodes, with no cloud connection."
    >
      <defs>
        {/* Dual light/dark drop-shadow pair — the SVG equivalent of the
            page's neumorphic .neu utility — so nodes read as pressed out
            of the same material as the page rather than flat cut-outs. */}
        <filter id="neu-node-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="4" dy="4" stdDeviation="4" floodColor="#a39d8a" floodOpacity="0.45" />
          <feDropShadow dx="-3" dy="-3" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.9" />
        </filter>
        <filter id="neu-tile-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="7" dy="7" stdDeviation="7" floodColor="#a39d8a" floodOpacity="0.5" />
          <feDropShadow dx="-6" dy="-6" stdDeviation="7" floodColor="#ffffff" floodOpacity="0.95" />
        </filter>
      </defs>
      {/* top horizontal rail + diagonal drops to center */}
      <motion.path
        d={`M ${topDots[0].x} ${TOP_Y} H ${topDots[1].x}`}
        stroke="var(--neu-line)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.path
        d={`M ${CENTER.x - 20} ${CENTER.y - TILE} L ${topDots[0].x} ${TOP_Y} M ${CENTER.x + 20} ${CENTER.y - TILE} L ${topDots[1].x} ${TOP_Y}`}
        stroke="var(--neu-line)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      />

      {/* bottom horizontal rail + diagonal drops to center */}
      <motion.path
        d={`M ${bottomDots[0].x} ${BOTTOM_Y} H ${bottomDots[3].x}`}
        stroke="var(--neu-line)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
      />
      <motion.path
        d={`M ${CENTER.x - 20} ${CENTER.y + TILE} L ${bottomDots[1].x} ${BOTTOM_Y} M ${CENTER.x + 20} ${CENTER.y + TILE} L ${bottomDots[2].x} ${BOTTOM_Y}`}
        stroke="var(--neu-line)"
        strokeWidth={1}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      />

      {/* beacon pulse rings from the center, standing in for an offline "signal" rather than a cloud call */}
      {[0, 1.3, 2.6].map((delay) => (
        <motion.circle
          key={delay}
          cx={CENTER.x}
          cy={CENTER.y}
          r={TILE + 6}
          stroke="var(--accent)"
          strokeWidth={1}
          initial={{ opacity: 0.4, scale: 0.6 }}
          animate={{ opacity: 0, scale: 2.6 }}
          transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        />
      ))}

      {/* junction dots — small recessed pinpricks */}
      {[...topDots, ...bottomDots].map((d, i) => (
        <motion.circle
          key={`${d.x}-${d.y}`}
          cx={d.x}
          cy={d.y}
          r={3.5}
          fill="var(--background)"
          filter="url(#neu-node-shadow)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
        />
      ))}

      {/* labels */}
      {[...topPills, ...bottomPills].map((p, i) => (
        <motion.g
          key={p.label}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
        >
          <PillLabel p={p} />
        </motion.g>
      ))}

      {/* center tile — raised, page-toned, carved with an ink icon */}
      <motion.rect
        x={CENTER.x - TILE}
        y={CENTER.y - TILE}
        width={TILE * 2}
        height={TILE * 2}
        rx={20}
        fill="var(--background)"
        filter="url(#neu-tile-shadow)"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      />
      <g transform={`translate(${CENTER.x - 13}, ${CENTER.y - 13})`}>
        <circle cx="13" cy="13" r="4" fill="var(--ink)" />
        <path d="M7.5 8.5a7.2 7.2 0 0 0 0 9" stroke="var(--ink)" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M18.5 8.5a7.2 7.2 0 0 1 0 9" stroke="var(--ink)" strokeWidth="1.7" strokeLinecap="round" />
      </g>
    </svg>
  );
}
