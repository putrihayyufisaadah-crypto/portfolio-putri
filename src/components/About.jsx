import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Heart, 
  Sparkles, 
  Compass, 
  CheckCircle2,
  Lightbulb,
  Target
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const quickFacts = [
    { label: "Status", value: personalInfo.status, icon: GraduationCap },
    { label: "Program Studi", value: personalInfo.major, icon: BookOpen },
    { label: "Fakultas", value: personalInfo.faculty, icon: Building2 },
    { label: "Universitas", value: personalInfo.university, icon: Compass },
    { label: "Asal Sekolah", value: "MA Baburohmah Meranti", icon: GraduationCap },
    { label: "Beasiswa", value: "Penerima Beasiswa ADik", icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white/70 relative">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-dusty-100/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-dusty-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dusty-500" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Side-by-side Photo and Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Identity Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden bg-dusty-100 shadow-soft-luxury border-4 border-white">
                <img
                  src={personalInfo.aboutPhotoUrl}
                  alt={personalInfo.name}
                  style={{ objectPosition: 'center 62%' }}
                  className="w-full h-full object-cover filter saturate-105 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dusty-950/80 via-dusty-950/40 to-transparent p-6 text-white">
                  <p className="text-xs font-medium uppercase tracking-widest text-dusty-200">
                    Active Undergraduate
                  </p>
                  <h3 className="text-xl font-serif font-bold text-cream-100">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm text-dusty-100">
                    {personalInfo.faculty}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-cream-100 px-4 py-3 rounded-2xl shadow-lg border border-dusty-200 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-dusty-700 text-cream-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-dusty-200" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-dusty-500 uppercase">Mindset</p>
                  <p className="text-xs font-bold text-dusty-900">Creative & Strategic</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Profile Attributes */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Academic & Identity Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-dusty-900 leading-snug">
                Mahasiswa Aktif Bisnis Digital dengan Ketertarikan Pemasaran & Kreativitas Visual
              </h3>
              
              <div className="space-y-3.5 text-dusty-800 text-base leading-relaxed">
                {personalInfo.aboutDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Fact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-cream-100/80 border border-dusty-200/80 shadow-xs flex items-center space-x-3.5 hover:border-dusty-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-dusty-200/70 text-dusty-800 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-dusty-700" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-dusty-500 uppercase tracking-wider">{fact.label}</p>
                      <p className="text-sm font-bold text-dusty-900">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fields of Interest Badges */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-dusty-500 fill-dusty-300" />
                <h4 className="text-xs font-bold text-dusty-700 uppercase tracking-wider">
                  Bidang Minat & Keahlian Favorit:
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-dusty-100 text-dusty-800 border border-dusty-200 hover:bg-dusty-200 hover:border-dusty-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-dusty-600" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Personality Summary Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-dusty-100/70 via-dusty-50 to-cream-100 border border-dusty-200/80">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-lg bg-dusty-700 text-cream-100 shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-dusty-900">
                    Komitmen & Karakter Profesional
                  </h5>
                  <p className="text-xs sm:text-sm text-dusty-700 mt-1 leading-relaxed">
                    Teliti, mudah beradaptasi, menyukai kolaborasi tim, dan berorientasi pada estetika serta strategi pertumbuhan digital yang berkelanjutan.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
