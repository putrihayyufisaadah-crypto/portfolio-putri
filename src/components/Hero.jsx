import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Download, 
  Sparkles, 
  GraduationCap, 
  TrendingUp
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-radial-soft"
    >
      {/* Soft Pink Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-dusty-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-dusty-100/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-dusty-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-dusty-100/90 border border-dusty-200 text-dusty-700 text-xs font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.status}</span>
              <span className="text-dusty-300">•</span>
              <span>{personalInfo.major}</span>
              <span className="text-dusty-300">•</span>
              <span className="text-dusty-900 font-bold">🎓 Beasiswa ADik</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <span className="text-sm md:text-base font-medium tracking-widest text-dusty-600 uppercase block font-sans">
                Welcome to My Portfolio
              </span>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif font-extrabold text-dusty-950 tracking-tight leading-[1.15]">
                Hi, I'm{" "}
                <span className="text-gradient-luxury block sm:inline">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2 pt-1">
                <span className="h-[2px] w-8 bg-dusty-300 inline-block" />
                <p className="text-lg sm:text-xl font-medium text-dusty-700 tracking-wide">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-dusty-800/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-dusty-700 hover:bg-dusty-800 text-cream-100 font-medium text-sm shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <span>Explore My Portfolio</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                type="button"
                onClick={onOpenCV}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-dusty-100/60 border border-dusty-300 text-dusty-800 font-medium text-sm shadow-xs hover:shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-dusty-600" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Icons & Highlights */}
            <div className="pt-4 border-t border-dusty-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-semibold text-dusty-600 uppercase tracking-wider">
                  Connect:
                </span>
                
                {/* Instagram */}
                <a
                  href={personalInfo.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-dusty-200 border border-dusty-200 flex items-center justify-center text-dusty-700 hover:text-dusty-950 transition-all duration-300 hover:scale-110 shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.contact.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-dusty-200 border border-dusty-200 flex items-center justify-center text-dusty-700 hover:text-dusty-950 transition-all duration-300 hover:scale-110 shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-dusty-200 border border-dusty-200 flex items-center justify-center text-dusty-700 hover:text-emerald-700 transition-all duration-300 hover:scale-110 shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Institution Tag */}
              <div className="flex items-center space-x-2 text-xs text-dusty-700 bg-dusty-100/70 px-3 py-1.5 rounded-full border border-dusty-200/70">
                <GraduationCap className="w-4 h-4 text-dusty-600" />
                <span className="font-medium">{personalInfo.university}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Luxury Framed Portrait with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4]">
              {/* Luxury Decorative Arched Frame Backing */}
              <div className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-dusty-300 via-dusty-200 to-cream-100 transform rotate-3 scale-102 shadow-soft-luxury opacity-80" />
              <div className="absolute inset-0 rounded-[45px] border-2 border-dusty-300/60 transform -rotate-2 scale-98 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-[42px] overflow-hidden bg-dusty-100 border-4 border-white shadow-xl">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  style={{ objectPosition: 'center 62%' }}
                  className="w-full h-full object-cover filter saturate-105 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dusty-950/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-cream-100/90 backdrop-blur-sm text-[11px] font-semibold text-dusty-800 tracking-wider uppercase shadow-xs">
                    Putri Hayyufi Sa'adah
                  </span>
                </div>
              </div>

              {/* Floating Pill 1: Top Right */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-dusty-200 shadow-md flex items-center space-x-2"
              >
                <div className="w-8 h-8 rounded-full bg-dusty-100 flex items-center justify-center text-dusty-700">
                  <Sparkles className="w-4 h-4 text-dusty-600" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-dusty-500 font-medium uppercase tracking-wider">Interest</p>
                  <p className="text-xs font-bold text-dusty-900">Digital Marketing</p>
                </div>
              </motion.div>

              {/* Floating Pill 2: Bottom Left */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-dusty-200 shadow-md flex items-center space-x-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-dusty-200/80 flex items-center justify-center text-dusty-800">
                  <TrendingUp className="w-4 h-4 text-dusty-700" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-dusty-500 font-medium uppercase tracking-wider">Focus</p>
                  <p className="text-xs font-bold text-dusty-900">Social Media & Creative</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
