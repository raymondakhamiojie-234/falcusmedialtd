import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/servicesData';

export default function FreeAuditModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [platform, setPlatform] = useState('Facebook');
  const [profileUrl, setProfileUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello Falcus Media! I would like to request a Free Growth & Account Audit for my ${platform} page: ${profileUrl || '(will provide)'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setContactInfo('');
    setProfileUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121426] border border-indigo-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl shadow-indigo-950/60">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 size={36} />
            </div>
            
            <h3 className="text-2xl font-extrabold text-white mb-2">Audit Request Booked!</h3>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Thank you, <strong className="text-white">{name}</strong>. Our senior growth strategist will audit your <span className="text-indigo-400 font-semibold">{platform}</span> profile and reach out within 24 hours to <strong className="text-white">{contactInfo}</strong> with your actionable audit report.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppInstant}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all text-sm cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle size={18} />
                <span>Fast-Track on WhatsApp Now</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-white/5 transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>NO ACCOUNT NEEDED • 100% FREE</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              Book Your Free Growth Audit
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Get an expert breakdown of your account monetization eligibility, audience bottlenecks, and policy standing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Samuel Okafor"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Email or WhatsApp Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="e.g. +234 903 525 0086 or samuel@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Platform
                  </label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#171a33] border border-white/15 text-white text-sm focus:outline-none focus:border-indigo-400 cursor-pointer"
                  >
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Website / Ads">Website / Ads</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Page Link or Handle
                  </label>
                  <input
                    type="text"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    placeholder="@handle or URL"
                    className="w-full px-3 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-lg shadow-indigo-600/30 active:scale-[0.99] transition-all text-sm cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Request Free Audit Now</span>
                <ArrowUpRight size={16} />
              </button>

              <div className="relative my-3 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <span className="relative px-3 bg-[#121426] text-[11px] text-gray-400 uppercase tracking-wider">
                  or speak directly
                </span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="w-full py-3 px-6 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 active:scale-[0.99] transition-all text-xs cursor-pointer flex items-center justify-center space-x-2"
              >
                <MessageCircle size={15} />
                <span>Instant WhatsApp Consultation</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
