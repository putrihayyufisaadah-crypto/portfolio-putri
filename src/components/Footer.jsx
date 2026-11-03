import React from 'react';
import { 
  Heart, 
  Mail, 
  ArrowUp,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-dusty-100/70 border-t border-dusty-200/80 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-dusty-200/40 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-dusty-200/80">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-dusty-400 via-dusty-300 to-dusty-200 flex items-center justify-center text-cream-100 font-serif font-bold text-lg shadow-sm">
                P
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wide text-dusty-950">
                  {personalInfo.name}
                </span>
                <span className="block text-xs font-medium text-dusty-600">
                  {personalInfo.major} • {personalInfo.university}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-dusty-700 leading-relaxed max-w-sm">
              Portfolio personal mahasiswa Bisnis Digital dengan minat dalam Digital Marketing, Social Media Strategy, Content Creation, dan Desain Visual Kreatif bernuansa Dusty Pink Luxury.
            </p>

            <div className="flex items-center space-x-2 text-xs text-dusty-600">
              <GraduationCap className="w-4 h-4 text-dusty-500" />
              <span>{personalInfo.faculty} - {personalInfo.university}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dusty-900">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-dusty-700 hover:text-dusty-950 hover:underline transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dusty-900">
              Media Sosial & Kontak
            </h4>
            
            <div className="flex items-center space-x-2.5">
              <a
                href={personalInfo.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-200 border border-dusty-200 text-dusty-700 flex items-center justify-center hover:scale-105 transition-all shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-200 border border-dusty-200 text-dusty-700 flex items-center justify-center hover:scale-105 transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-200 border border-dusty-200 text-dusty-700 flex items-center justify-center hover:scale-105 transition-all shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.emailAddress}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-200 border border-dusty-200 text-dusty-700 flex items-center justify-center hover:scale-105 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-dusty-700 hover:text-dusty-950 pt-2 transition-colors group"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Banner: Designed with creativity by Putri Hayyufi Sa'adah */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-dusty-600 gap-4">
          <p className="font-serif italic text-sm text-dusty-800 text-center sm:text-left flex items-center justify-center sm:justify-start space-x-1.5">
            <Sparkles className="w-4 h-4 text-dusty-500 shrink-0" />
            <span>Designed with creativity by <strong>Putri Hayyufi Sa'adah</strong></span>
          </p>

          <p className="text-center sm:text-right text-[11px] text-dusty-500">
            © {new Date().getFullYear()} Putri Hayyufi Sa'adah. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
