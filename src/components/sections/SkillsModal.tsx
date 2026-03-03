'use client';

import React from 'react';
import Modal from '@/components/ui/Modal';
import { skills } from '@/data/skills';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const skillCategories = {
    frontend: {
      name: 'Frontend',
      icon: 'react-plain',
      color: 'from-blue-600 to-cyan-600',
      lightColor: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-300/30',
      skills: skills.filter(skill => skill.category === 'frontend'),
    },
    backend: {
      name: 'Backend',
      icon: 'laravel-plain',
      color: 'from-purple-600 to-pink-600',
      lightColor: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-300/30',
      skills: skills.filter(skill => skill.category === 'backend'),
    },
    tools: {
      name: 'Outils',
      icon: 'git-plain',
      color: 'from-orange-600 to-red-600',
      lightColor: 'from-orange-400 to-red-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-300/30',
      skills: skills.filter(skill => skill.category === 'tools'),
    },
    conception: {
      name: 'Conception',
      icon: 'design.png',
      color: 'from-green-600 to-emerald-600',
      lightColor: 'from-green-400 to-emerald-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-300/30',
      skills: skills.filter(skill => skill.category === 'conception'),
    },
    pack: {
      name: 'Pack',
      icon: 'googlecloud-plain',
      color: 'from-indigo-600 to-blue-600',
      lightColor: 'from-indigo-400 to-blue-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-300/30',
      skills: skills.filter(skill => skill.category === 'pack'),
    },
  };

  return (
    <>
      <style>{`
        .skills-modal-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.6) rgba(255, 255, 255, 0.1);
        }

        .skills-modal-content::-webkit-scrollbar {
          width: 10px;
        }

        .skills-modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          margin: 8px 0;
        }

        .skills-modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .skills-modal-content::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.95) 0%, rgba(8, 145, 178, 0.95) 100%);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.6), inset 0 0 6px rgba(255, 255, 255, 0.3);
        }

        /* Glasmorphism pour le modal */
        .skills-modal-glass {
          background: rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2) !important;
        }
      `}</style>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        className="skills-modal-glass"
        title=""
      >
        <div className="skills-modal-content max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(skillCategories).map(([category, data]) => (
              <div 
                key={category} 
                className={`${data.bgColor} ${data.borderColor} rounded-2xl p-6 border backdrop-blur-xl hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl group`}
              >
                {/* Header avec icone et titre */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    {data.icon.includes('.png') || data.icon.includes('.jpg') ? (
                      <img 
                        src={`/Outils/${data.icon}`} 
                        alt={data.name} 
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <i className={`devicon-${data.icon} text-white`} style={{ fontSize: '2rem' }} />
                    )}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                    {data.name}
                  </h3>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {data.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="group/item flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                    >
                      {/* Icone */}
                      <div className="relative">
                        {skill.icon.includes('.png') || skill.icon.includes('.jpg') ? (
                          <img 
                            src={`/Outils/${skill.icon}`} 
                            alt={skill.name} 
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm group-hover/item:drop-shadow-lg transition-all duration-200 group-hover/item:scale-110"
                          />
                        ) : (
                          <i 
                            className={`devicon-${skill.icon} colored text-3xl sm:text-4xl group-hover/item:scale-110 transition-transform duration-200`}
                          />
                        )}
                      </div>
                      
                      {/* Label */}
                      <span className="text-xs sm:text-sm font-medium text-gray-200 text-center group-hover/item:text-white transition-colors duration-200 line-clamp-2">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SkillsModal;