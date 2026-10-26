import React, { useState } from 'react';
import { X, Shield, FileText } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [tab, setTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121424] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col relative shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              {tab === 'privacy' ? <Shield size={20} /> : <FileText size={20} />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {tab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-gray-400">Falcus Media Ltd • Effective January 2025</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTab(tab === 'privacy' ? 'terms' : 'privacy')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-indigo-300 cursor-pointer"
            >
              Switch to {tab === 'privacy' ? 'Terms' : 'Privacy'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-300 leading-relaxed">
          {tab === 'privacy' ? (
            <>
              <div>
                <h4 className="text-base font-bold text-white mb-2">1. Scope & Commitment</h4>
                <p>
                  Falcus Media Ltd ("Falcus Media", "we", "our") is dedicated to protecting user data, privacy, and digital rights. This Privacy Policy details our data collection and protection standards across our website and social growth services.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">2. Information Collection</h4>
                <p>
                  We collect strictly necessary contact details (such as your full name, email, WhatsApp phone number, and public page link) voluntarily supplied via our consultation forms. We do NOT require or store account passwords or create forced user accounts.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">3. Platform Compliance & Security</h4>
                <p>
                  As an official Meta Tech Solution Provider and Google Partner, our operations adhere stringently to official developer data policies. Any sensitive account audit materials shared during escalation procedures are protected by end-to-end encryption and deleted upon resolution.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">4. Non-Disclosure & Third Parties</h4>
                <p>
                  Falcus Media Ltd does not sell, rent, or trade client information to advertisers or external brokerages. All information remains confidential between you and your assigned account strategist.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-base font-bold text-white mb-2">1. Service Agreement</h4>
                <p>
                  By engaging Falcus Media Ltd for digital marketing, audience growth, WhatsApp integration, or account recovery consulting, you agree to these Terms of Service.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">2. Ethical Standards</h4>
                <p>
                  Falcus Media operates with organic, platform-compliant strategies. We refuse engagement with copyrighted infringement materials, hate speech, illegal distribution, or prohibited goods.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">3. Direct Communication</h4>
                <p>
                  Services are executed directly through authorized agency channels (official WhatsApp support +234 903 525 0086, corporate email @falcusmedia.com). Clients do not need account credentials on this portal.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end bg-black/20">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 cursor-pointer"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
}
