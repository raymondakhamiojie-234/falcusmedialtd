import React from 'react';
import { Check, Star, Award, Shield, ArrowUpRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenAuditModal }) {
  const points = [
    {
      title: "Strategy first — no guesswork, no hype",
      desc: "Every campaign begins with extensive audience demographic audits, competitor benchmarking, and compliance checks before a single Naira is spent."
    },
    {
      title: "Data-driven decisions, not vanity metrics",
      desc: "Likes and views don't pay bills. We optimize exclusively for revenue, return on ad spend (ROAS), high-ticket lead volume, and monetized view minutes."
    },
    {
      title: "Clear communication & honest reporting",
      desc: "Full transparency with detailed bi-weekly performance summaries showing exactly what is working, what was adjusted, and how revenue was earned."
    },
    {
      title: "Built for long-term sustainable growth",
      desc: "We avoid black-hat shortcuts that trigger platform bans. We install durable organic and paid systems that compound your brand value over years."
    }
  ];

  return (
    <section className="relative py-24 bg-white border-t border-b border-slate-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Value Propositions */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Star size={13} className="text-indigo-600" />
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-8">
              Why Top Creators & Businesses Choose{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Falcus Media Ltd
              </span>
            </h2>

            <div className="space-y-6">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 hover:bg-white shadow-sm transition-all duration-200">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                    <Check size={18} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Certified Partner Card + High Quality Visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Partner Credentials Card */}
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#6366FF] via-[#7B35FF] to-[#9333EA] text-white shadow-2xl relative overflow-hidden">
                
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
                  <Award size={15} />
                  <span>Meta Tech Solution Provider</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
                  Certified Meta & Google Partner Agency
                </h3>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8">
                  As an officially verified tech solution partner, Falcus Media maintains direct lines to internal platform policy teams, priority support escalation portals, and early access to monetization features.
                </p>

                <div className="space-y-3 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                    <span>Direct Meta escalation for account suspensions</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                    <span>High-volume Google & Meta ad billing limits</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                    <span>Dedicated technical account managers</span>
                  </div>
                </div>

                <button
                  onClick={onOpenAuditModal}
                  className="mt-8 w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-bold text-[#6366FF] bg-white hover:bg-gray-100 shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Request Account Growth Audit</span>
                  <ArrowUpRight size={17} />
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
