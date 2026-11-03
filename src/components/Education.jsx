import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  CheckCircle,
  Building2,
  Award,
  Edit3
} from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-cream-100 relative">
      {/* Background Soft Accents */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-dusty-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-dusty-500" />
            <span>Pendidikan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            Riwayat Pendidikan
          </h2>
          <p className="text-dusty-700 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Jejak akademis yang membentuk wawasan analitis, kreativitas digital, dan pola pikir strategis.
          </p>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Elegant Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-dusty-300 via-dusty-200 to-transparent" />

          <div className="space-y-12">
            {educationHistory.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-4 border-dusty-300 flex items-center justify-center text-dusty-700 shadow-sm z-20">
                    <GraduationCap className="w-4 h-4 text-dusty-600" />
                  </div>

                  {/* Empty side for symmetry on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-dusty-200 shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                          item.isActive 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center space-x-1.5' 
                            : 'bg-dusty-100 text-dusty-700'
                        }`}>
                          {item.isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                          <span>{item.status}</span>
                        </span>

                        <div className="flex items-center space-x-1 text-xs font-medium text-dusty-600">
                          <Calendar className="w-3.5 h-3.5 text-dusty-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Institution & Major */}
                      <h3 className="text-xl font-serif font-bold text-dusty-950">
                        {item.institution}
                      </h3>

                      <div className="space-y-1 mt-2 text-sm">
                        <div className="flex items-center space-x-2 text-dusty-800 font-semibold">
                          <BookOpen className="w-4 h-4 text-dusty-500 shrink-0" />
                          <span>{item.major}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-dusty-600">
                          <Building2 className="w-4 h-4 text-dusty-400 shrink-0" />
                          <span>{item.faculty}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-dusty-700 leading-relaxed border-t border-dusty-100 pt-3">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-4 space-y-1.5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-dusty-500">
                            Fokus Akademik:
                          </p>
                          <ul className="space-y-1">
                            {item.highlights.map((point, hIdx) => (
                              <li key={hIdx} className="flex items-start space-x-2 text-xs text-dusty-700">
                                <CheckCircle className="w-3.5 h-3.5 text-dusty-500 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Editable Tag if it's a placeholder */}
                      {item.isPlaceholder && (
                        <div className="mt-4 pt-2 border-t border-dashed border-dusty-200 flex items-center space-x-1.5 text-[11px] text-dusty-500 italic">
                          <Edit3 className="w-3 h-3" />
                          <span>Kolom ini dapat diedit di <code>portfolioData.js</code></span>
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
