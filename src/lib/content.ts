// ---------------------------------------------------------------------------
// Site content & config for the Codeleaf marketing site.
//
// This is the single place to edit copy, pricing and contact details.
// Anything wrapped in [BRACKETS] is a placeholder carried over from the
// original design and should be replaced with real information before
// launch.
// ---------------------------------------------------------------------------

/** Brand accent color. Pick one of ACCENT_OPTIONS or use any hex value. */
export const ACCENT = "#1F7A4C";

/** Accent color choices offered in the original design. */
export const ACCENT_OPTIONS = ["#1F7A4C", "#0F766E", "#2563EB", "#C2410C"] as const;

export const SITE = {
  name: "Codeleaf",
  tagline: "Websites that grow from your ideas.",
  description:
    "We design and build custom websites around what you want — your style, your colors, your goals. You tell us your vision, we turn it into a fast, modern site your customers will love.",
};

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How we work" },
  { href: "#tools", label: "Tools" },
  { href: "#work", label: "Our work" },
  { href: "#pricing", label: "Packages" },
];

export const SERVICES = [
  {
    num: "01",
    title: "Business websites",
    text: "Professional sites for shops, restaurants, clinics, schools and services, designed around your brand.",
  },
  {
    num: "02",
    title: "Online stores",
    text: "Sell your products online with a store that is easy for you to manage and easy for customers to use.",
  },
  {
    num: "03",
    title: "Landing pages",
    text: "Focused one-page sites for promos, events and product launches that turn visitors into customers.",
  },
  {
    num: "04",
    title: "Website redesigns",
    text: "Give an old or slow website a fresh, modern look that works perfectly on phones.",
  },
  {
    num: "05",
    title: "Web systems",
    text: "Custom tools like booking, inventory and reservation systems built for how your business runs.",
  },
  {
    num: "06",
    title: "Maintenance & hosting",
    text: "We keep your site updated, secure and online, so you can focus on your business.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Listen",
    text: "We talk about your business, your goals, and the styles and colors you like.",
  },
  {
    num: "02",
    title: "Design",
    text: "We create a design based on your preferences and refine it with your feedback.",
  },
  {
    num: "03",
    title: "Build",
    text: "We turn the approved design into a fast, mobile-friendly website.",
  },
  {
    num: "04",
    title: "Launch & support",
    text: "We put your site online and stay available for updates and support.",
  },
] as const;

export const TOOL_GROUPS = [
  { title: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Mobile", tools: ["React Native", "Android", "iOS"] },
  { title: "Backend", tools: ["Node.js", "NestJS", "Laravel", "PHP"] },
  {
    title: "Database & Infrastructure",
    tools: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "AWS"],
  },
] as const;

/** Replace with real project screenshots/case studies once available. */
export const PROJECTS = [
  { title: "[PROJECT NAME]", type: "[Business website · Industry]", tint: "#E4EEE6" },
  { title: "[PROJECT NAME]", type: "[Online store · Industry]", tint: "#E6ECF2" },
  { title: "[PROJECT NAME]", type: "[Landing page · Industry]", tint: "#F2EDE3" },
] as const;

export const PRICING = {
  starter: {
    name: "Starter",
    description: "For small businesses getting online for the first time.",
    price: "₱ [YOUR PRICE]",
    features: ["Up to 3 pages", "Mobile-friendly design", "Contact form & Facebook link", "[DELIVERY TIME]"],
    cta: "Choose Starter",
  },
  business: {
    name: "Business",
    badge: "Most popular",
    description: "A complete website designed fully around your brand.",
    price: "₱ [YOUR PRICE]",
    features: [
      "Up to 8 pages",
      "Custom design from your preferences",
      "Basic SEO setup",
      "Domain & hosting setup",
      "[DELIVERY TIME]",
    ],
    cta: "Choose Business",
  },
  custom: {
    name: "Custom",
    description: "Online stores, booking systems and bigger projects.",
    price: "Let's talk",
    features: [
      "E-commerce or web systems",
      "Unlimited pages",
      "Integrations (payments, GCash, Maya)",
      "Ongoing support",
    ],
    cta: "Request a quote",
  },
  maintenanceNote: "Monthly maintenance & hosting plans available from ₱ [YOUR PRICE] / month.",
};

export const CONTACT = {
  email: "[YOUR EMAIL]",
  phone: "[YOUR NUMBER]",
  facebook: "facebook.com/[YOUR PAGE]",
  location: "[YOUR CITY], Philippines",
};

export const CONTACT_OPTIONS = [
  "Business website",
  "Online store",
  "Landing page",
  "Website redesign",
  "Something else",
];

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Codeleaf. Websites grown around your ideas.`,
};
