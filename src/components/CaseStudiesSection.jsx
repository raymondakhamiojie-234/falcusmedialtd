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

export default function CaseStudiesSection({ onOpenAuditModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(1); // First case expanded by default

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
    <section id="case-studies" className="relative py-24 bg-[#F8FAFC] border-b border-slate-100 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Award size={14} />
            <span>PROVEN TRACK RECORD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Influencer & Creator Case Studies
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real-world documented examples of complex creator suspensions, demonetizations, and viral audience scaling resolved by Falcus Media Ltd.
          </p>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-purple-600 mb-1">95%</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Success Rate</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-emerald-600 mb-1">5+ Years</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Experience</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-indigo-600 mb-1">25+</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Solved Cases</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-amber-500 mb-1">₦50M+</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Revenue Restored</div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-none">
              <Filter size={16} className="text-slate-400 flex-shrink-0 mr-1" />
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span>Showing <strong className="text-indigo-600">{filteredCases.length}</strong> case {filteredCases.length === 1 ? 'study' : 'studies'}</span>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Case Studies Accordion List */}
        {filteredCases.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl">
            <AlertCircle size={40} className="text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Case Studies Found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search criteria or category filter.</p>
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
                      ? 'bg-white border-2 border-indigo-400 shadow-xl shadow-indigo-100/60'
                      : 'bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow'
                  }`}
                >
                  {/* Accordion Trigger Header */}
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
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-50 text-indigo-700 border border-indigo-100">
                            Case #{study.id}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                            {study.category}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-1 leading-snug">
                          {study.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">
                          {study.challenge}
                        </p>
                      </div>

                    </div>

                    <div className="flex-shrink-0 mt-1">
                      {isExpanded ? (
                        <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <ChevronUp size={18} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                          <ChevronDown size={18} />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Expanded Content Breakdown */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                        
                        {/* Challenge Box */}
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200/80">
                          <div className="flex items-center space-x-2 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <AlertCircle size={14} />
                            <span>The Challenge</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution Box */}
                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200/80">
                          <div className="flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <Target size={14} />
                            <span>Falcus Media Solution</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>

                        {/* Result & Metrics Box */}
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80">
                          <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <CheckCircle size={14} />
                            <span>The Result</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed mb-3">
                            {study.result}
                          </p>

                          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-200/80 text-center">
                            {Object.entries(study.metrics).map(([k, v], i) => (
                              <div key={i} className="p-1.5 rounded-lg bg-white border border-emerald-200/80">
                                <div className="text-[10px] text-slate-500 uppercase">{k}</div>
                                <div className="text-xs font-bold text-emerald-700 truncate">{v}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Action banner inside card */}
                      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                        <span className="text-slate-500">
                          Facing a similar restriction on your account?
                        </span>
                        <button
                          onClick={onOpenAuditModal}
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
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
  );
}
