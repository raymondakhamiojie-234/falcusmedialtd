import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  TrendingUp, 
  Lightbulb, 
  Award, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export default function AboutPage({ onOpenAuditModal }) {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with total transparency. We never recommend vanity tactics that risk accounts or waste client capital."
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Obsessed with measurable business outcomes: unlocked payouts, ROAS, verified page badges, and qualified customer leads."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Full visibility into ad dashboards, compliance escalation steps, and algorithm adaptation timelines."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of Meta, YouTube, and TikTok policy shifts so our creators remain safe and ahead of the curve."
    }
  ];

  const pillars = [
    {
      title: "Protection, not punishment",
      desc: "Safeguarding creators from automated strikes, wrongful suspensions, and algorithmic suppression via certified Meta partner channels."
    },
    {
      title: "Monetization, not guesswork",
      desc: "Clearing payout holds, setting up compliant payment profiles, and expanding in-stream ads and branded sponsorship deals."
    },
    {
      title: "Systems, not luck",
      desc: "Replacing random viral hopes with proven vertical video structures, audience retention hooks, and automated WhatsApp CRM funnels."
    }
  ];

  const industries = [
    { name: "Content Creators & Influencers", desc: "Monetization unlocks, account restoration, brand partnership kits." },
    { name: "E-Commerce & Retail", desc: "High-ROAS Meta & Google conversion campaigns and catalog ads." },
    { name: "Beauty & Fashion", desc: "Visual storytelling, viral TikTok hooks, and influencer seeding." },
    { name: "Real Estate & Property", desc: "High-ticket lead generation funnels and WhatsApp automated qualification." },
    { name: "Education & Coaching", desc: "Course sales, community building, and webinar lead generation." },
    { name: "SMEs & Startups", desc: "Sustainable omnichannel social media management and brand positioning." }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white">
      
      {/* 1. Page Header Banner */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0E1026] via-[#0A0A0A] to-[#0A0A0A] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-5">
            <Award size={14} />
            <span>GROWTH PARTNER FOR AFRICA'S CREATOR ECONOMY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            About <span className="bg-gradient-to-r from-[#6366FF] to-[#A855F7] bg-clip-text text-transparent">Falcus Media Ltd</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A modern digital marketing agency built for brands and content creators that demand measurable growth—not vanity metrics. We combine technical platform access, creative storytelling, and data systems to deliver scalable outcomes.
          </p>
        </div>
      </section>

      {/* 2. Visual Story & Background */}
      <section className="py-20 bg-[#0E1020] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">OUR ORIGIN & PURPOSE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                Built to Turn Talent into Sustainable Digital Wealth
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Falcus Media Ltd was founded to solve a major crisis in the African digital space: talented creators producing millions of views while struggling with account bans, demonetization, or burning advertising budgets without sales.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over the past 5+ years, we have achieved an unprecedented <strong>95% success rate</strong> in recovering permanently suspended creator pages, unfreezing millions of Naira in trapped ad revenues, and helping creators scale into verified digital businesses.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-2xl font-black text-indigo-400">95%</div>
                  <div className="text-[11px] text-gray-400 uppercase font-bold mt-1">Resolution Rate</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-2xl font-black text-emerald-400">5+ Yrs</div>
                  <div className="text-[11px] text-gray-400 uppercase font-bold mt-1">Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-2xl font-black text-pink-400">30M+</div>
                  <div className="text-[11px] text-gray-400 uppercase font-bold mt-1">Total Reach</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 p-2">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                  alt="Falcus Media marketing strategists analyzing live data"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Mission, Vision, and Core Values */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-[#121424] border border-white/10 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To help African creators and businesses grow sustainably through ethical, data-backed digital marketing strategies that deliver real, measurable revenue.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-[#121424] border border-white/10 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To become Africa's premier creator growth accelerator, giving everyday content creators the fastest, most reliable path to fame, monetization, and generational wealth.
              </p>
            </div>

            {/* Credibility */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#6366FF] to-[#7B35FF] text-white shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Partner</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Official Meta Tech Solution Provider & Google Partner with dedicated agency escalation portals for instant resolution of policy violations and payouts.
              </p>
            </div>

          </div>

          {/* Core Values 4-Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">Our Core Operating Values</h2>
            <p className="text-sm text-gray-400 mt-2">The principles that govern every client campaign and partnership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>

          {/* The 3 Pillars */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121424] border border-white/10 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                The Falcus Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Why thousands of creators trust our agency frameworks over trial and error
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pil, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Pillar 0{idx + 1}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{pil.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="py-20 bg-[#0E1020] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-white mb-2">Industries We Accelerate</h2>
            <p className="text-sm text-gray-400">Tailored digital campaigns across high-growth verticals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all">
                <div className="flex items-center space-x-2 text-indigo-400 font-bold text-base mb-2">
                  <CheckCircle2 size={16} />
                  <span>{item.name}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Bottom Page Action */}
      <section className="py-16 bg-[#0A0A0A] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Want to Work with Falcus Media Ltd?
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-8">
            Whether you need urgent account recovery, monetization unlock, or an ongoing social marketing team, we are ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAuditModal}
              className="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all text-sm cursor-pointer"
            >
              Book Free Growth Audit
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-sm cursor-pointer"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
