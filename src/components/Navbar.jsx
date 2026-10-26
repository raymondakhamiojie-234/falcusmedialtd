import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/servicesData';

export default function Navbar({ onOpenAuditModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Falcus Media! I would like to inquire about your digital marketing and creator growth services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366FF] to-[#8B5CF6] p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-lg bg-gradient-to-r from-[#6366FF] to-[#A78BFA] bg-clip-text text-transparent">F</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  FALCUS<span className="text-[#6366FF]">MEDIA</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded">
                  LTD
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium tracking-wide">Digital & Influencer Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Direct Page Routing) */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-md shadow-indigo-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs (No account login, pure direct booking & inquiry) */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all duration-200 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} className="text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Book Free Call</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F14] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white font-semibold'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] shadow-lg shadow-indigo-500/25 cursor-pointer"
            >
              <Sparkles size={18} />
              <span>Book Free Consultation</span>
              <ArrowUpRight size={18} />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp (+234 903 525 0086)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
