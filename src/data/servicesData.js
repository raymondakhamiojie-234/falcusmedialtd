export const WHATSAPP_NUMBER = "+2349035250086";
export const SUPPORT_EMAIL = "info@falcusmedia.com";

// Interactive service options per platform
export const PLATFORM_SERVICES = {
  YouTube: {
    color: "from-red-500 to-red-600",
    badgeBg: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "Youtube",
    options: [
      "Buy YouTube Channel (Monetized)",
      "Buy 4,000 Watch Hours",
      "Buy 1,000+ Subscribers",
      "YouTube RPM & Ad Optimization",
      "Channel Copyright Strike Clearance"
    ]
  },
  Facebook: {
    color: "from-blue-600 to-indigo-600",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "Facebook",
    options: [
      "Buy Verified Facebook Page",
      "Buy Organic Facebook Followers",
      "Buy Video Views & 60K Min Watch Time",
      "Verify Your Profile / Blue Badge",
      "Demonetization & Payout Restriction Fix",
      "Account Suspension Appeal"
    ]
  },
  TikTok: {
    color: "from-pink-500 via-rose-500 to-purple-600",
    badgeBg: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    icon: "Music",
    options: [
      "Buy UK TikTok Account (Creativity Program)",
      "Buy TikTok Real Likes & Views",
      "TikTok Live Stream Unlock",
      "Creator Rewards Program Activation"
    ]
  },
  Instagram: {
    color: "from-purple-600 via-pink-600 to-orange-500",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "Instagram",
    options: [
      "Buy Aged Instagram Account",
      "Buy Real Instagram Followers",
      "Buy Post & Reel Likes",
      "Instagram Blue Badge Verification",
      "Disabled Account Restoration"
    ]
  },
  WhatsApp: {
    color: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: "MessageCircle",
    options: [
      "Link Business WhatsApp to API",
      "Automated WhatsApp Sales Funnel",
      "Customer Lead Capture & Broadcast",
      "CRM & Payment Integration"
    ]
  },
  Promotion: {
    color: "from-indigo-600 to-purple-700",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: "TrendingUp",
    options: [
      "Targeted Meta Ad Campaign",
      "Google Search & Display Ads",
      "Influencer Shoutout & Collaboration",
      "Short-Form Video Virality Push"
    ]
  }
};

// 9-card checkerboard visual grid for "Who We Are, What We Do" inspired by reference image
export const CHECKERBOARD_ITEMS = [
  {
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Social media team collaborating in modern creative office",
    tag: "Creative Strategy"
  },
  {
    type: "card",
    theme: "purple",
    title: "Social Media Strategy Development",
    description: "We analyze your audience, content bottlenecks, and business goals to develop a personalized, high-retention social media growth blueprint.",
    linkText: "Read More",
    icon: "Compass"
  },
  {
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    alt: "Content creators and influencers collaborating on mobile growth",
    tag: "Creator Growth"
  },
  {
    type: "card",
    theme: "dark",
    title: "Content Creation & Short-Form Video",
    description: "Capture attention with visually compelling vertical videos, viral hooks, and high-impact reels crafted specifically for Facebook, Instagram, and TikTok.",
    linkText: "Read More",
    icon: "Video"
  },
  {
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    alt: "Young woman creator reviewing social media analytics on laptop",
    tag: "High Engagement"
  },
  {
    type: "card",
    theme: "purple",
    title: "Paid Social Advertising (Meta & Google)",
    description: "Certified Meta & Google partner campaigns designed to convert viewers into paying leads with maximum Return on Ad Spend (ROAS).",
    linkText: "Read More",
    icon: "Target"
  },
  {
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    alt: "Marketing analyst analyzing conversion multi-screen dashboards",
    tag: "Performance Data"
  },
  {
    type: "card",
    theme: "dark",
    title: "Account Restoration & Compliance",
    description: "Specialized recovery for suspended pages, demonetized channels, policy strikes, and payout restrictions via our direct Meta Agency escalation channels.",
    linkText: "Read More",
    icon: "ShieldCheck"
  },
  {
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    alt: "Agency consultant meeting with client to review revenue scale",
    tag: "Revenue Scaling"
  }
];

export const generateWhatsAppLink = (platform, service) => {
  const text = encodeURIComponent(
    `🎯 FALCUS MEDIA SERVICE INQUIRY\n\n` +
    `Hello! I am on the Falcus Media website and would like to request assistance with:\n` +
    `• Platform: ${platform}\n` +
    `• Service: ${service}\n\n` +
    `Please provide me with pricing, turnaround time, and next steps.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${text}`;
};
