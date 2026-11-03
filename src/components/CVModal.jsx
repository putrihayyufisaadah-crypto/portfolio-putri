import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, CheckCircle2, Sparkles, GraduationCap, Briefcase, Mail, Phone } from 'lucide-react';
import { personalInfo, educationHistory, skillsData, experienceData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dusty-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-dusty-200 overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]"
        >
          {/* Header Action Bar */}
          <div className="p-4 sm:px-6 bg-cream-100 border-b border-dusty-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-dusty-700" />
              <span className="font-serif font-bold text-sm sm:text-base text-dusty-950">
                Curriculum Vitae Preview • {personalInfo.name}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-dusty-100 border border-dusty-200 text-xs font-semibold text-dusty-800 flex items-center space-x-1.5 transition-colors shadow-xs"
              >
                <Printer className="w-3.5 h-3.5 text-dusty-600" />
                <span className="hidden sm:inline">Cetak / Simpan PDF</span>
              </button>
              
              <button
                onClick={onClose}
                aria-label="Tutup"
                className="w-8 h-8 rounded-full bg-white hover:bg-dusty-100 text-dusty-600 hover:text-dusty-950 flex items-center justify-center border border-dusty-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable CV Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-dusty-900 bg-white" id="printable-cv">
            
            {/* CV Header */}
            <div className="border-b-2 border-dusty-300 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-dusty-950">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-dusty-600 mt-1 uppercase tracking-wider">
                  {personalInfo.title} • {personalInfo.status}
                </p>
                <p className="text-xs text-dusty-700 mt-1">
                  {personalInfo.major}, {personalInfo.faculty} — {personalInfo.university}
                </p>
              </div>

              <div className="text-xs text-dusty-700 space-y-1 sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-dusty-100">
                <p>{personalInfo.contact.emailAddress}</p>
                <p>{personalInfo.contact.whatsappDisplay}</p>
                <p>{personalInfo.contact.location}</p>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-dusty-600 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-dusty-500" />
                <span>Ringkasan Profil</span>
              </h2>
              <p className="text-xs sm:text-sm text-dusty-800 leading-relaxed">
                {personalInfo.heroBio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-dusty-600 flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-dusty-500" />
                <span>Pendidikan</span>
              </h2>
              <div className="space-y-3">
                {educationHistory.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-dusty-300 pl-3.5 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="text-sm font-bold text-dusty-950">{edu.institution}</h3>
                      <span className="text-xs text-dusty-500 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-dusty-700">{edu.major} — {edu.faculty}</p>
                    <p className="text-xs text-dusty-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-dusty-600 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-dusty-500" />
                <span>Keterampilan & Kompetensi</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsData.map((skill, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-cream-100 border border-dusty-200/60 text-xs">
                    <div className="flex justify-between font-bold text-dusty-900 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-dusty-600 font-normal">{skill.level}</span>
                    </div>
                    <p className="text-[11px] text-dusty-700">{skill.tools.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-dusty-600 flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5 text-dusty-500" />
                <span>Pengalaman Kerja & Kreatif</span>
              </h2>
              <div className="space-y-3">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-dusty-300 pl-3.5 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="text-sm font-bold text-dusty-950">{exp.role}</h3>
                      <span className="text-xs text-dusty-500 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-xs font-medium text-dusty-600">{exp.organization}</p>
                    <p className="text-xs text-dusty-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-cream-100 border-t border-dusty-200 flex items-center justify-between text-xs text-dusty-600">
            <span>Portfolio & CV Putri Hayyufi Sa'adah</span>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-full bg-dusty-700 hover:bg-dusty-800 text-cream-100 font-semibold transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Simpan PDF Sekarang</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
