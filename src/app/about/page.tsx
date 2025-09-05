'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SkillsModal from '@/components/sections/SkillsModal';
import CertificatesModal from '@/components/sections/CertificatesModal';

export default function AboutPage() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isCertificatesModalOpen, setIsCertificatesModalOpen] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4">
            <Icon name="user" className="text-white text-xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            À Propos de <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Moi</span>
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Passionné par la création d'expériences numériques exceptionnelles.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-slide-up">
          <div className="space-y-4">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpeg"
                alt="Jovic BATA-NGUIMBI - Creative Designer"
                width={300}
                height={320}
                className="w-full h-full object-cover object-[center_80%]"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Mon <span className="text-blue-600">Parcours</span>
              </h2>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Avec plus de 10 ans d'expérience dans le design et le développement web, 
                  j'ai travaillé sur des projets variés allant des applications web complexes 
                  aux interfaces utilisateur innovantes.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ma passion pour l'animation et l'interaction utilisateur me pousse 
                  constamment à explorer de nouvelles technologies.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="text-center p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                  <div className="text-xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-gray-300 text-xs font-medium">Projets</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                  <div className="text-xl font-bold text-blue-600 mb-1">30+</div>
                  <div className="text-gray-300 text-xs font-medium">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            variant="primary"
            size="md"
            onClick={() => setIsSkillsModalOpen(true)}
            className="group"
          >
            <Icon name="code" className="mr-2" />
            Voir mes Compétences
          </Button>
          
          <Button
            variant="outline"
            size="md"
            onClick={() => setIsCertificatesModalOpen(true)}
            className="group"
          >
            <Icon name="certificate" className="mr-2" />
            Voir mes Certificats
          </Button>
        </div>
      </div>

      {/* Modals */}
      <SkillsModal 
        isOpen={isSkillsModalOpen} 
        onClose={() => setIsSkillsModalOpen(false)} 
      />
      <CertificatesModal 
        isOpen={isCertificatesModalOpen} 
        onClose={() => setIsCertificatesModalOpen(false)} 
      />
    </div>
  );
}
