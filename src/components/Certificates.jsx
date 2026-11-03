import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  Calendar, 
  Building2, 
  Eye, 
  ShieldCheck, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="certificates" className="py-20 md:py-28 bg-cream-100 relative">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-dusty-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-dusty-500" />
            <span>Pencapaian & Beasiswa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            Scholarships & Achievements
          </h2>
          <p className="text-dusty-700 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Penghargaan dan pencapaian akademik resmi sebagai motivasi untuk terus berprestasi dan berkarya di era digital.
          </p>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Scholarship Card (Highlighted First Item) */}
        {achievementsData.length > 0 && (
          <div className="mb-10">
            {achievementsData.slice(0, 1).map((mainItem) => (
              <motion.div
                key={mainItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-white via-cream-100 to-dusty-100/60 p-8 sm:p-10 rounded-3xl border-2 border-dusty-300/80 shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full bg-dusty-700 text-cream-100 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-xs">
                        <Award className="w-3.5 h-3.5" />
                        <span>{mainItem.badge}</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                        Pemerintah RI
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dusty-950 leading-snug">
                      {mainItem.title}
                    </h3>

                    <div className="space-y-1.5 text-xs sm:text-sm text-dusty-700">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-dusty-500 shrink-0" />
                        <span className="font-semibold text-dusty-900">{mainItem.organizer}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4 text-dusty-500 shrink-0" />
                        <span>Program Afirmasi Pendidikan Tinggi untuk Mahasiswa Berprestasi</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-dusty-700 leading-relaxed pt-2">
                      {mainItem.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2">
                      {mainItem.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-dusty-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(mainItem)}
                        className="px-6 py-2.5 rounded-full bg-dusty-700 hover:bg-dusty-800 text-cream-100 text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Lihat Detail Pencapaian</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column Image Frame */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border-4 border-white bg-dusty-100">
                      <img
                        src={mainItem.image}
                        alt={mainItem.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5">
                        <p className="text-white text-xs font-semibold">
                          Beasiswa ADik Kemendikbudristek RI
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Secondary Achievements Cards */}
        {achievementsData.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.slice(1).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-3xl border border-dusty-200 shadow-soft-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-dusty-500">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-dusty-100 text-dusty-700">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-dusty-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-dusty-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-dusty-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-dusty-600 line-clamp-1">
                    {item.organizer}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="px-4 py-1.5 rounded-full bg-dusty-100 hover:bg-dusty-700 text-dusty-800 hover:text-cream-100 text-xs font-semibold transition-colors shrink-0"
                  >
                    Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <CertificateModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
