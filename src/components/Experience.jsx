import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Sparkles, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Share2, 
  Video, 
  PenTool,
  Edit3
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

// Map icon to experience type
const expIcons = [
  Briefcase,
  Share2,
  Video,
  PenTool
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-cream-100 relative">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-dusty-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-dusty-500" />
            <span>Pengalaman</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            Work & Creative Experience
          </h2>
          <p className="text-dusty-700 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Pengalaman dalam lingkup agency kreatif, manajemen media sosial, produksi konten digital, dan desain visual.
          </p>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => {
            const IconComponent = expIcons[index % expIcons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-7 sm:p-8 rounded-3xl border border-dusty-200 shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon, Category & Period */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-dusty-100 border border-dusty-200 text-dusty-700 group-hover:bg-dusty-700 group-hover:text-cream-100 flex items-center justify-center transition-all duration-300 shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-dusty-500">
                          {item.type}
                        </span>
                        <h4 className="text-xs font-semibold text-dusty-700">
                          {item.organization}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-100 text-dusty-600 border border-dusty-200 text-xs shrink-0 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-dusty-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-serif font-bold text-dusty-950 mb-3 group-hover:text-dusty-800 transition-colors">
                    {item.role}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-dusty-700 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2 mb-6 border-t border-dusty-100 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-dusty-500">
                      Tanggung Jawab & Kontribusi:
                    </p>
                    <ul className="space-y-1.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 text-xs text-dusty-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-dusty-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tools & Editable Notification */}
                <div className="pt-4 border-t border-dusty-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-dusty-100 text-dusty-700 border border-dusty-200/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {item.isPlaceholder && (
                    <span className="inline-flex items-center space-x-1 text-[10px] text-dusty-500 italic">
                      <Edit3 className="w-3 h-3" />
                      <span>Dapat diedit</span>
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
