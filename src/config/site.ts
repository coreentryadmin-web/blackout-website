export const site = {
  name: "BlackOut Trades",
  tagline: "Trade. Execute. Dominate.",
  description:
    "We’re building more than a chat room — a serious trading community on Discord where operators share flow, levels, and execution in real time.",
  logo: "/favicon.svg",
  heroImage: "/logo.png",
  whopLogo: "/whop-logo.jpg",
  discordInvite: "https://discord.gg/2SJN9jx8S",
  whopUrl: "https://whop.com/blackout-2d9c/",
  marquee: [
    "DAY TRADING",
    "SWINGS",
    "LEAPs",
    "LIVE FLOW",
    "LEVELS",
    "EXECUTION",
    "COMMUNITY",
    "ACCOUNTABILITY",
    "DISCORD",
    "WHOP",
  ],
  tradingStyles: [
    {
      id: "day",
      title: "Day Trading",
      tag: "Intraday",
      description:
        "Fast tape, tight risk, same-day execution. We break down openings, momentum, and reversals while markets are live — not after the bell.",
    },
    {
      id: "swing",
      title: "Swings",
      tag: "Multi-day",
      description:
        "Hold the move, not the noise. Swing setups with clear invalidation, weekly levels, and patience baked into every plan.",
    },
    {
      id: "leaps",
      title: "LEAPs",
      tag: "Long-dated options",
      description:
        "Defined-risk exposure with time on your side. We discuss structure, Greeks context, and how LEAPs fit a broader portfolio — education first.",
    },
  ],
  community: {
    headline: "We’re here to build a community — not just post alerts.",
    subhead:
      "BlackOut is a focused operator base: live voice, shared screens, honest breakdowns, and people who actually want to get better together.",
    pillars: [
      { title: "Discord-first", text: "Everything happens in-server — flow, levels, and conversation in one place." },
      { title: "Zero circus", text: "No lambos, no fake P&L. Process, discipline, and real market talk." },
      { title: "Show your work", text: "Share setups, mistakes, and wins. Accountability is the edge." },
      { title: "Level up daily", text: "From first chart to LEAPs — grow with traders who execute." },
    ],
    callout: "Pull up. Plug in. Build with us.",
  },
  features: [
    {
      title: "Live market flow",
      description:
        "Real-time commentary and structure so you know what matters before you click buy or sell.",
    },
    {
      title: "Levels & setups",
      description:
        "Clear zones, invalidation, and context — not random alerts. Trade with a plan.",
    },
    {
      title: "Operator culture",
      description:
        "Serious traders, zero noise. Ask questions, debate thesis, and sharpen execution together.",
    },
    {
      title: "Membership perks",
      description:
        "Unlock premium channels, deeper breakdowns, and member-only resources on Whop.",
    },
  ],
  faq: [
    {
      question: "Is this financial advice?",
      answer:
        "No. Everything shared is for education and discussion only. You are responsible for your own trading decisions.",
    },
    {
      question: "Do you cover day trading and swings?",
      answer:
        "Yes. We discuss day trading, swing trades, and LEAPs — how each fits different timeframes, risk, and conviction.",
    },
    {
      question: "How do I join Discord?",
      answer:
        "Click Join Discord on this page. You’ll land in the server — follow any onboarding steps pinned in the welcome channel.",
    },
    {
      question: "What do I get on Whop?",
      answer:
        "Paid tiers unlock premium content and channels. Visit the Whop store for current plans and pricing.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Memberships are managed through Whop. Cancel or change your plan from your Whop account settings.",
    },
  ],
  contactEmail: "support@blackouttrades.com",
  social: {} as Record<string, string>,
  disclaimer:
    "BlackOut Trades provides educational content and community discussion only. Nothing on this site or in our channels constitutes financial, investment, or legal advice. Trading involves substantial risk of loss.",
} as const;
