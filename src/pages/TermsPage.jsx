import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 mb-8">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">Terms of Service</h1>
            <p className="text-xs text-slate-500">Falcus Media Ltd • Effective Date: January 2025</p>
          </div>
        </div>

        <div className="mt-8 space-y-8 text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-8">
          
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the Falcus Media Ltd website, using our services, or initiating service requests via our official WhatsApp channels, you acknowledge that you have read, understood, and agreed to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">2. Scope of Agency Services</h2>
            <p>
              Falcus Media Ltd provides digital marketing, social media audience management, WhatsApp automation, ad campaign scaling, and policy compliance consulting. We operate strictly in compliance with applicable platform guidelines (Meta, YouTube, TikTok, Google).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">3. Ethical Guidelines & Prohibited Content</h2>
            <p>
              We do not accept projects involving hate speech, intellectual property violations, deceptive financial schemes, or content that violates statutory regulations. Falcus Media reserves the right to decline or terminate services for any entity engaged in abusive practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">4. Zero Account Requirement</h2>
            <p>
              Visitors and clients do not create or maintain user accounts or passwords on this portal. All project communication and milestone tracking are conducted through official verified channels (official WhatsApp support +234 903 525 0086 and official @falcusmedia.com email addresses).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">5. Contact and Inquiries</h2>
            <p>
              Questions regarding these Terms of Service should be directed to <span className="text-slate-900 font-semibold">info@falcusmedia.com</span>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
