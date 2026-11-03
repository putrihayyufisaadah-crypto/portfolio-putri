import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Share2, 
  PenTool, 
  Palette, 
  Film, 
  TrendingUp, 
  Layout, 
  FileSpreadsheet, 
  Lightbulb,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icons to skill names
const skillIcons = {
  "Social Media Management": Share2,
  "Content Creation": PenTool,
  "Graphic Design": Palette,
  "Video Editing": Film,
  "Digital Marketing": TrendingUp,
  "UI/UX Design": Layout,
  "Microsoft Office": FileSpreadsheet,
  "Creative Thinking": Lightbulb,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter skills based on category if needed
  const categories = ['All', 'Marketing & Strategy', 'Creative Production', 'Visual Design', 'Productivity & Others'];

  const getFilteredCategory = (cat) => {
    if (cat === 'All') return skillsData;
    if (cat === 'Productivity & Others') {
      return skillsData.filter(s => s.category === 'Productivity' || s.category === 'Soft Skills' || s.category === 'Product & Digital' || s.category === 'Multimedia');
    }
    return skillsData.filter(s => s.category === cat);
  };

  const currentSkills = getFilteredCategory(selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white/70 relative">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-dusty-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-dusty-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dusty-500" />
            <span>Keahlian & Kompetensi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            My Skills & Competencies
          </h2>
          <p className="text-dusty-700 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Kombinasi keterampilan kreatif, strategi pemasaran digital, dan pemikiran analitis yang siap diterapkan.
          </p>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Informative Note regarding customizable progress bars */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-2xl bg-cream-100 border border-dusty-200/80 flex items-center justify-between text-xs text-dusty-700 shadow-xs">
          <div className="flex items-center space-x-2.5">
            <Info className="w-4 h-4 text-dusty-500 shrink-0" />
            <span>
              Tingkat penguasaan & persentase keterampilan dapat disesuaikan sewaktu-waktu melalui berkas konfigurasi <code className="font-semibold text-dusty-900">portfolioData.js</code>.
            </span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white text-[10px] font-bold text-dusty-600 uppercase tracking-wider border border-dusty-200">
            Customizable
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Sparkles;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white p-6 rounded-3xl border border-dusty-200/90 shadow-soft-luxury hover:shadow-luxury-hover hover:border-dusty-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-dusty-100 group-hover:bg-dusty-200 border border-dusty-200 text-dusty-700 group-hover:text-dusty-950 flex items-center justify-center transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream-100 text-dusty-600 border border-dusty-200/60">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-serif font-bold text-dusty-950 mb-2 group-hover:text-dusty-800 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-dusty-700 leading-relaxed line-clamp-3 mb-4">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Progress Bar & Percentage */}
                  <div className="space-y-1.5 pt-3 border-t border-dusty-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-semibold text-dusty-500">
                        {skill.level}
                      </span>
                      <span className="font-bold text-dusty-800">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-dusty-100 overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-dusty-300 via-dusty-400 to-dusty-700 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                    {skill.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-cream-100 text-dusty-700 border border-dusty-200/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
