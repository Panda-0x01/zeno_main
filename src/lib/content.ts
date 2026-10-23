// Single source of truth for page copy. Product facts come from the project
// README; pricing is an optional support layer (clearly framed as such) on top
// of the free, MIT-licensed desktop app.

export const site = {
  version: "v0.9.0",
  repo: "https://github.com/Panda-0x01/zeno_main",
  releases: "https://github.com/Panda-0x01/zeno_main/releases",
  license: "MIT",
};

export const nav = [
  { label: "Platform", href: "/#features" },
  { label: "Quickstart", href: "/#how-it-works" },
  { label: "Security", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const hero = {
  badge: "Public beta",
  headline: ["A local AI assistant", "for your desktop."],
  sub: "Zeno connects to Ollama, streams answers from models running on your hardware, and keeps every conversation on disk. No account, no cloud, no telemetry.",
  primaryCta: { label: "Download for free", href: site.releases },
  secondaryCta: { label: "Read the quickstart", href: "#how-it-works" },
  facts: ["MIT licensed", "2 GB minimum RAM", "Windows · macOS · Linux"],
};

export const stack = [
  "Ollama",
  "FastAPI",
  "React",
  "Electron",
  "SQLite",
  "Whisper",
];

export const stats = [
  { value: "2 GB", label: "Minimum RAM" },
  { value: "0", label: "Telemetry events" },
  { value: "3", label: "Desktop platforms" },
  { value: "MIT", label: "Open-source license" },
];

export const features = [
  {
    icon: "Bot",
    title: "Local inference",
    description:
      "Stream tokens from any Ollama model you have pulled, with context-window controls and per-thread model switching.",
    meta: "Ollama · Streaming",
  },
  {
    icon: "Mic",
    title: "Voice in, voice out",
    description:
      "Push-to-talk with the Web Speech API by default, or plug in Whisper and VOSK for speech recognition that never touches a network.",
    meta: "Whisper · VOSK",
  },
  {
    icon: "ShieldCheck",
    title: "Permissioned actions",
    description:
      "Shell commands, file access and network requests pause for explicit approval. Nothing runs in the background without your consent.",
    meta: "Sandbox · Approvals",
  },
  {
    icon: "Lock",
    title: "Encrypted history",
    description:
      "Conversations live in a SQLite file on your disk and can be encrypted at rest with a key derived from your password.",
    meta: "SQLite · AES-256-GCM",
  },
  {
    icon: "Blocks",
    title: "Python plugins",
    description:
      "Register your own commands from ~/.jarvis/plugins, each with scoped permissions you define and can revoke at any time.",
    meta: "Python · Scoped",
  },
  {
    icon: "Cpu",
    title: "Built for low-end hardware",
    description:
      "Zeno detects available memory and drops to 1B-parameter models, lighter effects and reduced motion on machines with 2 GB of RAM.",
    meta: "2 GB · Adaptive",
  },
  {
    icon: "MonitorSmartphone",
    title: "Native installers",
    description:
      "Windows, macOS and Linux builds from one codebase — NSIS .exe, notarised .dmg, and .AppImage, .deb or .rpm packages.",
    meta: "3 platforms",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Pull a local model",
    description:
      "Install Ollama and pull a model. Zeno talks to the Ollama API on localhost — nothing else is involved.",
    command: "ollama pull llama3.2",
    output: [
      "pulling manifest",
      "verifying sha256 digest",
      "success · 2.0 GB · ready",
    ],
  },
  {
    step: "02",
    title: "Start the stack",
    description:
      "One command launches Ollama, the Python backend and the Electron renderer together.",
    command: "npm run start:all",
    output: [
      "ollama     ready  :11434",
      "fastapi    ready  :8000",
      "renderer   ready  :5173",
    ],
  },
  {
    step: "03",
    title: "Ask or speak",
    description:
      "Type, or hold push-to-talk. Tokens stream back over a secured WebSocket from the model on your machine.",
    command: "zeno listen --push-to-talk",
    output: [
      "capturing microphone…",
      "transcribed in 412 ms",
      "streaming · 42 tok/s",
    ],
  },
  {
    step: "04",
    title: "Add a plugin",
    description:
      "Drop a Python file into ~/.jarvis/plugins and register it. Every action it takes still needs your approval.",
    command: "zeno plugins add ./hello.py",
    output: [
      "validating manifest",
      "sandboxed · restricted env",
      "registered · permissions pending",
    ],
  },
];

export const benefits = [
  {
    title: "No network by default",
    description:
      "Inference, history and voice run locally. Outbound requests stay off unless you install a plugin that needs one.",
  },
  {
    title: "Encrypted at rest",
    description:
      "History is a SQLite file on your disk. Turn on AES-256-GCM with a key derived from your password whenever you want.",
  },
  {
    title: "Every action approved",
    description:
      "Plugins run in a restricted sandbox. Shell access, files and network calls each require a per-command confirmation.",
  },
  {
    title: "Runs on the laptop you own",
    description:
      "From a 2 GB dual-core machine to a quad-core desktop, Zeno scales model size and interface effects to the hardware.",
  },
];

export const pricing = {
  note: "The desktop app is free and open source under the MIT License. Pro and Team add hosted backups, support and policy controls — the local core stays free either way.",
  plans: [
    {
      name: "Free",
      price: "$0",
      cadence: "forever",
      description: "The full desktop app for one machine.",
      cta: "Download Zeno",
      href: site.releases,
      recommended: false,
      features: [
        "Everything runs locally",
        "All seven core features",
        "Community support",
        "MIT licensed",
      ],
    },
    {
      name: "Pro",
      price: "$20",
      cadence: "/month",
      description: "For individuals who want their setup backed up and supported.",
      cta: "Start with Pro",
      href: "#faq",
      recommended: true,
      features: [
        "Everything in Free",
        "Hosted config & plugin backups",
        "Offline Whisper bundle",
        "Priority security patches",
        "Email support",
      ],
    },
    {
      name: "Team",
      price: "$100",
      cadence: "/month",
      description: "For teams standardising local AI across devices.",
      cta: "Talk to us",
      href: "#faq",
      recommended: false,
      features: [
        "Everything in Pro",
        "Advanced audit log retention",
        "Custom plugin permission policies",
        "Shared policy templates",
        "Priority support",
      ],
    },
  ],
};

export const faq = [
  {
    question: "Does Zeno send anything to the cloud?",
    answer:
      "No. Inference runs against your own Ollama instance, chat history is stored on your disk, and the desktop app ships with zero telemetry. Outbound requests are off unless you install a plugin that explicitly needs them.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "2 GB of RAM and a dual-core CPU is the minimum; 4 GB and a quad-core CPU is recommended. On low-end hardware Zeno switches to smaller 1B-parameter models and trims interface effects automatically.",
  },
  {
    question: "What do I need installed before running Zeno?",
    answer:
      "Ollama with at least one model pulled, Node.js 18+, and Python 3.10+. Then run npm run setup:complete followed by npm run start:all to launch everything together.",
  },
  {
    question: "How does voice input work?",
    answer:
      "Zeno uses the Web Speech API inside its Chromium-based shell, with push-to-talk and continuous listening modes. You can add fully offline transcription with Whisper or VOSK, plus an optional wake word via Porcupine.",
  },
  {
    question: "Is my chat history encrypted?",
    answer:
      "History is stored locally at ~/.jarvis/history.db. Optional encryption uses a password-derived key (PBKDF2 + AES-256-GCM), so the database can be encrypted at rest without leaving your machine.",
  },
  {
    question: "How are plugins kept safe?",
    answer:
      "Plugins are Python classes registered in ~/.jarvis/plugins and run in a restricted sandbox. Every system action — shell commands, file access, network requests, launching apps — requires your explicit confirmation.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Zeno builds installers for Windows (NSIS .exe), macOS (.dmg; notarization requires code signing), and Linux (.AppImage, .deb, .rpm) from the same codebase. All three builds are produced by npm run build:win, build:mac and build:linux.",
  },
  {
    question: "What is Zeno built with?",
    answer:
      "Ollama for local inference, FastAPI for the Python backend, and React and Electron for the interface. Optional components such as Porcupine's wake-word engine are subject to their own licenses.",
  },
];

export const finalCta = {
  eyebrow: "Open source · MIT",
  headline: "Run your own assistant. Keep your own data.",
  sub: "Clone the repo and pull a model. Zeno is answering in minutes — no account, no cloud, no telemetry.",
  primaryCta: { label: "Download Zeno", href: site.releases },
  secondaryCta: { label: "Read the quickstart", href: "#how-it-works" },
  quickstart: "npm run start:all",
  clone: "git clone https://github.com/Panda-0x01/zeno_main.git",
};

export const footerLinks = {
  product: [
    { label: "Platform", href: "/#features" },
    { label: "Quickstart", href: "/#how-it-works" },
    { label: "Security", href: "/#benefits" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  resources: [
    { label: "Documentation", href: "/#how-it-works" },
    { label: "Architecture", href: "/#features" },
    { label: "Plugin development", href: "/#features" },
    { label: "Releases", href: site.releases },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const social = [
  { label: "GitHub", href: site.repo },
  { label: "Discord", href: "https://discord.com" },
  { label: "X", href: "https://x.com" },
];
