import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Phone, Mail, Award } from 'lucide-react';
import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from '../data/servicesData';

export default function Footer({ onOpenAuditModal }) {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <footer className="relative bg-[#05060D] border-t border-white/10 text-white pt-20 pb-12 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden border border-indigo-500/30 bg-gradient-to-r from-[#6366FF] via-[#7B35FF] to-[#8B5CF6] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={14} />
              <span>READY TO SCALE?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
              Ready to grow your business with a strategy that actually works?
            </h3>
            <p className="text-sm sm:text-base text-white/90">
              Get a free growth audit and discover exactly how we can unlock your monetization and multiply your audience reach.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenAuditModal}
              className="px-8 py-4 rounded-full font-bold text-[#6366FF] bg-white hover:bg-gray-100 shadow-xl active:scale-95 transition-all text-sm cursor-pointer flex items-center space-x-2"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowUpRight size={17} />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-6 py-4 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl active:scale-95 transition-all text-sm cursor-pointer flex items-center space-x-2"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F1126] border border-indigo-500/30 p-1 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <img 
                  src="/logo.webp" 
                  alt="Falcus Media Ltd Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                FALCUS<span className="text-[#6366FF]">MEDIA</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Growth-focused digital marketing and social media agency. Certified Meta Tech Solution Provider & Google Partner empowering creators, influencers, and brands.
            </p>

            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-indigo-400" />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-indigo-400" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">
                  {WHATSAPP_NUMBER} (Support & WhatsApp)
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://web.facebook.com/p/Falcus-Media-Ltd-100080158770131/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <button
                onClick={handleWhatsApp}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </button>
              <Link
                to="/services"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <span className="font-bold text-sm">ig</span>
              </Link>
              <Link
                to="/services"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <span className="font-bold text-sm">yt</span>
              </Link>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Social Media Strategy & Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Account Recovery & Strike Appeals
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Monetization & Payout Restoration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Meta & Google Paid Advertising
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  WhatsApp Business API Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  Creator Short-Form Video Scaling
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors block">
                  Case Studies (25+)
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors block">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Badges & Free Direct Action */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Agency Direct Desk</h4>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zero Account Needed</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect directly with certified consultants without registration hurdles or portal logins.
              </p>
              <button
                onClick={onOpenAuditModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-md transition-all cursor-pointer"
              >
                Instant Free Audit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Dedicated Legal Routes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear} Falcus Media Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support Desk
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
