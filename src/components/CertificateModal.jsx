import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Calendar, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ item, isOpen, onClose }) {
  if (!isOpen || !item) return null;

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
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-dusty-200 overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-dusty-700 hover:text-dusty-950 flex items-center justify-center shadow-md transition-all hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image Frame */}
          <div className="relative aspect-[16/9] w-full bg-dusty-50 p-4 sm:p-6 border-b border-dusty-100 flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl shadow-md border border-dusty-200"
            />
            <div className="absolute top-7 left-7 px-3.5 py-1.5 rounded-full bg-dusty-700/85 backdrop-blur-md text-[11px] font-bold text-cream-100 uppercase tracking-wider flex items-center space-x-1.5 shadow-sm">
              <Award className="w-3.5 h-3.5 text-dusty-200" />
              <span>{item.badge || "Scholarship Award"}</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-semibold text-dusty-600 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{item.category}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-dusty-950 leading-snug">
              {item.title}
            </h3>

            {/* Organizer & Year Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-cream-100/80 border border-dusty-200 text-xs">
              <div className="flex items-center space-x-2.5">
                <Building2 className="w-4 h-4 text-dusty-500 shrink-0" />
                <div>
                  <span className="text-dusty-500 block text-[10px] uppercase font-bold">Pemberi / Penyelenggara:</span>
                  <span className="font-semibold text-dusty-900">{item.organizer}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Calendar className="w-4 h-4 text-dusty-500 shrink-0" />
                <div>
                  <span className="text-dusty-500 block text-[10px] uppercase font-bold">Periode:</span>
                  <span className="font-semibold text-dusty-900">{item.year}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-dusty-700 leading-relaxed">
              {item.description}
            </p>

            {/* Highlights */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-dusty-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-dusty-500">
                  Poin Keunggulan:
                </p>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-dusty-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="pt-3 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-xs font-semibold bg-dusty-700 hover:bg-dusty-800 text-cream-100 shadow-md transition-colors"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
