import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Basic",
    price: 10,
    period: "month",
    features: [
      "50 AI Thumbnail",
      "Basic Templates",
      "Standard Resolution",
      "No watermark",
      "Email Supports",
    ],
    mostPopular: true,
  },
  {
    name: "Pro",
    price: 40,
    period: "month",
    features: [
      "Unlimited AI Thumbnails",

      "Premium Templates",

      "4K Resolution",

      "A/B Testing Tools",

      "Priority Support",

      "Custom Fonts",

      "Brand Kit Analysis",
    ],
    mostPopular: false,
  },
  {
    name: "Enterprise",
    price: 100,
    period: "month",
    features: [
      "Everything in Pro",

      "API Access",

      "Team Collaboration",

      "Custom Branding",

      "Dedicated Account Manager",
    ],
    mostPopular: false,
  },
];
