'use client';

import React from 'react';
import Modal from '@/components/ui/Modal';
import Icon from '@/components/ui/Icon';
import { skills } from '@/data/skills';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    design: skills.filter(skill => skill.category === 'design'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mes Compétences">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon 
                  name={category === 'frontend' ? 'code' : 
                        category === 'backend' ? 'tools' :
                        category === 'design' ? 'design' : 'tools'} 
                  className="text-white text-2xl" 
                />
              </div>
              <h3 className="text-xl font-bold text-blue-500 capitalize">
                {category === 'frontend' ? 'Frontend' : 
                 category === 'backend' ? 'Backend' :
                 category === 'design' ? 'Design' : 'Outils'}
              </h3>
            </div>
            
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SkillsModal;
