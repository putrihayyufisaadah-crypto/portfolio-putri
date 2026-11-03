import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Clock
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Putri Hayyufi Sa'adah, saya ${formData.name || 'rekan'}.\n\nSubjek: ${formData.subject || 'Diskusi Portofolio / Proyek'}\n\nPesan: ${formData.message || 'Saya ingin berdiskusi mengenai proyek kolaborasi.'}`
    );
    window.open(`https://wa.me/${personalInfo.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white/70 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-dusty-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-dusty-500" />
            <span>Kontak & Kolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-dusty-700 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Tertarik berdiskusi tentang proyek kreatif, manajemen media sosial, atau peluang kolaborasi digital? Silakan tinggalkan pesan!
          </p>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Channels & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-cream-100/90 border border-dusty-200 shadow-soft-luxury space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-dusty-950 mb-2">
                  Informasi Kontak
                </h3>
                <p className="text-xs sm:text-sm text-dusty-700 leading-relaxed">
                  Terbuka untuk diskusi proyek kampus, freelance, magang, maupun kerja sama tim kreatif.
                </p>
              </div>

              {/* Contact Channels List */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-dusty-200/80 shadow-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-dusty-500">WhatsApp</p>
                      <p className="text-xs font-semibold text-dusty-900">{personalInfo.contact.whatsappDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopy(personalInfo.contact.whatsappNumber, 'wa')}
                      title="Salin Nomor"
                      className="p-2 rounded-lg text-dusty-500 hover:text-dusty-900 hover:bg-dusty-100 transition-colors"
                    >
                      {copiedType === 'wa' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={personalInfo.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Buka WhatsApp"
                      className="p-2 rounded-lg text-dusty-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-dusty-200/80 shadow-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-dusty-100 text-dusty-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-dusty-500">Email Address</p>
                      <p className="text-xs font-semibold text-dusty-900 truncate max-w-[170px] sm:max-w-none">
                        {personalInfo.contact.emailAddress}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopy(personalInfo.contact.emailAddress, 'email')}
                      title="Salin Email"
                      className="p-2 rounded-lg text-dusty-500 hover:text-dusty-900 hover:bg-dusty-100 transition-colors"
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${personalInfo.contact.emailAddress}`}
                      title="Kirim Email"
                      className="p-2 rounded-lg text-dusty-500 hover:text-dusty-900 hover:bg-dusty-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-dusty-200/80 shadow-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-dusty-100 text-dusty-700 flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-dusty-500">Instagram</p>
                      <p className="text-xs font-semibold text-dusty-900">{personalInfo.contact.instagramHandle}</p>
                    </div>
                  </div>
                  <a
                    href={personalInfo.contact.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buka Instagram"
                    className="p-2 rounded-lg text-dusty-500 hover:text-dusty-900 hover:bg-dusty-100 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center p-3.5 rounded-2xl bg-white border border-dusty-200/80 shadow-xs space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-dusty-100 text-dusty-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-dusty-500">Domisili</p>
                    <p className="text-xs font-semibold text-dusty-900">{personalInfo.contact.location}</p>
                  </div>
                </div>

              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-white/60 border border-dusty-200 flex items-center space-x-3 text-xs text-dusty-700">
                <Clock className="w-4 h-4 text-dusty-500 shrink-0" />
                <span>Respon cepat aktif selama hari kerja & kegiatan perkuliahan.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-dusty-200 shadow-soft-luxury">
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-dusty-950">
                  Kirim Pesan
                </h3>
                <p className="text-xs sm:text-sm text-dusty-700 mt-1">
                  Formulir interaktif ini siap menerima pertanyaan maupun penawaran kerja sama.
                </p>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3"
                  >
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <p className="text-xs sm:text-sm font-semibold">
                        Pesan Anda berhasil disimulasikan terkirim!
                      </p>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Terima kasih atas pesannya. Untuk pengiriman langsung dan cepat ke handphone, Anda juga dapat meneruskan pesan ke WhatsApp sekarang.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleDirectWhatsApp}
                        className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>Kirim via WhatsApp Sekarang</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="px-3 py-2 rounded-xl bg-white text-emerald-800 text-xs font-medium border border-emerald-300"
                      >
                        Tulis Pesan Baru
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dusty-700">
                      Nama Lengkap <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-2xl bg-cream-100/60 border border-dusty-200 text-dusty-950 text-sm focus:outline-none focus:ring-2 focus:ring-dusty-400 focus:bg-white transition-all placeholder:text-dusty-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-dusty-700">
                      Alamat Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 rounded-2xl bg-cream-100/60 border border-dusty-200 text-dusty-950 text-sm focus:outline-none focus:ring-2 focus:ring-dusty-400 focus:bg-white transition-all placeholder:text-dusty-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-dusty-700">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Kolaborasi Konten Media Sosial / Proyek Bisnis"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-100/60 border border-dusty-200 text-dusty-950 text-sm focus:outline-none focus:ring-2 focus:ring-dusty-400 focus:bg-white transition-all placeholder:text-dusty-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-dusty-700">
                    Pesan (Message) <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan, pertanyaan, atau detail rencana proyek yang ingin didiskusikan..."
                    className="w-full px-4 py-3 rounded-2xl bg-cream-100/60 border border-dusty-200 text-dusty-950 text-sm focus:outline-none focus:ring-2 focus:ring-dusty-400 focus:bg-white transition-all placeholder:text-dusty-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-dusty-700 hover:bg-dusty-800 text-cream-100 font-semibold text-sm shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan Pesan...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
