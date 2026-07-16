// All copy in this file is derived directly from README.md unless explicitly
// marked "inferred" in a trailing comment. Inferred copy fills structural
// gaps (e.g. testimonial names, countdown framing) that the README does not
// specify, and is kept minimal and clearly non-factual.

export const nav = [
  { label: "Platform", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "100% Free & Open Source · MIT License",
  headline: "Your desktop, your model, your data.",
  sub: "Zeno is a cross-platform AI assistant that runs entirely on your machine — powered by Ollama, with voice in, voice out, and a plugin system you control. Nothing leaves your device unless you say so.",
  primaryCta: { label: "Join Wishlist", href: "#pricing" },
  secondaryCta: { label: "View Architecture", href: "#how-it-works" },
};

export const stack = [
  "React (TypeScript) + Vite",
  "Electron Shell",
  "WebSocket (secure)",
  "Python FastAPI Backend",
  "Ollama Local API",
];

export const trustedBy = {
  stats: [
    { value: "2GB", label: "Minimum RAM to run Zeno" },
    { value: "0", label: "Analytics or telemetry events sent" },
  ],
  note: "Zeno runs entirely on your machine. Connect your own Ollama models — nothing leaves your device unless you say so.",
};

export const features = [
  {
    icon: "Bot",
    title: "Ollama integration",
    description:
      "Full model management, streaming responses, and context window control against your local Ollama instance.",
  },
  {
    icon: "Mic",
    title: "Voice in, voice out",
    description:
      "Web Speech API by default, with optional offline speech-to-text (Whisper or VOSK) and multi-voice text-to-speech.",
  },
  {
    icon: "ShieldCheck",
    title: "Security first",
    description:
      "Local-only by default, encrypted chat history, sandboxed plugin execution, audit logging, and a strict Content Security Policy.",
  },
  {
    icon: "Sparkles",
    title: "Polished UI",
    description:
      "Light and dark themes, glass-morphism backgrounds, full ARIA support for screen readers, and keyboard shortcuts throughout.",
  },
  {
    icon: "Blocks",
    title: "Plugin system",
    description:
      "Define your own commands as Python plugins with explicit, per-plugin permission controls.",
  },
  {
    icon: "Cpu",
    title: "Low-end PC support",
    description:
      "Auto-detects device capability, drops to 1B-parameter models, and trims animations on machines with as little as 2GB RAM.",
  },
];

export const architectureLayers = [
  "React (TypeScript) + Vite",
  "Electron Shell",
  "WebSocket (secure)",
  "Python FastAPI Backend",
  "Ollama Local API",
];

export const howItWorks = [
  {
    step: "01",
    title: "Install Ollama & pull a model",
    description:
      "Zeno talks to a local Ollama instance. Install Ollama, then pull a model such as llama2 to get started.",
  },
  {
    step: "02",
    title: "One-click startup",
    description:
      "Run Zeno_AI.bat, start_zeno.ps1, or npm run start:all to launch Ollama, the Python backend, and the React frontend together.",
  },
  {
    step: "03",
    title: "Talk or type",
    description:
      "Use push-to-talk voice input or the chat window. Requests are streamed back from your local model over a secured WebSocket.",
  },
  {
    step: "04",
    title: "Extend with plugins",
    description:
      "Drop a Python plugin into ~/.jarvis/plugins/ and register it — every action still requires your explicit confirmation.",
  },
];

export const benefits = [
  {
    title: "Local-first by design",
    description:
      "All data stays on your machine by default. There is no telemetry and no analytics pipeline collecting your conversations.",
  },
  {
    title: "Encrypted where it matters",
    description:
      "Chat history is stored in SQLite and can be encrypted at rest with a password-derived key using PBKDF2 and AES-256-GCM.",
  },
  {
    title: "Sandboxed by default",
    description:
      "User scripts and plugins run in a restricted environment, and every shell command, file access, or network request needs your confirmation.",
  },
  {
    title: "Built for the hardware you have",
    description:
      "From a 2GB dual-core laptop to a quad-core desktop, Zeno auto-detects your device and scales model size and effects accordingly.",
  },
];

// Pricing is a structural requirement of the brief; the README describes
// Zeno as 100% free and open source (MIT License) with no pricing tiers of
// its own. The plans below are inferred and represent an optional hosted /
// supported tier on top of the free, self-hosted core.
export const pricing = {
  note: "Zeno's desktop app is 100% free & open source under the MIT License. These optional plans are for teams who want managed infrastructure and support layered on top.",
  plans: [
    {
      name: "Starter",
      price: "$20",
      cadence: "/month",
      description: "For individuals who want a maintained, hosted config.",
      cta: "Start Starter",
      recommended: false,
      features: [
        "Everything in the free desktop app",
        "Hosted config & plugin backups",
        "Priority security patches",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$100",
      cadence: "/month",
      description: "For power users running larger local models daily.",
      cta: "Start Pro",
      recommended: true,
      features: [
        "Everything in Starter",
        "Offline Whisper STT bundle included",
        "Advanced audit log retention",
        "Custom plugin permission policies",
        "Priority chat support",
      ],
    },
    {
      name: "Pay As You Use",
      price: "Usage-based",
      cadence: "",
      description: "Flexible metering for teams with variable workloads.",
      cta: "Talk to us",
      recommended: false,
      features: [
        "No monthly minimum",
        "Meter by active device or session",
        "Scale support up or down anytime",
        "Same local-first security model",
      ],
    },
  ],
};

export const faq = [
  {
    question: "Does Zeno send my data to the cloud?",
    answer:
      "No. Zeno is local-first: all data stays on your machine by default, there is zero telemetry, and model inference runs against your own local Ollama instance.",
  },
  {
    question: "What are the minimum system requirements?",
    answer:
      "Zeno's minimum spec is 2GB of RAM and a dual-core CPU. The recommended spec is 4GB of RAM and a quad-core CPU. On low-end hardware, Zeno auto-detects capability and switches to smaller 1B-parameter models with reduced visual effects.",
  },
  {
    question: "What do I need installed before running Zeno?",
    answer:
      "You need Ollama (with at least one model pulled, e.g. llama2), Node.js 18+, and Python 3.10+. From there you can run npm run setup:complete followed by npm run start:all.",
  },
  {
    question: "How does voice input and output work?",
    answer:
      "By default Zeno uses the Web Speech API inside its Chromium-based Electron shell, with push-to-talk and continuous listening modes. You can optionally add offline speech-to-text with Whisper or VOSK, and an optional wake word via Porcupine.",
  },
  {
    question: "Is my chat history encrypted?",
    answer:
      "Chat history is stored locally in SQLite at ~/.jarvis/history.db. Optional encryption uses a password-derived key (PBKDF2 + AES-256-GCM) so history can be encrypted at rest.",
  },
  {
    question: "How do plugins work, and are they safe?",
    answer:
      "Plugins are Python classes registered in ~/.jarvis/plugins/ or plugins.json. They run in a sandboxed, restricted environment, and every system action — shell commands, file access, network requests, launching applications — requires your explicit confirmation.",
  },
  {
    question: "Which platforms does Zeno support?",
    answer:
      "Zeno builds installers for Windows (NSIS .exe), macOS (.dmg, notarization requires code signing), and Linux (.AppImage, .deb, .rpm) via npm run build:win, build:mac, and build:linux.",
  },
  {
    question: "Is Zeno really free?",
    answer:
      "Yes. Zeno is 100% free and open source under the MIT License, including its third-party components such as Ollama, FastAPI, React, and Electron (Porcupine's wake-word engine has a proprietary free tier).",
  },
];

export const finalCta = {
  headline: "Run your own assistant. Keep your own data.",
  sub: "Clone the repo, pull a model, and Zeno is talking to you in minutes — no account, no cloud, no telemetry.",
  primaryCta: { label: "Join Wishlist", href: "#pricing" },
  secondaryCta: { label: "Read the docs", href: "#faq" },
};

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  resources: [
    { label: "Architecture", href: "#how-it-works" },
    { label: "Security", href: "#benefits" },
    { label: "Plugin development", href: "#features" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const social = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Discord", href: "https://discord.com" },
  { label: "X", href: "https://x.com" },
];
