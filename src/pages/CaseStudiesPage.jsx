import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Target, 
  CheckCircle, 
  Award,
  RefreshCw,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Lock,
  MessageCircle,
  Video,
  BarChart3,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { CASE_STUDIES, CATEGORIES } from '../data/caseStudies';

export default function CaseStudiesPage({ onOpenAuditModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(1);

  const iconComponents = {
    RefreshCw,
    DollarSign,
    TrendingUp,
    Shield,
    Award,
    Zap,
    Lock,
    MessageCircle,
    Video,
    CheckCircle,
    BarChart3,
    Users,
    Search,
    Target
  };

  const filteredCases = CASE_STUDIES.filter((study) => {
    const matchesCat = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch = 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.result.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[#0A0A0A] text-white">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#14122C] via-[#0A0A0A] to-[#0A0A0A] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-5">
            <Award size={14} />
            <span>25+ REAL-WORLD INFLUENCER VICTORIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Influencer Agency <span className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">Case Studies</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering Nigerian and global content creators through proven policy compliance, account restoration, and monetization acceleration.
          </p>
        </div>
      </section>

      {/* 2. Stats Summary Strip */}
      <section className="py-10 bg-[#0E1020] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02]">
              <div className="text-3xl font-extrabold text-purple-400">95%</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Resolution Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02]">
              <div className="text-3xl font-extrabold text-emerald-400">5+ Years</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Platform Management</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02]">
              <div className="text-3xl font-extrabold text-indigo-400">25+</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Documented Cases</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02]">
              <div className="text-3xl font-extrabold text-amber-400">₦50M+</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Trapped Revenue Unlocked</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search, Filter, and Case Studies Accordion List */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="bg-[#121424] border border-white/10 rounded-2xl p-4 sm:p-6 mb-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              
              {/* Search */}
              <div className="relative w-full md:w-80 flex-shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-none">
                <Filter size={16} className="text-gray-400 flex-shrink-0 mr-1" />
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-md shadow-indigo-600/30'
                          : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

            </div>

            <div className="text-xs text-gray-400 mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <span>Showing <strong className="text-indigo-400">{filteredCases.length}</strong> case studies</span>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Reset search
                </button>
              )}
            </div>
          </div>

          {/* Cases */}
          {filteredCases.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl">
              <AlertCircle size={40} className="text-gray-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No Case Studies Found</h3>
              <p className="text-sm text-gray-400">Try adjusting your search criteria or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCases.map((study) => {
                const Icon = iconComponents[study.iconName] || Award;
                const isExpanded = expandedId === study.id;

                return (
                  <div
                    key={study.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#12152E] border-indigo-500/50 shadow-xl shadow-indigo-950/50'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(study.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#6366FF] to-[#7B35FF] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-600/30">
                          <Icon size={22} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              Case #{study.id}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/10 text-gray-300">
                              {study.category}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                            {study.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-gray-400 line-clamp-1">
                            {study.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0 mt-1">
                        {isExpanded ? (
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <ChevronUp size={18} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-white/5 text-gray-400 flex items-center justify-center">
                            <ChevronDown size={18} />
                          </div>
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-white/10 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                          
                          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                            <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                              <AlertCircle size={14} />
                              <span>The Challenge</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {study.challenge}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                              <Target size={14} />
                              <span>Falcus Media Solution</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {study.solution}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                              <CheckCircle size={14} />
                              <span>The Result</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-3">
                              {study.result}
                            </p>

                            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/20 text-center">
                              {Object.entries(study.metrics).map(([k, v], i) => (
                                <div key={i} className="p-1 rounded bg-black/40">
                                  <div className="text-[10px] text-gray-400 uppercase">{k}</div>
                                  <div className="text-xs font-bold text-emerald-400 truncate">{v}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                          <span className="text-gray-400">
                            Experiencing a similar suspension or restriction?
                          </span>
                          <button
                            onClick={onOpenAuditModal}
                            className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <span>Get Free Account Audit</span>
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
