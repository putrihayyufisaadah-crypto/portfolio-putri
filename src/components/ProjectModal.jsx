import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, User, Tag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dusty-950/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-dusty-200 overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-dusty-700 hover:text-dusty-950 flex items-center justify-center shadow-md transition-all hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-dusty-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-dusty-700/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-cream-100">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-2 text-cream-50">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-xs text-dusty-600 border-b border-dusty-100 pb-4">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-dusty-400" />
                <span>Tahun: <strong className="text-dusty-800">{project.date}</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-dusty-400" />
                <span>Konteks: <strong className="text-dusty-800">{project.client}</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Tag className="w-4 h-4 text-dusty-400" />
                <span>Kategori: <strong className="text-dusty-800">{project.subtitle}</strong></span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-dusty-900">
                Ringkasan & Cakupan Proyek:
              </h4>
              <p className="text-sm text-dusty-700 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Tools Used */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-dusty-600">
                Tools & Metode yang Digunakan:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-dusty-100 text-dusty-800 border border-dusty-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-dusty-600" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Note on editing */}
            {project.isPlaceholder && (
              <div className="p-3 rounded-xl bg-cream-100 border border-dusty-200 text-xs text-dusty-600 italic">
                💡 <strong>Catatan Pengguna:</strong> Data dan foto proyek ini merupakan placeholder yang dirancang siap diganti dengan tautan gambar atau file karya asli Anda di <code>src/data/portfolioData.js</code>.
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-dusty-100 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-dusty-700 bg-dusty-100 hover:bg-dusty-200 transition-colors"
              >
                Tutup Preview
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  onClose();
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-dusty-700 hover:bg-dusty-800 text-cream-100 shadow-md transition-all"
              >
                <span>Diskusi Proyek Ini</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
