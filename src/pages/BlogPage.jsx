import React, { useState } from 'react';
import { Calendar, Clock, ArrowUpRight, BookOpen, Search, X } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

export default function BlogPage({ onOpenAuditModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#EEF4FF] via-[#F8FAFC] to-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider mb-5">
            <BookOpen size={14} />
            <span>KNOWLEDGE HUB & PLATFORM UPDATES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
            Falcus Media <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of platform policy updates, monetization mechanics, viral hooks, and ad frameworks built for modern creators and brands.
          </p>
        </div>
      </section>

      {/* 2. Blog Search & Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {BLOG_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center">
                        <Calendar size={13} className="mr-1 text-slate-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock size={13} className="mr-1 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.map((t, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full mt-4 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    <span>Read Article Summary</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100">
              {selectedPost.category}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 leading-snug">
              {selectedPost.title}
            </h3>

            <div className="text-xs text-slate-500 mb-4 flex items-center space-x-3">
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 h-56 bg-slate-100">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {selectedPost.excerpt}
            </p>

            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 mb-6 text-xs text-indigo-900">
              💡 <strong>Key Takeaway:</strong> Implementing strict compliance checks and automated audience response funnels safeguards creator revenue and scales brand partnerships.
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenAuditModal();
                }}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] text-sm text-center cursor-pointer shadow-md shadow-indigo-600/30"
              >
                Discuss Strategy with Team
              </button>
              <button
                onClick={() => setSelectedPost(null)}
                className="py-3 px-6 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
