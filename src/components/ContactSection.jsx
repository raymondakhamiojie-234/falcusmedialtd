import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck 
} from 'lucide-react';
import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from '../data/servicesData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pageLink: '',
    serviceInterest: 'Social Media Strategy & Monetization',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Falcus Media! I am reaching out from your website to discuss digital marketing and creator growth services.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=Inquiry from Falcus Media Website`;
  };

  return (
    <section id="contact" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail size={14} />
            <span>LET'S GROW TOGETHER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Get in Touch With Our Agency
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Have questions about account recovery, monetization, or scaling ad campaigns? Connect directly with our specialists today.
          </p>
        </div>

        {/* 3 Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* WhatsApp Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border-2 border-emerald-500/30 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">WhatsApp Live Chat</h3>
              <p className="text-sm text-slate-600 mb-4">
                Fastest response channel. Chat directly with an active account manager in real-time.
              </p>
              <div className="text-emerald-700 font-bold text-base mb-6 font-mono">
                {WHATSAPP_NUMBER}
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center space-x-2 py-3 px-5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all duration-200 cursor-pointer text-sm shadow-md shadow-emerald-600/25"
            >
              <span>Start WhatsApp Chat</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Direct Phone Call Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border-2 border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#6366FF] to-[#7B35FF] text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Direct Phone Call</h3>
              <p className="text-sm text-slate-600 mb-4">
                Speak directly with our senior consulting team regarding enterprise and brand partnerships.
              </p>
              <div className="text-indigo-700 font-bold text-base mb-6 font-mono">
                {WHATSAPP_NUMBER}
              </div>
            </div>

            <button
              onClick={handleCall}
              className="w-full flex items-center justify-center space-x-2 py-3 px-5 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] active:scale-95 transition-all duration-200 cursor-pointer text-sm shadow-md shadow-indigo-600/25"
            >
              <span>Call Us Now</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Email Support Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border-2 border-pink-500/30 hover:border-pink-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Email Inquiry</h3>
              <p className="text-sm text-slate-600 mb-4">
                Send us full case documents, screenshots, or agency RFP briefs. Answered in &lt; 24 hrs.
              </p>
              <div className="text-pink-700 font-bold text-sm mb-6 truncate font-mono">
                {SUPPORT_EMAIL}
              </div>
            </div>

            <button
              onClick={handleEmail}
              className="w-full flex items-center justify-center space-x-2 py-3 px-5 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all duration-200 cursor-pointer text-sm shadow-md shadow-rose-600/25"
            >
              <span>Send Email</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

        </div>

        {/* Inquiry Form */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/50 relative">
          
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm text-slate-600">
              Fill out the details below. Our team reviews all submissions and responds within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-2">Inquiry Successfully Received!</h4>
              <p className="text-sm text-slate-700 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-slate-950">{formData.name}</strong>. An account specialist from Falcus Media Ltd has received your inquiry and will reach out to <strong className="text-slate-950">{formData.email}</strong> or your phone shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-200 text-slate-800 font-semibold text-xs hover:bg-slate-300 cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Adeola Johnson"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. adeola@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +234 800 000 0000"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Channel / Page / Brand URL
                  </label>
                  <input
                    type="text"
                    value={formData.pageLink}
                    onChange={(e) => setFormData({ ...formData, pageLink: e.target.value })}
                    placeholder="e.g. facebook.com/mypage or @instagram"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Primary Service Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="Account Suspension & Restriction Recovery">Account Suspension & Restriction Recovery</option>
                  <option value="Demonetization & Payout Issues">Demonetization & Payout Issues</option>
                  <option value="Social Media Strategy & Monetization">Social Media Strategy & Monetization</option>
                  <option value="Paid Ads Management (Meta & Google)">Paid Ads Management (Meta & Google)</option>
                  <option value="Short-Form Video & Content Creation">Short-Form Video & Content Creation</option>
                  <option value="WhatsApp Business API Automation">WhatsApp Business API Automation</option>
                  <option value="Other Custom Solution">Other Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Describe Your Goals or Current Challenge <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your account issues, revenue goals, or what service you are looking to deploy..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-xl shadow-indigo-600/30 active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 text-base disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Your Inquiry...</span>
                ) : (
                  <>
                    <span>Send Message to Falcus Media</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-2">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Your information is strictly confidential. Zero account registration required.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
