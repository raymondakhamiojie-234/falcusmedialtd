import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle,
  Play,
  Sparkles,
  Award
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/servicesData';

export default function Hero({ onOpenAuditModal }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroPillars = [
    {
      badge: "CREATOR MONETIZATION & ADS",
      title: "Elevate Your Brand & Creator Earnings With Social Media Excellence",
      subtitle: "We help Nigerian & global creators turn attention into $10K+ monthly revenue, resolve restricted payouts, and build scalable growth engines.",
      highlight: "Social Media Excellence",
      cta: "Get Started Now",
      statNumber: "₦50M+",
      statLabel: "Revenue Restored & Scaled"
    },
    {
      badge: "ACCOUNT RESTORATION SPECIALISTS",
      title: "Recover Suspended Accounts & Unlock Restricted Monetization Fast",
      subtitle: "Official Meta Tech Solution Provider with direct escalation channels. We clear policy strikes, fix demonetization, and reinstate accounts with a 95% success rate.",
      highlight: "Restricted Monetization Fast",
      cta: "Audit My Account",
      statNumber: "95%",
      statLabel: "Case Resolution Success Rate"
    },
    {
      badge: "FULL-SERVICE PERFORMANCE MARKETING",
      title: "Scale Your Social Media Empire With Data-Driven Strategies",
      subtitle: "Stop burning ad budget on vanity metrics. We run high-converting Meta & Google campaigns, vertical video hooks, and automated WhatsApp sales funnels.",
      highlight: "Data-Driven Strategies",
      cta: "Explore Our Systems",
      statNumber: "30M+",
      statLabel: "Total Audience Reached"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroPillars.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroPillars.length]);

  const current = heroPillars[activeSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060818] via-[#0A0D28] to-[#0A0A0A] pt-12 pb-24 md:pt-16 md:pb-32">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#6366FF]/20 via-[#7B35FF]/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Partner Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-gray-200 tracking-wide uppercase">
              {current.badge}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
            <Award size={14} className="text-indigo-400" />
            <span>Meta Tech Solution Provider & Google Partner</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Elevate Your Brand With{' '}
            <span className="bg-gradient-to-r from-[#818cf8] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Social Media Excellence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            {current.subtitle}
          </p>

          {/* Dual Pill CTA Buttons (Inspired by uploaded reference mockup) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenAuditModal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5255F3] hover:to-[#6E28E4] shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>{current.cta}</span>
              <ArrowUpRight size={18} />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Interactive Slide Pills */}
          <div className="flex items-center justify-center space-x-2 mb-12">
            {heroPillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === index
                    ? 'w-10 bg-gradient-to-r from-[#6366FF] to-[#8B5CF6]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Central Visual Composition with Floating UI Cards & Social Badges */}
        {/* Exactly inspired by the uploaded mockup composition */}
        <div className="relative max-w-5xl mx-auto pt-6 pb-4">
          
          {/* Main Backdrop Card for Person & Laptop */}
          <div className="relative mx-auto rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-2 sm:p-4 backdrop-blur-xl shadow-2xl shadow-indigo-950/50">
            
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#12163A] via-[#0E1026] to-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
              
              {/* Creator with Laptop Photography */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                alt="Digital creator smiling with laptop celebrating social media success"
                className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />

              {/* Gradient lighting mask over the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-transparent via-[#060818]/60 to-[#0A0A0A] pointer-events-none" />

              {/* Centered Overlay Quote */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left max-w-lg z-20">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold mb-2">
                  <CheckCircle size={13} />
                  <span>Verified Creator Growth Results</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                  "Falcus Media scaled our audience from 50K to 1M+ reach."
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Average payout recovery timeline: <span className="text-white font-semibold">14 days</span>
                </p>
              </div>

            </div>
          </div>

          {/* Floating Social Icons (matching the circular floating badge concept in uploaded image) */}
          
          {/* Facebook Badge */}
          <div className="absolute -top-3 left-4 sm:left-12 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1877F2] p-2.5 flex items-center justify-center shadow-lg shadow-blue-600/40 animate-float-slow z-30">
            <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>

          {/* Instagram Badge */}
          <div className="absolute top-1/4 -right-2 sm:-right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] p-2.5 flex items-center justify-center shadow-lg shadow-pink-600/40 animate-float-reverse z-30">
            <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>

          {/* YouTube Badge */}
          <div className="absolute -bottom-4 right-12 sm:right-24 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FF0000] p-3 flex items-center justify-center shadow-lg shadow-red-600/40 animate-float-slow z-30">
            <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>

          {/* TikTok Badge */}
          <div className="absolute top-1/2 -left-2 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black border border-white/20 p-3 flex items-center justify-center shadow-lg shadow-purple-600/40 animate-float-reverse z-30">
            <span className="text-white font-black text-lg">d</span>
          </div>

          {/* WhatsApp Badge */}
          <div className="absolute -bottom-2 left-16 sm:left-32 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] p-3 flex items-center justify-center shadow-lg shadow-emerald-600/40 animate-float-slow z-30">
            <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
          </div>

          {/* Floating Glassmorphism Metric Card 1: Top-Right "Realtime Reach + Sparkline" */}
          <div className="hidden md:block absolute -top-6 right-8 lg:right-16 bg-[#16192E]/90 border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float-slow z-30 w-52">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Audience Growth</span>
              <span className="flex items-center text-emerald-400 font-bold">+34.8%</span>
            </div>
            <div className="text-2xl font-extrabold text-white mb-2">1,248,600</div>
            {/* Sparkline SVG */}
            <svg className="w-full h-8 stroke-emerald-400 fill-none" viewBox="0 0 100 24">
              <path d="M0 20 Q 20 18, 35 12 T 60 14 T 80 5 T 100 2" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating Glassmorphism Metric Card 2: Top-Left "Pie Chart Breakdown" */}
          <div className="hidden md:block absolute -top-8 left-8 lg:left-14 bg-[#16192E]/90 border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float-reverse z-30 w-56">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-medium">Conversion Rate</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300">ROAS 4.8x</span>
            </div>
            <div className="flex items-center space-x-3">
              {/* Mini SVG Donut Chart */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="stroke-gray-700" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="stroke-indigo-500" strokeDasharray="75, 100" strokeWidth="4" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">75%</div>
              </div>
              <div className="text-xs">
                <div className="text-white font-bold text-sm">₦5.4M / mo</div>
                <div className="text-gray-400 text-[11px]">Organic + Ads Sales</div>
              </div>
            </div>
          </div>

          {/* Floating Metric Card 3: Bottom-Right "Revenue Restored" */}
          <div className="hidden lg:block absolute -bottom-8 right-6 bg-[#16192E]/90 border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float-reverse z-30 w-64">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Payout Security</span>
              <span className="text-emerald-400 font-bold">100% Cleared</span>
            </div>
            <div className="text-xl font-extrabold text-white">₦2,500,000 Payout</div>
            <p className="text-[11px] text-gray-300 mt-1">
              Restored via Meta Agency Management portal in 14 days.
            </p>
          </div>

        </div>

      </div>

      {/* Stats Counter Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">95%</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Issue Resolution Rate</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-1">5+ Years</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Platform Management</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">₦50M+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Revenue Restored & Scaled</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-1">30M+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Total Audience Reached</div>
          </div>
        </div>
      </div>

    </section>
  );
}
