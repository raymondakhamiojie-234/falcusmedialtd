import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Compass, 
  Video, 
  Target, 
  ShieldCheck, 
  MessageCircle, 
  TrendingUp, 
  Music,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { 
  FacebookIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  TikTokIcon, 
  WhatsAppIcon 
} from './SocialIcons';
import { 
  CHECKERBOARD_ITEMS, 
  PLATFORM_SERVICES, 
  generateWhatsAppLink 
} from '../data/servicesData';

export default function ServicesSection({ onOpenAuditModal, onViewCaseStudies }) {
  const [selectedPlatform, setSelectedPlatform] = useState('Facebook');
  const [selectedOption, setSelectedOption] = useState(
    PLATFORM_SERVICES['Facebook'].options[0]
  );

  const iconMap = {
    Compass: Compass,
    Video: Video,
    Target: Target,
    ShieldCheck: ShieldCheck
  };

  const platformIconMap = {
    YouTube: YoutubeIcon,
    Facebook: FacebookIcon,
    TikTok: TikTokIcon,
    Instagram: InstagramIcon,
    WhatsApp: WhatsAppIcon,
    Promotion: TrendingUp
  };

  const handlePlatformChange = (pKey) => {
    setSelectedPlatform(pKey);
    setSelectedOption(PLATFORM_SERVICES[pKey].options[0]);
  };

  const handleLaunchWhatsApp = () => {
    const link = generateWhatsAppLink(selectedPlatform, selectedOption);
    window.open(link, '_blank');
  };

  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC] border-b border-slate-100 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching reference mockup "Who We Are, What We Do") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Who We Are, What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-3">
              Full-funnel digital marketing, creator monetization, and account recovery systems designed to deliver measurable scale.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="self-start md:self-auto inline-flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>View All 25+ Case Studies</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* 9-Card Checkerboard Visual Grid (Exactly as seen in the user's uploaded reference design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CHECKERBOARD_ITEMS.map((item, index) => {
            if (item.type === 'image') {
              return (
                <div 
                  key={index}
                  className="group relative h-80 lg:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                      {item.tag}
                    </span>
                  </div>

                  {/* Caption on hover */}
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 font-medium">
                    {item.alt}
                  </div>
                </div>
              );
            }

            // Text/Feature Card
            const Icon = iconMap[item.icon] || Compass;
            const isPurpleTheme = item.theme === 'purple';

            return (
              <div
                key={index}
                className={`relative h-80 lg:h-96 rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1.5 shadow-md ${
                  isPurpleTheme
                    ? 'bg-[#EEF2FF] border-indigo-200 hover:border-indigo-300 shadow-indigo-100/50'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-slate-100/50'
                }`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${
                    isPurpleTheme
                      ? 'bg-gradient-to-tr from-[#6366FF] to-[#8B5CF6] text-white shadow-indigo-400/30'
                      : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                  }`}>
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Falcus Media
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Direct WhatsApp Service Selector Widget */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/50">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
              <Sparkles size={13} />
              <span>INSTANT SERVICE DISPATCH</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 mb-3">
              Need a Specific Account or Growth Service?
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600">
              Select your platform and requested service below. Clicking request instantly routes your inquiry to our 24/7 dedicated WhatsApp support desk with full pricing details.
            </p>
          </div>

          {/* Platform Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            {Object.keys(PLATFORM_SERVICES).map((pKey) => {
              const info = PLATFORM_SERVICES[pKey];
              const Icon = platformIconMap[pKey] || Sparkles;
              const isSelected = selectedPlatform === pKey;

              return (
                <button
                  key={pKey}
                  onClick={() => handlePlatformChange(pKey)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-lg shadow-indigo-600/30 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                  }`}
                >
                  <Icon size={16} />
                  <span>{pKey}</span>
                </button>
              );
            })}
          </div>

          {/* Service Dropdown & Direct Launch */}
          <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                Select {selectedPlatform} Service Option
              </label>

              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-medium text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
              >
                {PLATFORM_SERVICES[selectedPlatform].options.map((opt, i) => (
                  <option key={i} value={opt} className="bg-white text-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleLaunchWhatsApp}
              className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-600/25 active:scale-[0.99] transition-all duration-200 cursor-pointer text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              <span>Request Service on WhatsApp (+234 903 525 0086)</span>
              <ArrowUpRight size={18} />
            </button>

            <div className="flex items-center justify-center space-x-4 mt-4 text-[11px] text-slate-500">
              <span className="flex items-center">
                <CheckCircle size={12} className="text-emerald-600 mr-1" />
                Verified Agency Delivery
              </span>
              <span>•</span>
              <span className="flex items-center">
                <CheckCircle size={12} className="text-emerald-600 mr-1" />
                No Account Creation Required
              </span>
              <span>•</span>
              <span className="flex items-center">
                <CheckCircle size={12} className="text-emerald-600 mr-1" />
                Fast 24hr Turnaround
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
