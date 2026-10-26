import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#080914] border-t border-b border-white/10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Star size={13} fill="currentColor" />
            <span>REAL GROWTH • REAL RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Creators & Brand Leaders Say
          </h2>

          <p className="text-base sm:text-lg text-gray-400">
            Hear directly from the influencers, media founders, and marketing directors whose accounts and revenues we’ve restored and scaled.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Star rating & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" className="text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.tag}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed mb-6 italic">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author Info with Photo Avatar */}
              <div className="pt-6 border-t border-white/10 flex items-center space-x-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/50 shadow-md"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 size={14} className="text-indigo-400" />
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {item.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
