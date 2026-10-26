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
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from '../data/servicesData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pageLink: '',
    serviceInterest: 'Account Suspension & Restriction Recovery',
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
      `Hello Falcus Media! I am reaching out from your website contact page to discuss digital marketing and creator growth services.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=Inquiry from Falcus Media Contact Page`;
  };

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#EEF4FF] via-[#F8FAFC] to-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-5">
            <Mail size={14} />
            <span>24/7 AGENCY DIRECT DESK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
            Let's Grow Your <span className="bg-gradient-to-r from-[#6366FF] to-[#A855F7] bg-clip-text text-transparent">Business Together</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence, resolve account restrictions, or build automated customer funnels? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* 2. Three Direct Contact Cards */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* WhatsApp */}
            <div className="p-8 rounded-3xl bg-white border-2 border-emerald-500/30 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">WhatsApp Live Chat</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Instant response. Chat directly with an active account strategist in real-time.
                </p>
                <div className="text-emerald-700 font-bold text-base mb-6 font-mono">
                  {WHATSAPP_NUMBER}
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all text-sm cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Direct Phone Call */}
            <div className="p-8 rounded-3xl bg-white border-2 border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#6366FF] to-[#7B35FF] text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Direct Phone Call</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Speak directly with our senior consulting team regarding enterprise and brand scaling.
                </p>
                <div className="text-indigo-700 font-bold text-base mb-6 font-mono">
                  {WHATSAPP_NUMBER}
                </div>
              </div>

              <button
                onClick={handleCall}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] active:scale-95 transition-all text-sm cursor-pointer shadow-lg shadow-indigo-600/30"
              >
                <span>Call Us Now</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Email Support */}
            <div className="p-8 rounded-3xl bg-white border-2 border-pink-500/30 hover:border-pink-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
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
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all text-sm cursor-pointer shadow-lg shadow-rose-600/30"
              >
                <span>Send Email</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Inquiry Form & Agency Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form */}
            <div className="lg:col-span-8 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/50">
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-2">
                  Send Us a Direct Message
                </h2>
                <p className="text-sm text-slate-600">
                  Fill out the form below. Zero account registration required. We review every submission within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-slate-950">{formData.name}</strong>. A Falcus Media strategist has received your inquiry and will reach out to <strong className="text-slate-950">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-200 text-slate-800 font-semibold text-xs hover:bg-slate-300 cursor-pointer"
                  >
                    Send Another Message
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
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 800 000 0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Channel / Page Link
                      </label>
                      <input
                        type="text"
                        value={formData.pageLink}
                        onChange={(e) => setFormData({ ...formData, pageLink: e.target.value })}
                        placeholder="e.g. facebook.com/mypage or @handle"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service Needed
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
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message / Issue Overview <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your page challenge, revenue goals, or timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-xl shadow-indigo-600/30 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center space-x-2 text-base disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Agency Team</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-1">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>Confidential & encrypted. No account sign-up needed.</span>
                  </div>

                </form>
              )}

            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 text-indigo-600 font-bold text-sm">
                  <Clock size={18} />
                  <span>Operating Schedule</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1 leading-relaxed">
                  <div><strong>Monday – Friday:</strong> 8:00 AM – 7:00 PM (WAT)</div>
                  <div><strong>Saturday:</strong> 9:00 AM – 4:00 PM (WAT)</div>
                  <div><strong>WhatsApp Emergency Desk:</strong> 24/7 Priority Monitoring</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 text-emerald-600 font-bold text-sm">
                  <MapPin size={18} />
                  <span>Headquarters & Coverage</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Falcus Media Ltd serves creators and corporate brands across Lagos, Abuja, Port Harcourt, and internationally across the UK, US, Ghana, and South Africa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#6366FF] to-[#7B35FF] text-white shadow-md">
                <h4 className="font-bold text-base mb-1">Need Urgent Account Recovery?</h4>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Account suspensions should be escalated within 30 days of enforcement. Connect directly with our team.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#6366FF] bg-white hover:bg-slate-100 transition-all cursor-pointer shadow"
                >
                  WhatsApp Emergency Recovery
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
