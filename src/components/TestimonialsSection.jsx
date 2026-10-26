import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-white border-t border-b border-slate-100 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Star size={13} fill="currentColor" />
            <span>REAL GROWTH • REAL RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            What Creators & Brand Leaders Say
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Hear directly from the influencers, media founders, and marketing directors whose accounts and revenues we’ve restored and scaled.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                {/* Star rating & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" className="text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.tag}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6 italic">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author Info with Photo Avatar */}
              <div className="pt-6 border-t border-slate-200/80 flex items-center space-x-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/50 shadow-md"
                />
                <div>
                  <div className="text-sm font-bold text-slate-950 flex items-center space-x-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 size={14} className="text-indigo-600" />
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
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
