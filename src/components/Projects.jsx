import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Sparkles, 
  Eye, 
  ExternalLink, 
  ArrowUpRight, 
  Layers,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "Semua"
    ? projectsData
    : projectsData.filter(item => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white/80 relative">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-dusty-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-dusty-100 border border-dusty-200 text-dusty-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-dusty-500" />
            <span>Karya & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dusty-950 tracking-tight">
            My Creative Projects
          </h2>
          <p className="text-dusty-700 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Eksplorasi desain konten media sosial, poster promosi, template Canva, video editing, dan proyek bisnis digital.
          </p>
          <div className="w-16 h-1 bg-dusty-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-dusty-700 text-cream-100 shadow-md scale-105'
                    : 'bg-white text-dusty-700 border border-dusty-200 hover:bg-dusty-100 hover:border-dusty-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-dusty-200 shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image & Category Pill */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-dusty-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dusty-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-full bg-cream-100/90 text-dusty-900 text-xs font-bold shadow-lg flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 text-dusty-700" />
                        <span>Quick Preview</span>
                      </button>
                    </div>

                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-dusty-800 uppercase tracking-wider shadow-xs border border-dusty-200/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-[11px] font-semibold text-dusty-500 uppercase tracking-wider mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-lg font-serif font-bold text-dusty-950 mb-2.5 group-hover:text-dusty-800 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-dusty-700 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Tools Used Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dusty-100">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-cream-100 text-dusty-700 border border-dusty-200/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: View Project Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-dusty-100 hover:bg-dusty-700 text-dusty-800 hover:text-cream-100 text-xs font-semibold flex items-center justify-center space-x-2 transition-all duration-300 group-hover:border-dusty-700 shadow-xs"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
