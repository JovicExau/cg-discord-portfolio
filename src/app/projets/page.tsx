'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  status: string;
  technologies: string[];
  description: string;
  image: string;
  color: string;
  link?: string;
  linkType?: 'website' | 'github';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Refonte de site web",
    category: "Web",
    status: "Terminé",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    description: "Refonte complète du site web du cabinet informatique CEIPI. J'ai modernisé leur interface en migrant de Vue.js vers Next.js, améliorant ainsi les performances et l'expérience utilisateur tout en optimisant le référencement.",
    image: "/Projets/ceipi.png",
    color: "from-blue-600 to-blue-700",
    link: "https://cab-ceipi.com/",
    linkType: "website"
  },
  {
    id: 2,
    title: "Application anti fraude sur chantier",
    category: "Web",
    status: "Terminé",
    technologies: ["Power Apps", "Power Automate", "SharePoint"],
    description: "Application anti-fraude pour chantiers développée pour une entreprise française. Le système permet d'enregistrer et de vérifier en temps réel la conformité des travailleurs sur les sites, réduisant considérablement les risques de fraude.",
    image: "/Projets/controle.png",
    color: "from-gray-700 to-gray-800"
  },
  {
    id: 3,
    title: "Plateforme de e commerce",
    category: "Web",
    status: "Terminé",
    technologies: ["PHP", "MySQL", "JavaScript"],
    description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat, système de paiement et interface d'administration. Solution robuste et scalable pour la vente en ligne.",
    image: "/Projets/fullshop.png",
    color: "from-purple-600 to-purple-700",
    link: "https://github.com/JovicExau/Cg-Collab-Fullshop",
    linkType: "github"
  },
  {
    id: 4,
    title: "Application d'annonce immobilière",
    category: "Web",
    status: "En cours",
    technologies: ["Next.js", "Laravel", "Docker", "PostgreSQL"],
    description: "Application innovante d'annonces immobilières avec recherche avancée, géolocalisation, et système de messagerie intégré. Projet moderne utilisant une architecture microservices.",
    image: "/Projets/immolink.png",
    color: "from-orange-600 to-orange-700"
  },
  {
    id: 5,
    title: "Rpg 2D",
    category: "Jeu",
    status: "Terminé",
    technologies: ["RPG Maker"],
    description: "RPG 2D immersif avec système de combat tactique, quêtes principales et secondaires, et univers riche. Un projet passionnant développé avec RPG Maker.",
    image: "/Projets/schaflos.png",
    color: "from-indigo-600 to-indigo-700"
  },
  {
    id: 6,
    title: "Gestionnaire de tache",
    category: "Desktop",
    status: "Terminé",
    technologies: ["Python", "Tkinter"],
    description: "Gestionnaire de tâches desktop avec interface intuitive, système de priorités, rappels et sauvegarde automatique. Solution efficace pour l'organisation personnelle et professionnelle.",
    image: "/Projets/tache.png",
    color: "from-teal-600 to-teal-700",
    link: "https://github.com/JovicExau/Cg-Own-Gest_Tache",
    linkType: "github"
  },
  {
    id: 7,
    title: "Template landing page",
    category: "Web",
    status: "Terminé",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    description: "Template moderne de landing page pour startups technologiques. Design responsive, animations fluides et optimisé pour les conversions.",
    image: "/Projets/tech.png",
    color: "from-slate-600 to-slate-700",
    link: "https://github.com/JovicExau/template-site",
    linkType: "github"
  }
];

export default function ProjetsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1;
        }

        .project-image img {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image img {
          transform: scale(1.12);
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .status-done {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        }

        .status-progress {
          background: rgba(234, 179, 8, 0.2);
          border: 1px solid rgba(234, 179, 8, 0.3);
          color: #fcd34d;
        }

        .tech-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #93c5fd;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.5);
          color: #bfdbfe;
        }

        .modal-overlay {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s ease-out;
        }

        .filter-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Mes <span className="text-blue-600">Projets</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explorez mes réalisations : applications web innovantes, jeux vidéo créatifs 
              et solutions desktop performantes.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'active text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                {category === 'all' ? 'Tous les projets' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden animate-fade-in group h-full aspect-square"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                  
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-3 sm:p-4">
                    {/* Status Badge */}
                    <div className={`status-badge text-xs sm:text-sm ${project.status === 'Terminé' ? 'status-done' : 'status-progress'}`}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{background: project.status === 'Terminé' ? '#86efac' : '#fcd34d'}}></span>
                      {project.status}
                    </div>

                    {/* Title et infos en bas */}
                    <div className="text-left w-full">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-0.5 sm:mb-1 line-clamp-2">{project.title}</h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6.5L8 4" />
                        </svg>
                        <span className="truncate">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <div 
              className="fixed inset-0 modal-overlay z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div 
                className="modal-content rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image */}
                <div className="relative h-40 sm:h-64 md:h-80 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-30`}></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 sm:w-10 h-9 sm:h-10 bg-gray-900/60 hover:bg-gray-900/80 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50"
                  >
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Modal Body */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Title Section */}
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <div className={`status-badge text-xs sm:text-sm ${selectedProject.status === 'Terminé' ? 'status-done' : 'status-progress'}`}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{background: selectedProject.status === 'Terminé' ? '#86efac' : '#fcd34d'}}></span>
                        {selectedProject.status}
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6.5L8 4" />
                        </svg>
                        <span>{selectedProject.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                    {selectedProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Technologies utilisées</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link Button */}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
                    >
                      {selectedProject.linkType === 'website' ? (
                        <>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          Visiter le site
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Voir sur GitHub
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}