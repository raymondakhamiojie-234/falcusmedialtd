import React, { useState } from 'react';
import { Calendar, Clock, ArrowUpRight, BookOpen, User, Tag } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

export default function BlogSection({ onOpenAuditModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = BLOG_POSTS.filter((post) => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <section id="blog" className="relative py-24 bg-[#F8FAFC] border-b border-slate-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen size={14} />
            <span>INDUSTRY INSIGHTS & UPDATES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Falcus Media Knowledge Hub
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Platform algorithm updates, monetization compliance guides, and proven organic growth frameworks for modern creators.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#6366FF] to-[#7B35FF] text-white shadow-md shadow-indigo-600/30'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Featured Image */}
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

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
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

              {/* Bottom Action */}
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

      {/* Quick Article Preview Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100">
              {selectedPost.category}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-4">
              {selectedPost.title}
            </h3>

            <div className="rounded-2xl overflow-hidden mb-6 h-56">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {selectedPost.excerpt}
            </p>

            <p className="text-xs text-slate-500 mb-6 italic">
              Want personalized strategy guidance for your channel or brand? Consult directly with our agency team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenAuditModal();
                }}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6366FF] to-[#7B35FF] hover:from-[#5457EE] hover:to-[#6E2BE6] shadow-md shadow-indigo-600/30 text-sm text-center cursor-pointer"
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

    </section>
  );
}
