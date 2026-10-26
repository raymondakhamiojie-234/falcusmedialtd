import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, Award, Shield, Target, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenAuditModal }) {
  const highlights = [
    {
      title: "Expertise You Can Trust",
      desc: "Certified Meta Tech Solution Provider & Google Partner with direct platform escalation desks."
    },
    {
      title: "Results-Driven Approach",
      desc: "We focus exclusively on revenue, monetization unlocks, and converting leads—never vanity numbers."
    },
    {
      title: "Tailored Growth Solutions",
      desc: "Customized playbooks for Nigerian influencers, creators, e-commerce stores, and service SMEs."
    }
  ];

  const industries = [
    "E-commerce",
    "Beauty & Fashion",
    "Real Estate",
    "Education",
    "SMEs & Startups",
    "Service-Based"
  ];

  return (
    <section id="about" className="relative py-24 bg-white border-t border-b border-slate-100 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Collage inspired by reference image */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Primary large image: Creative team in modern office */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-1.5">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Falcus Media creative marketing team strategizing social campaign"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary overlapping image: Creators collaborating with mobile screens */}
              <div className="relative sm:absolute -bottom-8 sm:-bottom-10 -right-2 sm:-right-8 z-20 w-full sm:w-72 mt-4 sm:mt-0 rounded-2xl overflow-hidden border-2 border-indigo-200 shadow-2xl bg-white p-1.5">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Influencers analyzing viral reels and creator engagement"
                  className="w-full h-48 sm:h-56 object-cover rounded-xl"
                />
                
                {/* Floating pill badge on image */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-2 flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-900">95% Success Rate</span>
                  </div>
                  <span className="text-[11px] text-indigo-600 font-semibold">Meta Verified</span>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="hidden sm:flex absolute -top-6 -left-6 z-20 bg-gradient-to-br from-[#6366FF] to-[#7B35FF] text-white p-4 rounded-2xl shadow-xl flex-col items-center justify-center border border-white/20">
                <Award size={24} className="mb-1" />
                <span className="text-xs font-extrabold uppercase tracking-wider">Top Rated</span>
                <span className="text-[10px] text-white/80">Agency 2025</span>
              </div>

            </div>
          </div>

          {/* Right Column: Copy, Checklist, and 30M+ Metric (matching reference design) */}
          <div className="lg:col-span-6 pt-6 sm:pt-0">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>ABOUT US</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              Transforming Businesses & Creators Through{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
              At Falcus Media Ltd, we’re more than just a social media marketing agency—we’re your strategic partner in building profitable digital connections. 
              Our mission is to empower African creators and modern businesses of all sizes to reach their full potential by turning audience attention into predictable, compounding revenue.
            </p>

            {/* Bullet Points with Clean Checkmarks (Matching reference mockup) */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3.5 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Big Stat & Learn More CTA (Matching reference mockup) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-slate-950">
                  30M+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  Total Audience Reached
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>

        </div>

        {/* Industries We Serve Strip */}
        <div className="mt-20 pt-10 border-t border-slate-200/80">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-slate-900">Industries We Accelerate</h3>
            <p className="text-xs text-slate-500">Tailored digital campaigns across high-growth verticals</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {industries.map((ind, i) => (
              <div 
                key={i}
                className="px-4 py-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/70 text-center text-sm font-medium text-slate-700 hover:text-slate-950 hover:shadow-sm transition-all duration-200"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
