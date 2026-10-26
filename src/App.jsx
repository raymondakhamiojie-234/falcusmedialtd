import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FreeAuditModal from './components/FreeAuditModal';

// Dedicated Standalone Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#6366FF] selection:text-white">
        
        {/* Sticky Global Navbar */}
        <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenAuditModal={() => setIsAuditModalOpen(true)} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenAuditModal={() => setIsAuditModalOpen(true)} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenAuditModal={() => setIsAuditModalOpen(true)} />} 
            />
            <Route 
              path="/case-studies" 
              element={<CaseStudiesPage onOpenAuditModal={() => setIsAuditModalOpen(true)} />} 
            />
            <Route 
              path="/blog" 
              element={<BlogPage onOpenAuditModal={() => setIsAuditModalOpen(true)} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/privacy" 
              element={<PrivacyPage />} 
            />
            <Route 
              path="/terms" 
              element={<TermsPage />} 
            />
            <Route 
              path="*" 
              element={<HomePage onOpenAuditModal={() => setIsAuditModalOpen(true)} />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Site-Wide Free Audit Modal (Zero Account Required) */}
        <FreeAuditModal 
          isOpen={isAuditModalOpen}
          onClose={() => setIsAuditModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
