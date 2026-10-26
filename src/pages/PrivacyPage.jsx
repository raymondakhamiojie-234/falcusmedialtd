import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 mb-8">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">Privacy Policy</h1>
            <p className="text-xs text-slate-500">Falcus Media Ltd • Last Updated: January 2025</p>
          </div>
        </div>

        <div className="mt-8 space-y-8 text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-8">
          
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">1. Scope of This Privacy Policy</h2>
            <p>
              Falcus Media Ltd ("Falcus Media," "we," "our," or "us") is committed to protecting the privacy, security, and integrity of personal data collected from users of our website, applications, platforms, products, and growth services. This Privacy Policy outlines our data collection standards and measures.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">2. Information We Collect</h2>
            <p className="mb-2">
              We collect information that you voluntarily submit through our contact forms, audit requests, or direct WhatsApp inquiries. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Contact details: Full Name, Email Address, Phone Number, WhatsApp Number.</li>
              <li>Account identifiers: Social Media Handles, Page URLs, and Platform Account Types.</li>
              <li>Inquiry contents: Descriptions of account strikes, monetization objectives, or ad goals.</li>
            </ul>
            <p className="mt-2 text-indigo-700 font-medium">
              Note: We do not require visitors to create passwords, user accounts, or store credit card credentials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">3. How We Use Your Information</h2>
            <p>
              Your data is utilized strictly to provide digital marketing audits, execute client-requested platform services, communicate campaign updates, and respond to inquiries. We do not sell or monetize client data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">4. Meta & Google Partner Compliance</h2>
            <p>
              As a verified Meta Tech Solution Provider and Google Partner, our internal procedures adhere to developer data security standards. Any account management handshakes conducted through Meta Business Manager are performed under strict enterprise security protocols.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">5. Data Retention & Deletion</h2>
            <p>
              We retain consultation records only as long as necessary to complete your requested services or maintain compliance records. You can request complete deletion of your contact data at any time by emailing <span className="text-slate-900 font-semibold">info@falcusmedia.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-2">6. Contact Information</h2>
            <p>
              For questions regarding this policy, please reach out to our legal and data protection desk at <span className="text-slate-900 font-semibold">support@falcusmedia.com</span> or via our official WhatsApp line <span className="text-slate-900 font-semibold">+234 903 525 0086</span>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
