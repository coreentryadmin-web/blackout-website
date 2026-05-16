export const site = {
  name: "BlackOut Trades",
  tagline: "Trade. Execute. Dominate.",
  description:
    "Join BlackOut Trades on Discord — flow, levels, and a focused community built for active traders.",
  logo: "/logo.svg",
  discordInvite: "https://discord.gg/2SJN9jx8S",
  whopUrl: "https://whop.com/blackout-2d9c/",
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
      title: "Focused community",
      description:
        "Serious traders, zero noise. Ask questions, share process, and level up together.",
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
