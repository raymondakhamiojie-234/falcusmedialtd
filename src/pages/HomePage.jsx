import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, CheckCircle, Shield, TrendingUp, DollarSign, Star, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import { CASE_STUDIES } from '../data/caseStudies';
import { BLOG_POSTS } from '../data/blogData';

export default function HomePage({ onOpenAuditModal }) {
  const featuredCases = CASE_STUDIES.slice(0, 4);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  const problems = [
    {
      title: "Low Organic Reach & Algorithmic Penalties",
      desc: "Changes in platform algorithms suppress video distribution and leave creator profiles stagnant despite high-effort content."
    },
    {
      title: "Ad Spend with Zero Measurable Returns",
      desc: "Boosting posts without audience retargeting funnels or data tracking leads to high bounce rates and burned marketing budgets."
    },
    {
      title: "Demonetization & Permanent Payout Holds",
      desc: "Sudden policy violations, connected entity strikes, or unverified IDs lock away thousands of dollars in creator earnings."
    },
    {
      title: "Missed Inbound Leads & Slow Conversion",
      desc: "Lack of 24/7 automated WhatsApp routing means interested buyers and brands move on to competitors before they receive a reply."
    }
  ];

  return (
    <div className="bg-[#0A0A0A]">
      
      {/* 1. High-Impact Concept Hero */}
      <Hero 
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* 2. The Problem We Solve (Key section from live Falcus site) */}
      <section className="py-20 bg-[#070812] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span>THE CHALLENGES WE ELIMINATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Common Bottlenecks Stopping Brands & Creators
            </h2>
            <p className="text-base text-gray-400">
              Most creators and businesses struggle with common roadblocks that stall their growth. We fix this by installing structured, compliance-backed growth systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-200 flex items-start space-x-4"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. About Section Teaser (Matching reference mockup) */}
      <AboutSection 
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* 4. Services 9-Card Visual Checkerboard */}
      <ServicesSection 
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* 5. Why Choose Us (Meta Tech Solution Provider Credentials) */}
      <WhyChooseUs onOpenAuditModal={onOpenAuditModal} />

      {/* 6. Featured Case Studies Snapshot */}
      <section className="py-24 bg-[#070814] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Award size={14} />
                <span>REAL RESULTS • RECENT VICTORIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Featured Influencer Success Stories
              </h2>
              <p className="text-base text-gray-400 mt-2">
                See how we’ve resolved complex strikes and restored millions in creator revenue.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-lg shadow-indigo-600/30 transition-all cursor-pointer self-start md:self-auto"
            >
              <span>Explore All 25+ Case Studies</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCases.map((study) => (
              <div 
                key={study.id}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 uppercase">
                      {study.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Case #{study.id}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-3 mb-6">
                    {study.result}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-emerald-400 font-bold">
                    {Object.values(study.metrics)[0]}
                  </div>

                  <Link 
                    to="/case-studies"
                    className="text-xs font-bold text-indigo-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>Read Case</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Client Reviews / Testimonials */}
      <TestimonialsSection />

      {/* 8. Knowledge Hub Teaser */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                INSIGHTS & GUIDES
              </div>
              <h2 className="text-3xl font-extrabold text-white">Latest from Our Knowledge Hub</h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center space-x-1 text-sm font-bold text-indigo-400 hover:text-white"
            >
              <span>View All Articles</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <div 
                key={post.id}
                className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-base font-bold text-white mt-1 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link 
                    to="/blog"
                    className="text-xs font-bold text-indigo-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
