import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle, 
  MessageCircle, 
  TrendingUp, 
  Music,
  Compass, 
  Video, 
  Target, 
  ShieldCheck, 
  Layers, 
  HelpCircle 
} from 'lucide-react';
import { 
  FacebookIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  TikTokIcon, 
  WhatsAppIcon 
} from '../components/SocialIcons';
import { 
  PLATFORM_SERVICES, 
  generateWhatsAppLink, 
  WHATSAPP_NUMBER 
} from '../data/servicesData';

export default function ServicesPage({ onOpenAuditModal }) {
  const [selectedPlatform, setSelectedPlatform] = useState('Facebook');
  const [selectedOption, setSelectedOption] = useState(
    PLATFORM_SERVICES['Facebook'].options[0]
  );

  const platformIconMap = {
    YouTube: YoutubeIcon,
    Facebook: FacebookIcon,
    TikTok: TikTokIcon,
    Instagram: InstagramIcon,
    WhatsApp: WhatsAppIcon,
    Promotion: TrendingUp
  };

  const agencyServices = [
    {
      icon: Compass,
      title: "Social Media Strategy & Management",
      desc: "Full-service management across Facebook, Instagram, YouTube, and TikTok. Consistent posting calendars, copywriting, audience engagement, and community growth.",
      features: ["Content Calendar & Curation", "Community Management", "Organic Reach Growth", "Cross-Platform Sync"]
    },
    {
      icon: Target,
      title: "Paid Advertising (Meta & Google)",
      desc: "Certified partner ad campaigns optimized strictly for conversions, high Return on Ad Spend (ROAS), and scalable lead generation without wasted budget.",
      features: ["Audience Targeting & Retargeting", "Ad Creative & Copywriting", "A/B Testing Frameworks", "Bi-Weekly ROI Reporting"]
    },
    {
      icon: Video,
      title: "Content Strategy & Short-Form Video",
      desc: "High-retention vertical videos, viral hooks, and storytelling structures specifically crafted to capture watch time on Reels, TikTok, and YouTube Shorts.",
      features: ["Viral 3-Second Hook Strategy", "Vertical Video Production", "Thumbnail Optimization", "Monetization Threshold Pacing"]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business Automation",
      desc: "Connect your social ad traffic directly to automated WhatsApp funnels to capture leads in seconds, answer customer questions, and close sales automatically.",
      features: ["WhatsApp Business API Setup", "Automated Lead Qualification", "Broadcast Campaign Engines", "CRM Integration"]
    },
    {
      icon: ShieldCheck,
      title: "Account Restoration & Strike Clearance",
      desc: "Urgent recovery for permanently disabled Facebook pages, demonetized channels, and payout restriction release through Meta Agency Escalation portals.",
      features: ["Direct Meta Agency Escalation", "Policy Audit & Appeal Defense", "Payout Handshake Linking", "Strike Clearance"]
    },
    {
      icon: TrendingUp,
      title: "Influencer Campaign Management",
      desc: "End-to-end influencer partnerships connecting Nigerian brands with verified content creators to amplify reach, trust, and direct product sales.",
      features: ["Creator Vetting & Matching", "Campaign Contract Management", "Deliverable Tracking", "Sales Attribution Analytics"]
    }
  ];

  const processSteps = [
    { step: "01", title: "Diagnostic Audit", desc: "We analyze your page status, past strikes, ad metrics, or content bottlenecks." },
    { step: "02", title: "Tailored Strategy", desc: "We develop a custom action plan and transparent pricing for your specific goals." },
    { step: "03", title: "Direct Execution", desc: "Our team implements campaigns or escalates appeals via official agency channels." },
    { step: "04", title: "Compounding Growth", desc: "Continuous monitoring, reporting, and optimization to ensure sustained profit." }
  ];

  const faqs = [
    {
      q: "How does the WhatsApp Service Dispatch work?",
      a: "When you select a platform and service from the dropdown and click 'Request on WhatsApp', an official pre-filled WhatsApp message opens directly on your phone or desktop to our support line (+234 903 525 0086) with zero account creation required."
    },
    {
      q: "How long does account restoration take?",
      a: "Typical policy appeals and payout restriction fixes take between 7 to 21 days depending on whether escalation requires manual Meta engineering review. We boast an overall 95% resolution success rate."
    },
    {
      q: "Do I need to give you my personal passwords?",
      a: "No! As a certified Meta Tech Solution Provider and agency, we request access through official Agency Partner handshakes or Business Manager access. We will never ask for your personal account passwords."
    },
    {
      q: "Can you help unlock monetization for accounts outside Nigeria?",
      a: "Yes, we support creators across Nigeria, Ghana, Kenya, South Africa, the UK, and the US with cross-border monetization profiles and international creator setups."
    }
  ];

  const handleLaunchWhatsApp = () => {
    const link = generateWhatsAppLink(selectedPlatform, selectedOption);
    window.open(link, '_blank');
  };

  return (
    <div className="bg-[#0A0A0A] text-white">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#10132E] via-[#0A0A0A] to-[#0A0A0A] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} />
            <span>FULL-SERVICE AGENCY SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Premium Social Media & <span className="bg-gradient-to-r from-[#6366FF] to-[#A855F7] bg-clip-text text-transparent">Growth Services</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From strategic account management and performance paid ads to high-urgency strike clearance and WhatsApp automation.
          </p>
        </div>
      </section>

      {/* 2. Interactive Instant WhatsApp Service Dispatch (Core Feature) */}
      <section className="py-20 bg-[#0E1022] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#161936] to-[#0D0F20] border border-indigo-500/30 shadow-2xl">
            
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
                <Sparkles size={13} />
                <span>INSTANT WHATSAPP DISPATCH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Order a Service or Request Pricing
              </h2>
              <p className="text-sm text-gray-300">
                Pick your platform and specific requirement. Our 24/7 WhatsApp desk receives your inquiry with zero account creation required.
              </p>
            </div>

            {/* Platform Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {Object.keys(PLATFORM_SERVICES).map((pKey) => {
                const Icon = platformIconMap[pKey] || Sparkles;
                const isSelected = selectedPlatform === pKey;

                return (
                  <button
                    key={pKey}
                    onClick={() => {
                      setSelectedPlatform(pKey);
                      setSelectedOption(PLATFORM_SERVICES[pKey].options[0]);
                    }}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-lg shadow-indigo-600/30 scale-105'
                        : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{pKey}</span>
                  </button>
                );
              })}
            </div>

            {/* Dropdown & Submit */}
            <div className="max-w-xl mx-auto bg-[#0A0A0A] border border-white/15 rounded-2xl p-6 sm:p-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Select {selectedPlatform} Service
              </label>

              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#14172E] border border-white/20 text-white font-medium text-sm focus:outline-none focus:border-indigo-400 mb-6 cursor-pointer"
              >
                {PLATFORM_SERVICES[selectedPlatform].options.map((opt, i) => (
                  <option key={i} value={opt} className="bg-[#121424] text-white">
                    {opt}
                  </option>
                ))}
              </select>

              <button
                onClick={handleLaunchWhatsApp}
                className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-600/30 active:scale-95 transition-all cursor-pointer text-sm sm:text-base"
              >
                <MessageCircle size={20} />
                <span>Request Service on WhatsApp (+234 903 525 0086)</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. 6 Core Agency Solutions Detailed Cards */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Comprehensive Growth Systems
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              We design every campaign to move the needle where it matters: followers, conversions, and unlocked revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencyServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/20">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/5">
                      {svc.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle size={13} className="text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <button
                      onClick={onOpenAuditModal}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Our 4-Step Working Process */}
      <section className="py-20 bg-[#0E1020] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">HOW WE OPERATE</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Our Execution Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 relative">
                <div className="text-3xl font-black text-indigo-400/40 mb-3">{item.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Got Questions About Our Services?</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">{f.q}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
