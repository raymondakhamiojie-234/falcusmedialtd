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
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 p-1 flex items-center justify-center shadow-sm group-hover:border-[#6366FF] group-hover:scale-105 transition-all duration-300">
              <img 
                src="/logo.webp" 
                alt="Falcus Media Ltd Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-[#6366FF] transition-colors">
                  FALCUS<span className="text-[#6366FF]">MEDIA</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-indigo-50 text-[#6366FF] border border-indigo-200 rounded">
                  LTD
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium tracking-wide">Digital & Influencer Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Direct Page Routing) */}
          <nav className="hidden lg:flex items-center space-x-1 bg-gray-50 p-1.5 rounded-full border border-gray-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-md shadow-indigo-500/25'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
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
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-200 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} className="text-emerald-600" />
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
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
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
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
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
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 cursor-pointer"
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
